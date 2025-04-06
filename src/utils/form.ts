import { RsvpFormData, GoogleScriptResponse } from '../types/form';
import { GOOGLE_SCRIPT_URL } from '../config/constants';

export const submitRsvpForm = async (formData: RsvpFormData): Promise<void> => {
  try {
    const response = await fetch(GOOGLE_SCRIPT_URL, {
      method: 'POST',
      mode: 'no-cors',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData)
    });

    // Since we're using no-cors, we can't actually read the response
    // We'll assume success if the request doesn't throw
    await new Promise(resolve => setTimeout(resolve, 500)); // UX delay
  } catch (error) {
    console.error('Form submission error:', error);
    throw error;
  }
};

export const getRsvps = async (): Promise<RsvpFormData[]> => {
  try {
    const response = await fetch(GOOGLE_SCRIPT_URL);
    const data = await response.json();
    return data.rsvps || [];
  } catch (error) {
    console.error('Error getting RSVPs:', error);
    return [];
  }
};