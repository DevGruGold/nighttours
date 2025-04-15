
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Award, Star } from 'lucide-react';

const Header = () => {
  const navigate = useNavigate();

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between px-4">
        <button 
          onClick={() => navigate('/')}
          className="flex items-center space-x-2 text-primary hover:text-primary-dark transition-colors"
        >
          <Award className="h-6 w-6" />
          <span className="font-bold text-lg hidden sm:inline">Top Tours Costa Rica</span>
          <span className="font-bold text-lg sm:hidden">Top Tours CR</span>
        </button>
        
        <nav className="flex items-center space-x-4 text-sm">
          <a href="https://wa.me/50685087360" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary-dark transition-colors flex items-center">
            <span className="hidden md:inline mr-2">WhatsApp:</span> +506 8508-7360
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
