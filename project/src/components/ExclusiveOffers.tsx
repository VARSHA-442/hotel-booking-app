import React from 'react';
import { ArrowRight } from 'lucide-react';

const ExclusiveOffers = () => {
  const offers = [
    {
      id: 1,
      discount: '25% OFF',
      title: 'Summer Escape Package',
      description: 'Enjoy a complimentary night and daily breakfast',
      expires: 'Expires Aug 31',
      image: 'https://images.pexels.com/photos/1450363/pexels-photo-1450363.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      bgColor: 'from-blue-400 to-blue-600'
    },
    {
      id: 2,
      discount: '20% OFF',
      title: 'Romantic Getaway',
      description: 'Special couples package including spa treatment',
      expires: 'Expires Sep 20',
      image: 'https://images.pexels.com/photos/1450360/pexels-photo-1450360.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      bgColor: 'from-purple-400 to-purple-600'
    },
    {
      id: 3,
      discount: '30% OFF',
      title: 'Luxury Retreat',
      description: 'Book 60 days in advance and save on your stay at any of our luxury properties worldwide.',
      expires: 'Expires Sep 25',
      image: 'https://images.pexels.com/photos/1450372/pexels-photo-1450372.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      bgColor: 'from-green-400 to-green-600'
    }
  ];

  const handleViewOffers = (offerId: number, offerTitle: string) => {
    console.log(`Viewing offer: ${offerTitle} (ID: ${offerId})`);
    // Add offer viewing functionality here
  };

  const handleViewAllOffers = () => {
    console.log('Viewing all offers');
    // Add view all offers functionality here
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-16">
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Exclusive Offers
            </h2>
            <p className="text-gray-600 max-w-2xl text-lg">
              Take advantage of our limited-time offers and special packages to enhance your stay and create 
              unforgettable memories.
            </p>
          </div>
          <button 
            onClick={handleViewAllOffers}
            className="flex items-center space-x-2 text-gray-900 hover:text-blue-600 transition-colors"
          >
            <span className="font-medium">View All Offers</span>
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>

        {/* Offers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {offers.map((offer) => (
            <div
              key={offer.id}
              className="relative rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow group cursor-pointer"
              onClick={() => handleViewOffers(offer.id, offer.title)}
            >
              {/* Background Image */}
              <div className="absolute inset-0">
                <img
                  src={offer.image}
                  alt={offer.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40"></div>
              </div>

              {/* Content */}
              <div className="relative z-10 p-8 text-white h-80 flex flex-col justify-between">
                {/* Discount Badge */}
                <div className="self-start">
                  <span className="bg-white text-gray-900 px-3 py-1 rounded-full text-sm font-bold">
                    {offer.discount}
                  </span>
                </div>

                {/* Main Content */}
                <div>
                  <h3 className="text-2xl font-bold mb-3">
                    {offer.title}
                  </h3>
                  <p className="text-white/90 mb-4 leading-relaxed">
                    {offer.description}
                  </p>
                  <p className="text-white/80 text-sm mb-6">
                    {offer.expires}
                  </p>

                  {/* CTA Button */}
                  <button className="flex items-center space-x-2 text-white hover:text-gray-200 transition-colors group">
                    <span className="font-medium">View Offers</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
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

export default ExclusiveOffers;