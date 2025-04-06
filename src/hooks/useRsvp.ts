import { useState, useCallback } from 'react';
import { RsvpFormData, FormStatus } from '../types/form';
import { submitToGoogleSheets } from '../services/api/googleSheets';
import { localStorageService } from '../services/storage/local';

export const useRsvp = () => {
  const [status, setStatus] = useState<FormStatus>('idle');
  const [error, setError] = useState<string>('');
  const [totalGuests, setTotalGuests] = useState<number>(0);

  const updateGuestCount = useCallback(async () => {
    try {
      const result = await localStorageService.getAllRsvps();
      if (result.success && result.data) {
        const total = result.data.reduce((sum, rsvp) => 
          sum + parseInt(rsvp.guests, 10), 0);
        setTotalGuests(total);
      }
    } catch (err) {
      console.error('Error updating guest count:', err);
    }
  }, []);

  const submitRsvp = async (formData: RsvpFormData): Promise<boolean> => {
    setStatus('submitting');
    setError('');

    try {
      // First try Google Sheets
      const sheetsResult = await submitToGoogleSheets(formData);
      
      // Then save to local storage regardless of Google Sheets result
      const localResult = await localStorageService.addRsvp(formData);
      
      if (!localResult.success) {
        throw new Error(localResult.error || 'Failed to save RSVP');
      }

      // If both succeeded or at least local storage worked
      setStatus('success');
      await updateGuestCount();
      return true;
    } catch (err) {
      console.error('Submit error:', err);
      setStatus('error');
      setError('Une erreur est survenue. Veuillez réessayer.');
      return false;
    }
  };

  return {
    status,
    error,
    totalGuests,
    submitRsvp,
    updateGuestCount,
  };
};