import React from 'react';
import { Card } from '@/components/ui/card';
import { useNavigate } from 'react-router-dom';

interface TourCardProps {
  id: string;
  title: string;
  location: string;
  image: string;
  duration: string;
  price: number;
}

const TourCard = ({ id, title, location, image, duration, price }: TourCardProps) => {
  const navigate = useNavigate();

  const getGradient = (image: string) => {
    const gradients = {
      volcano: 'from-earth to-primary',
      beach: 'from-ocean-light to-primary-light',
      ocean: 'from-ocean to-ocean-light',
      forest: 'from-primary-dark to-primary-light',
      river: 'from-earth-light to-ocean-light',
      sunset: 'from-earth to-ocean'
    };
    return gradients[image as keyof typeof gradients] || 'from-primary to-primary-light';
  };

  return (
    <Card 
      className="group cursor-pointer overflow-hidden transition-all duration-300 hover:shadow-xl transform hover:-translate-y-2"
      onClick={() => navigate(`/tour/${id}`)}
    >
      <div className="aspect-[4/3] overflow-hidden relative">
        <div className={`absolute inset-0 bg-gradient-to-br ${getGradient(image)}`}>
          <div className="absolute inset-0 opacity-20">
            {image === 'forest' && <div className="floating-leaves"></div>}
            {image === 'ocean' && <div className="floating-bubbles"></div>}
            {image === 'beach' && <div className="floating-waves"></div>}
          </div>
        </div>
      </div>
      <div className="p-4 bg-white">
        <h3 className="text-xl font-semibold text-primary group-hover:text-primary-dark transition-colors">
          {title}
        </h3>
        <p className="text-sm text-gray-600">{location}</p>
        <div className="mt-2 flex justify-between items-center">
          <span className="text-sm text-gray-600">{duration}</span>
          <span className="font-semibold">From ${price}</span>
        </div>
      </div>
    </Card>
  );
};

export default TourCard;