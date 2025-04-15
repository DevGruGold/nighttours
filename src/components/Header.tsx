
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Moon } from 'lucide-react';

const Header = () => {
  const navigate = useNavigate();

  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-md bg-black/80 text-white">
      <div className="container flex h-16 items-center justify-between px-4">
        <button 
          onClick={() => navigate('/')}
          className="flex items-center space-x-2 text-white hover:text-primary-light transition-colors"
        >
          <Moon className="h-6 w-6" />
          <span className="font-bold text-lg md:text-xl">Night Tour Rio Habana</span>
        </button>
        
        <nav className="flex items-center space-x-4 text-sm">
          <a href="https://wa.me/50685087360" target="_blank" rel="noopener noreferrer" className="text-white hover:text-primary-light transition-colors flex items-center">
            <span className="hidden md:inline mr-2">WhatsApp:</span> +506 8508-7360
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
