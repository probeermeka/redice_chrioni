import React from 'react';
import { MapPin, Navigation, Church, PartyPopper } from 'lucide-react';

export const LocationMap = () => {
  const ceremonyMapUrl = "https://www.google.com/maps/search/?api=1&query=Imperiastraat+8+1930+Zaventem";
  const receptionMapUrl = "https://www.google.com/maps/search/?api=1&query=stoofstraat+34+1785+Merchtem";

  return (
    <section className="bg-white/90 backdrop-blur-sm rounded-xl p-4 md:p-8">
      <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-6 text-center">
        Lieux de célébration
      </h3>
      
      <div className="space-y-6">
        {/* Ceremony Location */}
        <div className="w-full max-w-3xl mx-auto">
          <div className="bg-gradient-to-br from-rose-50 to-rose-100 p-4 rounded-t-lg border-t border-x border-rose-200">
            <div className="flex items-center gap-3">
              <Church className="w-6 h-6 text-rose-500" />
              <div>
                <h4 className="font-bold text-gray-800">Cérémonie religieuse</h4>
                <p className="text-gray-600">Imperiastraat 8, 1930 Zaventem</p>
              </div>
            </div>
          </div>
          
          <div className="aspect-video relative rounded-b-lg overflow-hidden border-b border-x border-rose-200">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2518.231983322588!2d4.4559!3d50.8859!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c3dd0389876d45%3A0x6a7c2f21b8f57e23!2sImperiastraat%208%2C%201930%20Zaventem!5e0!3m2!1sen!2sbe!4v1234567890!5m2!1sen!2sbe"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0"
            ></iframe>
            <div className="absolute bottom-4 right-4">
              <a
                href={ceremonyMapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-lg hover:bg-gray-50 transition-colors"
              >
                <Navigation className="w-4 h-4 text-rose-500" />
                <span className="text-sm font-medium text-gray-700">Itinéraire</span>
              </a>
            </div>
          </div>
        </div>

        {/* Reception Location */}
        <div className="w-full max-w-3xl mx-auto">
          <div className="bg-gradient-to-br from-rose-50 to-rose-100 p-4 rounded-t-lg border-t border-x border-rose-200">
            <div className="flex items-center gap-3">
              <PartyPopper className="w-6 h-6 text-rose-500" />
              <div>
                <h4 className="font-bold text-gray-800">Réception</h4>
                <p className="text-gray-600">Stoofstraat 34, 1785 Merchtem</p>
              </div>
            </div>
          </div>
          
          <div className="aspect-video relative rounded-b-lg overflow-hidden border-b border-x border-rose-200">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2516.8!3d50.9!4d4.2!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c3c8b5e5e5e5e5%3A0x1234567890abcdef!2sStoofstraat%2034%2C%201785%20Merchtem!5e0!3m2!1sen!2sbe!4v1234567890!5m2!1sen!2sbe"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0"
            ></iframe>
            <div className="absolute bottom-4 right-4">
              <a
                href={receptionMapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-lg hover:bg-gray-50 transition-colors"
              >
                <Navigation className="w-4 h-4 text-rose-500" />
                <span className="text-sm font-medium text-gray-700">Itinéraire</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};