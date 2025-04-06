export interface RsvpFormData {
  name: string;
  guests: string;
}

export type FormStatus = 'idle' | 'submitting' | 'success' | 'error';

export interface GoogleScriptResponse {
  result: 'success' | 'error';
  message: string;
}