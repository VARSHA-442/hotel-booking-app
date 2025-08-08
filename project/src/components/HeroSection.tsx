import React, { useState } from 'react';
import { Search, ChevronDown, MapPin } from 'lucide-react';

const HeroSection = () => {
  const [destination, setDestination] = useState('');
  const [showDestinations, setShowDestinations] = useState(false);
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');
  const [guestCount, setGuestCount] = useState(2);

  const destinations = [
    { name: 'Bangalore', display: 'Bangalore' },
    { name: 'Hyderabad', display: 'Hyderabad' },
    { name: 'Mumbai', display: 'Mumbai' },
    { name: 'Delhi', display: 'Delhi' }
  ];

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Search submitted:', { destination, checkIn, checkOut, guestCount });
  };

  const handleDestinationSelect = (dest: { name: string; display: string }) => {
    setDestination(dest.display);
    setShowDestinations(false);
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://itbrief.com.au/uploads/story/2023/07/20/hotel1.webp')`
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-6 w-full max-w-3xl mx-auto">
        {/* Main Heading */}
        <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
          Discover Your Perfect Gateway Destination
        </h1>

        {/* Subtitle */}
        <p className="text-lg mb-8 text-gray-200">
          Unparalleled luxury and comfort await at the world's most exclusive 
          hotels and resorts. Start your journey today.
        </p>

        {/* Search Form */}
        <form onSubmit={handleSearch} className="bg-white rounded-lg p-4 shadow-lg w-full">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {/* Destination */}
            <div className="text-left">
              <label className="block text-gray-700 text-sm font-medium mb-1">
                Destination
              </label>
              <div className="relative">
                <button
                  type="button"
                  onClick={() => setShowDestinations(!showDestinations)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 text-left flex items-center justify-between"
                >
                  <span className={destination ? 'text-gray-900' : 'text-gray-400'}>
                    {destination || 'Type here'}
                  </span>
                  <ChevronDown className="w-4 h-4 text-gray-400" />
                </button>
                
                {showDestinations && (
                  <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-gray-200 rounded-md shadow-lg z-10 max-h-60 overflow-y-auto">
                    {destinations.map((dest) => (
                      <button
                        key={dest.name}
                        type="button"
                        onClick={() => handleDestinationSelect(dest)}
                        className="w-full px-3 py-2 text-left hover:bg-gray-50 flex items-center space-x-2"
                      >
                        <MapPin className="w-4 h-4 text-gray-400" />
                        <span className="text-gray-900">{dest.display}</span>
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Check In */}
            <div className="text-left">
              <label className="block text-gray-700 text-sm font-medium mb-1">
                Check in
              </label>
              <input
                type="date"
                placeholder="dd-mm-yyyy"
                value={checkIn}
                onChange={(e) => setCheckIn(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900"
              />
            </div>

            {/* Check Out */}
            <div className="text-left">
              <label className="block text-gray-700 text-sm font-medium mb-1">
                Check out
              </label>
              <input
                type="date"
                placeholder="dd-mm-yyyy"
                value={checkOut}
                onChange={(e) => setCheckOut(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900"
              />
            </div>

            {/* Guests and Search */}
            <div className="text-left">
              <label className="block text-gray-700 text-sm font-medium mb-1">
                Guests
              </label>
              <div className="flex items-center">
                <input
                  type="number"
                  min="1"
                  value={guestCount}
                  onChange={(e) => setGuestCount(parseInt(e.target.value) || 1)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 mr-2"
                />
                <button 
                  type="submit"
                  className="bg-black text-white px-4 py-2 rounded-md hover:bg-gray-800 transition-colors flex items-center justify-center space-x-2"
                >
                  <Search className="w-4 h-4" />
                  <span>Search</span>
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default HeroSection;