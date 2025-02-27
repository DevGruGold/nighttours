
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { TreePalm } from 'lucide-react';

const Header = () => {
  const navigate = useNavigate();

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between px-4">
        <button 
          onClick={() => navigate('/')}
          className="flex items-center space-x-2 text-primary hover:text-primary-dark transition-colors"
        >
          <TreePalm className="h-6 w-6" />
          <span className="font-bold text-lg hidden sm:inline">Sloth Park, Costa Rica</span>
          <span className="font-bold text-lg sm:hidden">Sloth Park CR</span>
        </button>
        
        <nav className="flex items-center space-x-4 text-sm">
          <a href="tel:+50689484857" className="text-primary hover:text-primary-dark transition-colors">
            +506 8948-4857
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
