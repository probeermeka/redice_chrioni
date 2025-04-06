import { RsvpFormData } from '../types/form';
import { db } from '../utils/db';
import { submitToGoogleSheets, fetchFromGoogleSheets } from './googleSheets';

export class StorageService {
  private static instance: StorageService;
  private syncInProgress = false;

  private constructor() {}

  static getInstance(): StorageService {
    if (!StorageService.instance) {
      StorageService.instance = new StorageService();
    }
    return StorageService.instance;
  }

  async submitRsvp(formData: RsvpFormData): Promise<void> {
    try {
      // First, save locally
      await db.addRsvp(formData);
      
      // Then try to sync with Google Sheets
      await submitToGoogleSheets(formData);
    } catch (error) {
      console.error('Error submitting RSVP:', error);
      throw error;
    }
  }

  async getAllRsvps(): Promise<RsvpFormData[]> {
    try {
      // Try to get from Google Sheets first
      const remoteRsvps = await fetchFromGoogleSheets();
      
      if (remoteRsvps.length > 0) {
        // Update local database with remote data
        await this.syncLocalWithRemote(remoteRsvps);
        return remoteRsvps;
      }

      // Fallback to local data if remote fails
      return await db.getAllRsvps();
    } catch (error) {
      console.error('Error getting RSVPs:', error);
      // Fallback to local data
      return await db.getAllRsvps();
    }
  }

  private async syncLocalWithRemote(remoteRsvps: RsvpFormData[]): Promise<void> {
    if (this.syncInProgress) return;
    
    this.syncInProgress = true;
    try {
      await db.init();
      const localRsvps = await db.getAllRsvps();
      
      // Find new remote entries
      const newRemoteRsvps = remoteRsvps.filter(remote => 
        !localRsvps.some(local => 
          local.name === remote.name && 
          local.timestamp === remote.timestamp
        )
      );

      // Add new remote entries to local DB
      for (const rsvp of newRemoteRsvps) {
        await db.addRsvp(rsvp);
      }
    } catch (error) {
      console.error('Error syncing data:', error);
    } finally {
      this.syncInProgress = false;
    }
  }
}