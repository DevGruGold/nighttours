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

  return (
    <Card 
      className="group cursor-pointer overflow-hidden transition-all duration-300 hover:shadow-xl"
      onClick={() => navigate(`/tour/${id}`)}
    >
      <div className="aspect-[4/3] overflow-hidden">
        <img 
          src={image} 
          alt={title}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <div className="p-4">
        <h3 className="text-xl font-semibold text-primary">{title}</h3>
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