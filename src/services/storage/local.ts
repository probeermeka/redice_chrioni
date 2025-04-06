import { RsvpFormData } from '../../types/form';
import { ApiResponse } from '../../types/api';

const DB_NAME = 'RsvpDB';
const STORE_NAME = 'rsvps';
const DB_VERSION = 1;

class LocalStorageService {
  private db: IDBDatabase | null = null;

  async init(): Promise<ApiResponse> {
    if (this.db) {
      return { success: true };
    }

    try {
      return new Promise((resolve, reject) => {
        const request = indexedDB.open(DB_NAME, DB_VERSION);

        request.onerror = () => reject({ 
          success: false, 
          error: request.error?.message 
        });

        request.onsuccess = () => {
          this.db = request.result;
          resolve({ success: true });
        };

        request.onupgradeneeded = (event) => {
          const db = (event.target as IDBOpenDBRequest).result;
          if (!db.objectStoreNames.contains(STORE_NAME)) {
            db.createObjectStore(STORE_NAME, { 
              keyPath: ['name', 'timestamp']
            });
          }
        };
      });
    } catch (error) {
      return {
        success: false,
        error: 'Failed to initialize local database'
      };
    }
  }

  async addRsvp(rsvp: RsvpFormData): Promise<ApiResponse> {
    try {
      await this.init();

      return new Promise((resolve, reject) => {
        const transaction = this.db!.transaction(STORE_NAME, 'readwrite');
        const store = transaction.objectStore(STORE_NAME);

        const rsvpWithTimestamp = {
          ...rsvp,
          timestamp: new Date().toISOString()
        };

        const request = store.add(rsvpWithTimestamp);

        request.onsuccess = () => resolve({ success: true });
        request.onerror = () => reject({ 
          success: false, 
          error: request.error?.message 
        });
      });
    } catch (error) {
      return {
        success: false,
        error: 'Failed to add RSVP to local storage'
      };
    }
  }

  async getAllRsvps(): Promise<ApiResponse<RsvpFormData[]>> {
    try {
      await this.init();

      return new Promise((resolve, reject) => {
        const transaction = this.db!.transaction(STORE_NAME, 'readonly');
        const store = transaction.objectStore(STORE_NAME);
        const request = store.getAll();

        request.onsuccess = () => resolve({
          success: true,
          data: request.result
        });
        
        request.onerror = () => reject({
          success: false,
          error: request.error?.message,
          data: []
        });
      });
    } catch (error) {
      return {
        success: false,
        error: 'Failed to get RSVPs from local storage',
        data: []
      };
    }
  }
}

export const localStorageService = new LocalStorageService();