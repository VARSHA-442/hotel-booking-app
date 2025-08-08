import React from 'react';
import { MapPin, Star } from 'lucide-react';

interface FeaturedDestinationsProps {
  onViewAllDestinations?: () => void;
}

const FeaturedDestinations: React.FC<FeaturedDestinationsProps> = ({ onViewAllDestinations }) => {
  const destinations = [
    {
      id: 1,
      name: 'Urbanza Suites',
      location: 'Main Road 123 Street , 23 Colony',
      price: 399,
      rating: 4.5,
      image: 'https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
      badge: 'Best Seller'
    },
    {
      id: 2,
      name: 'Urbanza Suites',
      location: 'Main Road 123 Street , 23 Colony',
      price: 299,
      rating: 4.5,
      image: 'https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
      badge: null
    },
    {
      id: 3,
      name: 'Urbanza Suites',
      location: 'Main Road 123 Street , 23 Colony',
      price: 249,
      rating: 4.5,
      image: 'https://images.pexels.com/photos/1743229/pexels-photo-1743229.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
      badge: 'Best Seller'
    },
    {
      id: 4,
      name: 'Urbanza Suites',
      location: 'Main Road 123 Street , 23 Colony',
      price: 199,
      rating: 4.5,
      image: 'https://images.pexels.com/photos/271639/pexels-photo-271639.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
      badge: null
    }
  ];

  const handleBookNow = (destinationId: number, destinationName: string) => {
    console.log(`Booking ${destinationName} (ID: ${destinationId})`);
  };

  const handleViewAllDestinations = () => {
    if (onViewAllDestinations) {
      onViewAllDestinations();
    }
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Featured Destination
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg">
            Discover our handpicked selection of exceptional properties around the world, offering 
            unparalleled luxury and unforgettable experiences.
          </p>
          <button
            onClick={handleViewAllDestinations}
            className="mt-6 bg-gray-900 text-white px-8 py-3 rounded-lg hover:bg-gray-800 transition-colors"
          >
            View All Destinations
          </button>
        </div>

        {/* Destinations Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {destinations.map((destination) => (
            <div key={destination.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              {/* Image */}
              <div className="relative">
                <img
                  src={destination.image}
                  alt={destination.name}
                  className="w-full h-48 object-cover"
                />
                {destination.badge && (
                  <div className="absolute top-4 left-4 bg-white text-gray-800 px-3 py-1 rounded-full text-sm font-medium">
                    {destination.badge}
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Name and Rating */}
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xl font-semibold text-gray-900">
                    {destination.name}
                  </h3>
                  <div className="flex items-center space-x-1">
                    <Star className="w-4 h-4 text-orange-400 fill-current" />
                    <span className="text-gray-600 text-sm">{destination.rating}</span>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-center text-gray-500 mb-4">
                  <MapPin className="w-4 h-4 mr-1" />
                  <span className="text-sm">{destination.location}</span>
                </div>

                {/* Price and Book Button */}
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-2xl font-bold text-gray-900">
                      ${destination.price}
                    </span>
                    <span className="text-gray-500">/night</span>
                  </div>
                  <button 
                    onClick={() => handleBookNow(destination.id, destination.name)}
                    className="bg-gray-100 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-200 transition-colors"
                  >
                    Book Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedDestinations;