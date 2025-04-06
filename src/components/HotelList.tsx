import React from 'react';
import { Building, Car, ExternalLink, Star, Church, PartyPopper } from 'lucide-react';

const hotels = [
  {
    name: "Crowne Plaza Brussels Airport",
    distance: "1.2 km de l'église",
    url: "https://www.ihg.com/crowneplaza/hotels/fr/fr/brussels/bruap/hoteldetail",
    rating: "4 étoiles",
    icon: "luxury",
    location: "ceremony",
    address: "Leonardo Da Vincilaan 4, 1831 Diegem"
  },
  {
    name: "Hotel Mercure Brussels Airport",
    distance: "1.5 km de l'église",
    url: "https://all.accor.com/hotel/3120/index.fr.shtml",
    rating: "4 étoiles",
    icon: "luxury",
    location: "ceremony",
    address: "Bessenveldstraat 17, 1831 Diegem"
  },
  {
    name: "Hotel Den Dry Ast",
    distance: "0.8 km de la réception",
    url: "https://www.dendryast.be/",
    rating: "3 étoiles",
    icon: "standard",
    location: "reception",
    address: "Nieuwelaan 15, 1785 Merchtem"
  },
  {
    name: "B&B Het Molenhuys",
    distance: "1.2 km de la réception",
    url: "https://www.molenhuys.be/",
    rating: "B&B",
    icon: "standard",
    location: "reception",
    address: "Molenbaan 72, 1785 Merchtem"
  }
];

const HotelIcon = ({ type }: { type: string }) => {
  if (type === 'luxury') {
    return <Building className="w-8 h-8 text-yellow-500" />;
  }
  return <Building className="w-8 h-8 text-rose-500" />;
};

const LocationIcon = ({ type }: { type: string }) => {
  if (type === 'ceremony') {
    return <Church className="w-4 h-4 text-rose-500" />;
  }
  return <PartyPopper className="w-4 h-4 text-rose-500" />;
};

export const HotelList = () => {
  return (
    <div className="space-y-6">
      <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-6 text-center">
        Hébergements recommandés
      </h3>

      {/* Ceremony Area Hotels */}
      <div className="space-y-4">
        <h4 className="text-lg font-semibold text-gray-700 flex items-center gap-2">
          <Church className="w-5 h-5 text-rose-500" />
          Près de la cérémonie
          <span className="text-sm font-normal text-gray-500">(Zaventem)</span>
        </h4>
        <div className="grid gap-4 md:grid-cols-2">
          {hotels
            .filter(hotel => hotel.location === 'ceremony')
            .map((hotel) => (
              <HotelCard key={hotel.name} hotel={hotel} />
            ))}
        </div>
      </div>

      {/* Reception Area Hotels */}
      <div className="space-y-4">
        <h4 className="text-lg font-semibold text-gray-700 flex items-center gap-2">
          <PartyPopper className="w-5 h-5 text-rose-500" />
          Près de la réception
          <span className="text-sm font-normal text-gray-500">(Merchtem)</span>
        </h4>
        <div className="grid gap-4 md:grid-cols-2">
          {hotels
            .filter(hotel => hotel.location === 'reception')
            .map((hotel) => (
              <HotelCard key={hotel.name} hotel={hotel} />
            ))}
        </div>
      </div>
    </div>
  );
};

const HotelCard = ({ hotel }: { hotel: any }) => (
  <a
    href={hotel.url}
    target="_blank"
    rel="noopener noreferrer"
    className="block bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow overflow-hidden group"
  >
    <div className="bg-gray-50 p-4 border-b">
      <div className="flex items-start gap-4">
        <div className="p-2 bg-white rounded-lg shadow-sm">
          <HotelIcon type={hotel.icon} />
        </div>
        <div className="flex-1">
          <h4 className="font-semibold text-gray-800 group-hover:text-rose-500 transition-colors">
            {hotel.name}
          </h4>
          <p className="text-sm text-gray-600 mt-1">{hotel.address}</p>
          <div className="flex items-center gap-1 text-yellow-500 mt-1">
            <Star className="w-4 h-4 fill-current" />
            <span className="text-sm text-gray-600">{hotel.rating}</span>
          </div>
        </div>
      </div>
    </div>
    <div className="p-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2 text-gray-600">
          <Car className="w-4 h-4" />
          <span className="text-sm">{hotel.distance}</span>
        </div>
        <div className="flex items-center gap-1 text-rose-500">
          <span className="text-sm font-medium">Réserver</span>
          <ExternalLink className="w-4 h-4" />
        </div>
      </div>
    </div>
  </a>
);