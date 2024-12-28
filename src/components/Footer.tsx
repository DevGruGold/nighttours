import React from 'react';
import { Facebook, Instagram, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="w-full border-t bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container px-4 py-8 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-semibold text-lg mb-4 text-primary">Contact Us</h3>
            <p className="text-sm text-gray-600">
              Email: info@toptourscostarica.com<br />
              Phone: +506 8948-4857<br />
              La Fortuna, Costa Rica
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4 text-primary">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-600 hover:text-primary transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-600 hover:text-primary transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-600 hover:text-primary transition-colors">
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4 text-primary">Legal</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><a href="#" className="hover:text-primary transition-colors">Terms & Conditions</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Cancellation Policy</a></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t text-center text-sm text-gray-600">
          <p>&copy; {new Date().getFullYear()} Top Tours Costa Rica. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;