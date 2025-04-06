import { submitToGoogleSheets } from '../services/api/googleSheets';

const testRsvps = [
  {
    name: "Jean Dupont",
    guests: "3",
    timestamp: new Date(2024, 2, 15).toISOString()
  },
  {
    name: "Marie Martin",
    guests: "2",
    timestamp: new Date(2024, 2, 16).toISOString()
  },
  {
    name: "Pierre Lambert",
    guests: "4",
    timestamp: new Date(2024, 2, 17).toISOString()
  },
  {
    name: "Sophie Bernard",
    guests: "1",
    timestamp: new Date(2024, 2, 18).toISOString()
  },
  {
    name: "Lucas Dubois",
    guests: "2",
    timestamp: new Date(2024, 2, 19).toISOString()
  }
];

export const submitTestData = async () => {
  console.log('Starting test data submission...');
  
  for (const rsvp of testRsvps) {
    try {
      const result = await submitToGoogleSheets(rsvp);
      if (result.success) {
        console.log(`Successfully submitted RSVP for ${rsvp.name}`);
      } else {
        console.error(`Failed to submit RSVP for ${rsvp.name}:`, result.error);
      }
      // Add a small delay between submissions to avoid overwhelming the API
      await new Promise(resolve => setTimeout(resolve, 1000));
    } catch (error) {
      console.error(`Error submitting RSVP for ${rsvp.name}:`, error);
    }
  }
  
  console.log('Test data submission completed');
};