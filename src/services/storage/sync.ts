import { RsvpFormData } from '../../types/form';
import { localStorageService } from './local';
import { submitToGoogleSheets, fetchFromGoogleSheets } from '../api/googleSheets';

export class SyncService {
  private static instance: SyncService;
  private syncInProgress = false;

  private constructor() {}

  static getInstance(): SyncService {
    if (!SyncService.instance) {
      SyncService.instance = new SyncService();
    }
    return SyncService.instance;
  }

  async syncWithRemote(): Promise<void> {
    if (this.syncInProgress) return;
    
    this.syncInProgress = true;
    try {
      const remoteResult = await fetchFromGoogleSheets();
      if (!remoteResult.success || !remoteResult.data) {
        return;
      }

      const localResult = await localStorageService.getAllRsvps();
      if (!localResult.success || !localResult.data) {
        return;
      }

      const newRemoteRsvps = remoteResult.data.filter(remote => 
        !localResult.data!.some(local => 
          local.name === remote.name && 
          local.timestamp === remote.timestamp
        )
      );

      for (const rsvp of newRemoteRsvps) {
        await localStorageService.addRsvp(rsvp);
      }
    } catch (error) {
      console.error('Sync error:', error);
    } finally {
      this.syncInProgress = false;
    }
  }
}