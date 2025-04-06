import React from 'react';
import { Header, FloatingElements, GiftButton, RsvpForm, LocationMap, HotelList, Footer } from './components';

function App() {
  return (
    <div className="min-h-screen bg-celebration">
      <FloatingElements />
      <div className="min-h-screen content-overlay">
        <div className="container mx-auto px-4 py-8 md:py-12">
          {/* Main content wrapper with glass effect */}
          <div className="bg-white/80 backdrop-blur-md rounded-3xl shadow-xl p-6 md:p-8">
            <Header />
            
            {/* Gift button with new styling */}
            <div className="flex justify-center -mt-4 mb-12">
              <GiftButton />
            </div>

            {/* Content sections with consistent styling */}
            <div className="space-y-12">
              <LocationMap />
              <RsvpForm />
              <HotelList />
              <Footer />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;