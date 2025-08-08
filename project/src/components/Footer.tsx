import React, { useState } from 'react';
import { Home, ArrowUp, ArrowRight, Instagram, Facebook, Twitter, Linkedin } from 'lucide-react';

const Footer = () => {
  const [footerEmail, setFooterEmail] = useState('');

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleFooterSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Footer newsletter subscription:', footerEmail);
    if (footerEmail) {
      alert(`Subscribed with email: ${footerEmail}`);
      setFooterEmail('');
    }
  };

  const handleLinkClick = (linkName: string) => {
    console.log(`Clicked on ${linkName}`);
  };

  return (
    <footer className="bg-white py-16 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <div className="bg-black rounded-lg p-2">
                <Home className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold text-gray-900">QuickStay</span>
            </div>
            <p className="text-gray-600 leading-relaxed mb-6">
              Discover the world's most extraordinary places to stay, from boutique hotels to luxury villas and private islands.
            </p>
            
            {/* Social Media Icons */}
            <div className="flex space-x-4">
              <button 
                onClick={() => handleLinkClick('Instagram')}
                className="text-gray-400 hover:text-gray-600 transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </button>
              <button 
                onClick={() => handleLinkClick('Facebook')}
                className="text-gray-400 hover:text-gray-600 transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </button>
              <button 
                onClick={() => handleLinkClick('Twitter')}
                className="text-gray-400 hover:text-gray-600 transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </button>
              <button 
                onClick={() => handleLinkClick('LinkedIn')}
                className="text-gray-400 hover:text-gray-600 transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4 uppercase tracking-wide text-sm">
              COMPANY
            </h3>
            <ul className="space-y-3">
              <li>
                <button 
                  onClick={() => handleLinkClick('About')}
                  className="text-gray-600 hover:text-gray-900 transition-colors"
                >
                  About
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleLinkClick('Careers')}
                  className="text-gray-600 hover:text-gray-900 transition-colors"
                >
                  Careers
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleLinkClick('Press')}
                  className="text-gray-600 hover:text-gray-900 transition-colors"
                >
                  Press
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleLinkClick('Blog')}
                  className="text-gray-600 hover:text-gray-900 transition-colors"
                >
                  Blog
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleLinkClick('Partners')}
                  className="text-gray-600 hover:text-gray-900 transition-colors"
                >
                  Partners
                </button>
              </li>
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4 uppercase tracking-wide text-sm">
              SUPPORT
            </h3>
            <ul className="space-y-3">
              <li>
                <button 
                  onClick={() => handleLinkClick('Help Center')}
                  className="text-gray-600 hover:text-gray-900 transition-colors"
                >
                  Help Center
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleLinkClick('Safety Information')}
                  className="text-gray-600 hover:text-gray-900 transition-colors"
                >
                  Safety Information
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleLinkClick('Cancellation Options')}
                  className="text-gray-600 hover:text-gray-900 transition-colors"
                >
                  Cancellation Options
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleLinkClick('Contact Us')}
                  className="text-gray-600 hover:text-gray-900 transition-colors"
                >
                  Contact Us
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleLinkClick('Accessibility')}
                  className="text-gray-600 hover:text-gray-900 transition-colors"
                >
                  Accessibility
                </button>
              </li>
            </ul>
          </div>

          {/* Stay Updated */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4 uppercase tracking-wide text-sm">
              STAY UPDATED
            </h3>
            <p className="text-gray-600 leading-relaxed mb-4">
              Subscribe to our newsletter for travel inspiration and special offers.
            </p>
            
            {/* Footer Newsletter Form */}
            <form onSubmit={handleFooterSubscribe} className="flex">
              <input
                type="email"
                placeholder="Your email"
                value={footerEmail}
                onChange={(e) => setFooterEmail(e.target.value)}
                className="flex-1 px-4 py-2 border border-gray-300 rounded-l-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900"
                required
              />
              <button
                type="submit"
                className="bg-black text-white px-4 py-2 rounded-r-lg hover:bg-gray-800 transition-colors"
              >
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-200 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">
            © 2025 QuickStay. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <button 
              onClick={() => handleLinkClick('Privacy')}
              className="text-gray-500 hover:text-gray-700 text-sm transition-colors"
            >
              Privacy
            </button>
            <button 
              onClick={() => handleLinkClick('Terms')}
              className="text-gray-500 hover:text-gray-700 text-sm transition-colors"
            >
              Terms
            </button>
            <button 
              onClick={() => handleLinkClick('Sitemap')}
              className="text-gray-500 hover:text-gray-700 text-sm transition-colors"
            >
              Sitemap
            </button>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 bg-black text-white p-3 rounded-full shadow-lg hover:bg-gray-800 transition-colors z-50"
      >
        <ArrowUp className="w-5 h-5" />
      </button>
    </footer>
  );
};

export default Footer;