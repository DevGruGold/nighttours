
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Moon, Phone, Award } from 'lucide-react';

const Header = () => {
  const navigate = useNavigate();

  const handleWhatsApp = () => {
    window.open('https://wa.me/50685087360', '_blank');
  };

  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-md bg-black/80 border-b border-yellow-500/30 text-white">
      <div className="container flex h-16 items-center justify-between px-4">
        <button 
          onClick={() => navigate('/')}
          className="flex items-center space-x-2 text-yellow-400 hover:text-yellow-300 transition-colors"
        >
          <Moon className="h-6 w-6" />
          <span className="font-bold text-lg">Night Tours</span>
        </button>
        
        <div className="hidden md:flex items-center">
          <div className="flex items-center mr-4 text-yellow-300">
            <Award className="h-4 w-4 mr-1" />
            <span className="text-sm">By Top Tours Costa Rica</span>
          </div>
        </div>
        
        <nav>
          <button 
            onClick={handleWhatsApp}
            className="bg-yellow-500 hover:bg-yellow-600 text-black px-3 py-1.5 rounded-full flex items-center transition-colors text-sm"
          >
            <Phone className="h-3 w-3 mr-1" />
            <span className="font-medium">Book via WhatsApp</span>
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
