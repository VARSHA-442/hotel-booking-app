import React, { useState, useEffect } from 'react';
import { Search, Home } from 'lucide-react';
import LoginModal from './LoginModal';

const Header = () => {
  const [activeNav, setActiveNav] = useState('Home');
  const [isScrolled, setIsScrolled] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [onNavigate, setOnNavigate] = useState<((page: string) => void) | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Get navigation function from parent
  useEffect(() => {
    const handleNavigation = (event: CustomEvent) => {
      setOnNavigate(() => event.detail.navigate);
    };
    
    window.addEventListener('setNavigation' as any, handleNavigation);
    return () => window.removeEventListener('setNavigation' as any, handleNavigation);
  }, []);

  const handleNavClick = (item: string) => {
    setActiveNav(item);
    if (item === 'Hotels' && onNavigate) {
      onNavigate('rooms');
    } else if (item === 'Home' && onNavigate) {
      onNavigate('home');
    }
    console.log(`Navigating to ${item}`);
  };

  const handleSearchClick = () => {
    console.log('Search clicked');
  };

  const handleLoginClick = () => {
    setShowLoginModal(true);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 px-6 py-4 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white shadow-md' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <div className={`rounded-lg p-2 ${isScrolled ? 'bg-black' : 'bg-white'}`}>
            <Home className={`w-6 h-6 ${isScrolled ? 'text-white' : 'text-black'}`} />
          </div>
          <span className={`text-2xl font-bold ${isScrolled ? 'text-black' : 'text-white'}`}>
            The Pearl
          </span>
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {['Home', 'Hotels', 'Experience', 'About'].map((item) => (
            <button
              key={item}
              onClick={() => handleNavClick(item)}
              className={`transition-colors ${
                isScrolled 
                  ? 'text-gray-700 hover:text-black' 
                  : 'text-white hover:text-blue-200'
              } ${
                activeNav === item ? 'font-semibold' : ''
              }`}
            >
              {item}
            </button>
          ))}
        </nav>

        {/* Right side */}
        <div className="flex items-center space-x-4">
          <button 
            onClick={handleSearchClick}
            className={`transition-colors ${
              isScrolled 
                ? 'text-gray-700 hover:text-black' 
                : 'text-white hover:text-blue-200'
            }`}
          >
            <Search className="w-5 h-5" />
          </button>
          <button 
            onClick={handleLoginClick}
            className="bg-black text-white px-6 py-2 rounded-full hover:bg-gray-800 transition-colors"
          >
            Login
          </button>
        </div>
      </div>
      
      <LoginModal 
        isOpen={showLoginModal} 
        onClose={() => setShowLoginModal(false)} 
      />
    </header>
  );
};

export default Header;