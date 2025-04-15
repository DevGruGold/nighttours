
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Moon, Phone } from 'lucide-react';

const Header = () => {
  const navigate = useNavigate();

  const handleWhatsApp = () => {
    window.open('https://wa.me/50685087360', '_blank');
  };

  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-md bg-black/80 text-white">
      <div className="container flex h-16 items-center justify-between px-4">
        <button 
          onClick={() => navigate('/')}
          className="flex items-center space-x-2 text-white hover:text-green-400 transition-colors"
        >
          <Moon className="h-6 w-6" />
          <span className="font-bold text-lg md:text-xl">Night Tour Rio Habana</span>
        </button>
        
        <nav className="flex items-center space-x-4">
          <button 
            onClick={handleWhatsApp}
            className="bg-green-500 hover:bg-green-600 text-black px-4 py-2 rounded-full flex items-center transition-colors"
          >
            <Phone className="h-4 w-4 mr-2" />
            <span>Book via WhatsApp</span>
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
