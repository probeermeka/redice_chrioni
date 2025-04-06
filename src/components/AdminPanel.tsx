import React, { useState, useEffect } from 'react';
import { Users, Calendar, RefreshCw, Database } from 'lucide-react';
import { RsvpFormData } from '../types/form';
import { StorageService } from '../services/storage';
import { submitTestData } from '../utils/testData';

export const AdminPanel = () => {
  const [rsvps, setRsvps] = useState<RsvpFormData[]>([]);
  const [totalGuests, setTotalGuests] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmittingTest, setIsSubmittingTest] = useState(false);
  const storageService = StorageService.getInstance();

  useEffect(() => {
    loadRsvps();
  }, []);

  const loadRsvps = async () => {
    setIsLoading(true);
    try {
      const data = await storageService.getAllRsvps();
      setRsvps(data);
      const total = data.reduce((sum: number, rsvp: RsvpFormData) => 
        sum + parseInt(rsvp.guests, 10), 0);
      setTotalGuests(total);
    } catch (error) {
      console.error('Error loading RSVPs:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmitTestData = async () => {
    setIsSubmittingTest(true);
    try {
      await submitTestData();
      await loadRsvps();
    } catch (error) {
      console.error('Error submitting test data:', error);
    } finally {
      setIsSubmittingTest(false);
    }
  };

  return (
    <div className="bg-white/90 backdrop-blur-sm rounded-xl p-4 md:p-8">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-gray-800">
          Panel Administrateur
        </h2>
        <div className="flex items-center gap-4">
          <button
            onClick={handleSubmitTestData}
            disabled={isSubmittingTest}
            className="flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white px-3 py-2 rounded-lg transition-colors disabled:opacity-50"
          >
            <Database className={`w-4 h-4 ${isSubmittingTest ? 'animate-spin' : ''}`} />
            <span className="text-sm">Ajouter données test</span>
          </button>
          <button
            onClick={loadRsvps}
            disabled={isLoading}
            className="flex items-center gap-2 bg-gray-100 hover:bg-gray-200 px-3 py-2 rounded-lg transition-colors"
          >
            <RefreshCw className={`w-4 h-4 ${isLoading ? 'animate-spin' : ''}`} />
            <span className="text-sm">Actualiser</span>
          </button>
          <div className="flex items-center gap-2 bg-pink-100 px-4 py-2 rounded-lg">
            <Users className="w-5 h-5 text-pink-500" />
            <span className="font-medium text-pink-700">
              {totalGuests} {totalGuests > 1 ? 'invités' : 'invité'}
            </span>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        {rsvps.map((rsvp, index) => (
          <div
            key={index}
            className="bg-gray-50 p-4 rounded-lg border border-gray-200"
          >
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-medium text-gray-800">{rsvp.name}</h3>
                <p className="text-sm text-gray-600">
                  {rsvp.guests} {parseInt(rsvp.guests) > 1 ? 'personnes' : 'personne'}
                </p>
              </div>
              <div className="text-sm text-gray-500 flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                {new Date(rsvp.timestamp).toLocaleDateString('fr-FR')}
              </div>
            </div>
          </div>
        ))}

        {rsvps.length === 0 && (
          <p className="text-center text-gray-500 py-8">
            Aucune confirmation pour le moment
          </p>
        )}
      </div>
    </div>
  );
};