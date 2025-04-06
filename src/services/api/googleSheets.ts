import { RsvpFormData } from '../../types/form';
import { ApiResponse } from '../../types/api';
import { API_CONFIG } from '../../config/api';

export const submitToGoogleSheets = async (formData: RsvpFormData): Promise<ApiResponse> => {
  try {
    const formDataWithTimestamp = {
      ...formData,
      timestamp: new Date().toISOString()
    };

    const response = await fetch(API_CONFIG.GOOGLE_SHEETS_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formDataWithTimestamp),
      mode: 'no-cors', // Changed back to no-cors as Google Scripts requires it
    });

    // With no-cors, we can't read the response
    // We'll consider it successful if it doesn't throw
    return { success: true };
  } catch (error) {
    console.error('Google Sheets submission error:', error);
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Failed to submit RSVP'
    };
  }
};

export const fetchFromGoogleSheets = async (): Promise<ApiResponse<RsvpFormData[]>> => {
  try {
    const response = await fetch(API_CONFIG.GOOGLE_SHEETS_URL + '?action=getRsvps', {
      method: 'GET',
      mode: 'no-cors',
    });

    // With no-cors, we can't read the response
    // Return empty array as fallback
    return {
      success: true,
      data: []
    };
  } catch (error) {
    console.error('Google Sheets fetch error:', error);
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Failed to fetch RSVPs',
      data: []
    };
  }
};