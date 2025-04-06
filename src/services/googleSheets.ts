import { RsvpFormData } from '../types/form';
import { GOOGLE_SCRIPT_URL } from '../config/constants';

export const submitToGoogleSheets = async (formData: RsvpFormData): Promise<void> => {
  const formDataWithTimestamp = {
    ...formData,
    timestamp: new Date().toISOString()
  };

  try {
    await fetch(GOOGLE_SCRIPT_URL, {
      method: 'POST',
      mode: 'no-cors',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formDataWithTimestamp)
    });
    
    // Add delay for better UX
    await new Promise(resolve => setTimeout(resolve, 500));
  } catch (error) {
    console.error('Google Sheets submission error:', error);
    throw new Error('Failed to submit form to Google Sheets');
  }
};

export const fetchFromGoogleSheets = async (): Promise<RsvpFormData[]> => {
  try {
    const response = await fetch(GOOGLE_SCRIPT_URL, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
      },
    });
    
    if (!response.ok) {
      throw new Error('Failed to fetch data');
    }

    const data = await response.json();
    return data.rsvps || [];
  } catch (error) {
    console.error('Google Sheets fetch error:', error);
    return [];
  }
};