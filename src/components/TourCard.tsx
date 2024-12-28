import React from 'react';
import { Card } from '@/components/ui/card';
import { useNavigate } from 'react-router-dom';
import { Monkey, TreePalm, Mountain, Turtle, MapPin } from 'lucide-react';

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

  const getIconAndEmoji = (image: string) => {
    switch (image) {
      case 'volcano':
        return { icon: Mountain, emoji: '🌋', bgColor: 'bg-earth-light/10' };
      case 'beach':
        return { icon: TreePalm, emoji: '🏖️', bgColor: 'bg-ocean-light/10' };
      case 'ocean':
        return { icon: Turtle, emoji: '🐢', bgColor: 'bg-ocean/10' };
      case 'forest':
        return { icon: Monkey, emoji: '🌴', bgColor: 'bg-primary-light/10' };
      case 'river':
        return { icon: TreePalm, emoji: '🛶', bgColor: 'bg-ocean-light/10' };
      case 'sunset':
        return { icon: TreePalm, emoji: '🌅', bgColor: 'bg-earth/10' };
      default:
        return { icon: MapPin, emoji: '🗺️', bgColor: 'bg-primary/10' };
    }
  };

  const { icon: Icon, emoji, bgColor } = getIconAndEmoji(image);

  return (
    <Card 
      className={`group cursor-pointer transition-all duration-300 hover:shadow-xl transform hover:-translate-y-2 ${bgColor}`}
      onClick={() => navigate(`/tour/${id}`)}
    >
      <div className="p-6">
        <div className="flex items-center justify-between mb-4">
          <span className="text-3xl" role="img" aria-label="tour type">
            {emoji}
          </span>
          <Icon className="w-6 h-6 text-primary" />
        </div>
        
        <h3 className="text-xl font-semibold text-primary group-hover:text-primary-dark transition-colors mb-2">
          {title}
        </h3>
        
        <div className="flex items-center gap-2 text-sm text-gray-600 mb-3">
          <MapPin className="w-4 h-4" />
          <span>{location}</span>
        </div>
        
        <div className="flex justify-between items-center pt-4 border-t border-gray-100">
          <div className="flex flex-col">
            <span className="text-sm text-gray-600">Duration</span>
            <span className="font-medium">{duration}</span>
          </div>
          <div className="flex flex-col items-end">
            <span className="text-sm text-gray-600">From</span>
            <span className="font-semibold text-primary">${price}</span>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default TourCard;