import React, { useState } from 'react';
import { MapPin, Star, Wifi, Mountain, Waves } from 'lucide-react';

const RoomsPage = () => {
  const [filters, setFilters] = useState({
    roomTypes: [] as string[],
    priceRanges: [] as string[],
    sortBy: 'price-low'
  });

  const allRooms = [
    {
      id: 1,
      name: 'Urbanza Suites',
      location: 'Bangalore',
      address: 'Main Road 123 Street, 23 Colony',
      price: 399,
      rating: 4.5,
      reviews: '200+ reviews',
      image: 'https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&fit=crop',
      amenities: ['Room Service', 'Mountain View', 'Pool Access'],
      type: 'Luxury Room'
    },
    {
      id: 2,
      name: 'Urbanza Suites',
      location: 'Hyderabad',
      address: 'Main Road 123 Street, 23 Colony',
      price: 299,
      rating: 4.5,
      reviews: '200+ reviews',
      image: 'https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&fit=crop',
      amenities: ['Room Service', 'Mountain View', 'Pool Access'],
      type: 'Double Bed'
    },
    {
      id: 3,
      name: 'Urbanza Suites',
      location: 'Mumbai',
      address: 'Main Road 123 Street, 23 Colony',
      price: 249,
      rating: 4.5,
      reviews: '200+ reviews',
      image: 'https://images.pexels.com/photos/1743229/pexels-photo-1743229.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&fit=crop',
      amenities: ['Free WiFi', 'Room Service', 'Pool Access'],
      type: 'Single Bed'
    },
    {
      id: 4,
      name: 'Urbanza Suites',
      location: 'Delhi',
      address: 'Main Road 123 Street, 23 Colony',
      price: 199,
      rating: 4.5,
      reviews: '200+ reviews',
      image: 'https://images.pexels.com/photos/271639/pexels-photo-271639.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&fit=crop',
      amenities: ['Free WiFi', 'Room Service', 'Pool Access'],
      type: 'Family Suite'
    },
    {
      id: 5,
      name: 'Grand Hotel',
      location: 'Bangalore',
      address: 'MG Road 456 Street, 12 Block',
      price: 599,
      rating: 4.8,
      reviews: '150+ reviews',
      image: 'https://images.pexels.com/photos/338504/pexels-photo-338504.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&fit=crop',
      amenities: ['Free WiFi', 'Room Service', 'Pool Access'],
      type: 'Luxury Room'
    },
    {
      id: 6,
      name: 'City Inn',
      location: 'Mumbai',
      address: 'Bandra West 789 Street, 34 Colony',
      price: 149,
      rating: 4.2,
      reviews: '300+ reviews',
      image: 'https://images.pexels.com/photos/279746/pexels-photo-279746.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&fit=crop',
      amenities: ['Free WiFi', 'Mountain View', 'Pool Access'],
      type: 'Single Bed'
    }
  ];

  // Filter and sort rooms based on current filters
  const getFilteredRooms = () => {
    let filteredRooms = [...allRooms];

    // Filter by room types
    if (filters.roomTypes.length > 0) {
      filteredRooms = filteredRooms.filter(room => 
        filters.roomTypes.includes(room.type)
      );
    }

    // Filter by price ranges
    if (filters.priceRanges.length > 0) {
      filteredRooms = filteredRooms.filter(room => {
        return filters.priceRanges.some(range => {
          switch (range) {
            case '$ 0 to 500':
              return room.price >= 0 && room.price <= 500;
            case '$ 500 to 1000':
              return room.price > 500 && room.price <= 1000;
            case '$ 1000 to 2000':
              return room.price > 1000 && room.price <= 2000;
            case '$ 2000 to 3000':
              return room.price > 2000 && room.price <= 3000;
            default:
              return true;
          }
        });
      });
    }

    // Sort rooms
    switch (filters.sortBy) {
      case 'price-low':
        filteredRooms.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        filteredRooms.sort((a, b) => b.price - a.price);
        break;
      case 'newest':
        // Keep original order for newest
        break;
      default:
        break;
    }

    return filteredRooms;
  };

  const rooms = getFilteredRooms();

  const handleFilterChange = (type: 'roomTypes' | 'priceRanges', value: string) => {
    setFilters(prev => ({
      ...prev,
      [type]: prev[type].includes(value)
        ? prev[type].filter(item => item !== value)
        : [...prev[type], value]
    }));
  };

  const handleSortChange = (value: string) => {
    setFilters(prev => ({ ...prev, sortBy: value }));
  };

  const clearFilters = () => {
    setFilters({
      roomTypes: [],
      priceRanges: [],
      sortBy: 'price-low'
    });
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        className={`w-4 h-4 ${
          index < Math.floor(rating) ? 'text-orange-400 fill-current' : 'text-gray-300'
        }`}
      />
    ));
  };

  const getAmenityIcon = (amenity: string) => {
    switch (amenity) {
      case 'Free WiFi':
        return <Wifi className="w-4 h-4" />;
      case 'Mountain View':
        return <Mountain className="w-4 h-4" />;
      case 'Pool Access':
        return <Waves className="w-4 h-4" />;
      default:
        return <div className="w-4 h-4 bg-gray-300 rounded-full" />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="flex gap-8">
          {/* Filters Sidebar */}
          <div className="w-80 bg-white rounded-lg p-6 h-fit">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-semibold text-gray-900">FILTERS</h3>
              <button
                onClick={clearFilters}
                className="text-sm text-gray-500 hover:text-gray-700"
              >
                CLEAR
              </button>
            </div>

            {/* Popular Filters */}
            <div className="mb-8">
              <h4 className="font-medium text-gray-900 mb-4">Popular filters</h4>
              <div className="space-y-3">
                {['Single Bed', 'Double Bed', 'Luxury Room', 'Family Suite'].map((type) => (
                  <label key={type} className="flex items-center">
                    <input
                      type="checkbox"
                      checked={filters.roomTypes.includes(type)}
                      onChange={() => handleFilterChange('roomTypes', type)}
                      className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                    />
                    <span className="ml-3 text-gray-700">{type}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Price Range */}
            <div className="mb-8">
              <h4 className="font-medium text-gray-900 mb-4">Price Range</h4>
              <div className="space-y-3">
                {[
                  '$ 0 to 500',
                  '$ 500 to 1000',
                  '$ 1000 to 2000',
                  '$ 2000 to 3000'
                ].map((range) => (
                  <label key={range} className="flex items-center">
                    <input
                      type="checkbox"
                      checked={filters.priceRanges.includes(range)}
                      onChange={() => handleFilterChange('priceRanges', range)}
                      className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                    />
                    <span className="ml-3 text-gray-700">{range}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Sort By */}
            <div>
              <h4 className="font-medium text-gray-900 mb-4">Sort By</h4>
              <div className="space-y-3">
                {[
                  { value: 'price-low', label: 'Price Low to High' },
                  { value: 'price-high', label: 'Price High to Low' },
                  { value: 'newest', label: 'Newest First' }
                ].map((option) => (
                  <label key={option.value} className="flex items-center">
                    <input
                      type="radio"
                      name="sortBy"
                      value={option.value}
                      checked={filters.sortBy === option.value}
                      onChange={() => handleSortChange(option.value)}
                      className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                    />
                    <span className="ml-3 text-gray-700">{option.label}</span>
                  </label>
                ))}
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1">
            <div className="mb-8">
              <h1 className="text-3xl font-bold text-gray-900 mb-4">Hotel Rooms</h1>
              <p className="text-gray-600">
                Take advantage of our limited-time offers and special packages to enhance your stay and create
                unforgettable memories.
              </p>
            </div>

            {/* Room Cards */}
            <div className="space-y-6">
              {rooms.map((room) => (
                <div key={room.id} className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow">
                  <div className="flex">
                    {/* Image */}
                    <div className="w-80 h-64">
                      <img
                        src={room.image}
                        alt={room.name}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    {/* Content */}
                    <div className="flex-1 p-6">
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <p className="text-sm text-gray-500 mb-1">{room.location}</p>
                          <h3 className="text-xl font-semibold text-gray-900 mb-2">{room.name}</h3>
                        </div>
                        <div className="text-right">
                          <div className="text-2xl font-bold text-gray-900">${room.price}</div>
                          <div className="text-gray-500">/night</div>
                        </div>
                      </div>

                      {/* Rating */}
                      <div className="flex items-center mb-3">
                        <div className="flex items-center mr-2">
                          {renderStars(room.rating)}
                        </div>
                        <span className="text-sm text-gray-600">{room.reviews}</span>
                      </div>

                      {/* Address */}
                      <div className="flex items-center text-gray-500 mb-4">
                        <MapPin className="w-4 h-4 mr-1" />
                        <span className="text-sm">{room.address}</span>
                      </div>

                      {/* Amenities */}
                      <div className="flex items-center space-x-6 mb-4">
                        {room.amenities.map((amenity, index) => (
                          <div key={index} className="flex items-center space-x-2 text-gray-600">
                            {getAmenityIcon(amenity)}
                            <span className="text-sm">{amenity}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoomsPage;