
import React from 'react';
import { Mail, Phone, Facebook, Instagram, Twitter, Music2, Moon } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <div className="space-y-2">
              <div className="flex items-center">
                <Mail className="h-5 w-5 mr-2" />
                <a href="mailto:toptourscostarica@gmail.com" className="hover:text-primary-light transition-colors">
                  toptourscostarica@gmail.com
                </a>
              </div>
              <div className="flex items-center">
                <Phone className="h-5 w-5 mr-2" />
                <a href="https://wa.me/50685087360" className="hover:text-primary-light transition-colors">
                  +506 8508-7360
                </a>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com/toptourscostarica"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary-light transition-colors"
              >
                <Facebook className="h-6 w-6" />
              </a>
              <a
                href="https://instagram.com/toptourscostarica"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary-light transition-colors"
              >
                <Instagram className="h-6 w-6" />
              </a>
              <a
                href="https://twitter.com/toptourscostarica"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary-light transition-colors"
              >
                <Twitter className="h-6 w-6" />
              </a>
              <a
                href="https://tiktok.com/@toptourscostarica"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary-light transition-colors"
              >
                <Music2 className="h-6 w-6" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">About Our Night Tours</h3>
            <p className="text-sm">
              Experience the magic of Costa Rica's wildlife after dark with our expert-guided night tours in Rio Habana, La Fortuna. Discover red-eyed tree frogs, sloths, toucans and more in their natural habitat.
            </p>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-800 text-center">
          <p>&copy; {new Date().getFullYear()} Night Tour Rio Habana. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
