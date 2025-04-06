import React, { useState, useEffect } from 'react';
import { UserCheck, Users, Loader } from 'lucide-react';
import { RsvpFormData } from '../types/form';
import { useRsvp } from '../hooks/useRsvp';
import { MAX_GUESTS } from '../config/constants';

const INITIAL_FORM_DATA: RsvpFormData = { name: '', guests: '1' };

export const RsvpForm = () => {
  const [formData, setFormData] = useState<RsvpFormData>(INITIAL_FORM_DATA);
  const { status, error, totalGuests, submitRsvp, updateGuestCount } = useRsvp();

  useEffect(() => {
    updateGuestCount();
  }, [updateGuestCount]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name.trim()) {
      return;
    }

    const success = await submitRsvp(formData);
    if (success) {
      setFormData(INITIAL_FORM_DATA);
    }
  };

  if (status === 'success') {
    return (
      <div className="bg-white/90 backdrop-blur-sm rounded-xl p-4 md:p-8">
        <div className="text-center">
          <div className="flex justify-center mb-4">
            <div className="bg-green-100 p-3 rounded-full">
              <UserCheck className="w-8 h-8 text-green-500" />
            </div>
          </div>
          <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-4">
            Merci pour votre confirmation !
          </h3>
          <p className="text-gray-600 mb-4">
            Nous avons bien enregistré votre présence.
          </p>
          {totalGuests > 0 && (
            <p className="text-sm text-gray-500">
              {totalGuests} {totalGuests > 1 ? 'personnes ont' : 'personne a'} confirmé{totalGuests > 1 ? 's' : ''} leur présence
            </p>
          )}
        </div>
      </div>
    );
  }

  return (
    <section className="bg-white/90 backdrop-blur-sm rounded-xl p-4 md:p-8">
      <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-6 text-center">
        Confirmez votre présence
      </h3>

      <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
            Votre nom
          </label>
          <input
            type="text"
            id="name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-pink-500"
            placeholder="Entrez votre nom"
            disabled={status === 'submitting'}
            required
          />
        </div>

        <div>
          <label htmlFor="guests" className="block text-sm font-medium text-gray-700 mb-1">
            Nombre de personnes
          </label>
          <select
            id="guests"
            value={formData.guests}
            onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-pink-500"
            disabled={status === 'submitting'}
            required
          >
            {[...Array(MAX_GUESTS)].map((_, i) => (
              <option key={i + 1} value={i + 1}>
                {i + 1} {i === 0 ? 'personne' : 'personnes'}
              </option>
            ))}
          </select>
        </div>

        {error && (
          <div className="text-red-500 text-sm text-center">
            {error}
          </div>
        )}

        <button
          type="submit"
          disabled={status === 'submitting'}
          className="w-full flex items-center justify-center gap-2 bg-pink-500 hover:bg-pink-600 text-white font-semibold px-6 py-3 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {status === 'submitting' ? (
            <>
              <Loader className="w-5 h-5 animate-spin" />
              <span>Envoi en cours...</span>
            </>
          ) : (
            <>
              <Users className="w-5 h-5" />
              <span>Confirmer ma présence</span>
            </>
          )}
        </button>
      </form>
    </section>
  );
};