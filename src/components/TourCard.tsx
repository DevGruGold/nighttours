
import React from 'react';
import { Card } from '@/components/ui/card';
import { useNavigate } from 'react-router-dom';
import { Clock, MapPin, Star } from 'lucide-react';
import { AspectRatio } from "@/components/ui/aspect-ratio";

interface TourCardProps {
  id: string;
  title: string;
  location: string;
  image: string;
  duration: string;
  price: number;
  rating: number;
  rank: number;
  totalReviews?: number;
  description?: string;
}

const TourCard = ({ id, title, location, image, duration, price, rating, rank, totalReviews = 0, description }: TourCardProps) => {
  const navigate = useNavigate();

  const renderStars = (rating: number) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;

    for (let i = 0; i < fullStars; i++) {
      stars.push(<Star key={`full-${i}`} className="w-4 h-4 fill-yellow-400 text-yellow-400" />);
    }
    
    if (hasHalfStar) {
      stars.push(
        <div key="half" className="relative w-4 h-4">
          <Star className="absolute w-4 h-4 text-yellow-400" />
          <div className="absolute w-2 h-4 overflow-hidden">
            <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
          </div>
        </div>
      );
    }
    
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);
    for (let i = 0; i < emptyStars; i++) {
      stars.push(<Star key={`empty-${i}`} className="w-4 h-4 text-gray-300" />);
    }

    return stars;
  };

  return (
    <Card 
      className="group cursor-pointer transition-all duration-300 hover:shadow-xl overflow-hidden bg-black text-white hover:-translate-y-2"
      onClick={() => navigate(`/tour/${id}`)}
    >
      <div className="relative">
        <AspectRatio ratio={1}>
          <img 
            src={image}
            alt={title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70"></div>
        </AspectRatio>
        
        <div className="absolute -top-3 -left-3 bg-white text-black rounded-full w-8 h-8 flex items-center justify-center font-bold shadow-md z-10">
          {rank}
        </div>

        <div className="absolute bottom-0 left-0 p-6 w-full">
          <h3 className="text-xl font-semibold text-white mb-2">
            {title}
          </h3>
          
          <div className="flex items-center gap-2 text-sm text-gray-200 mb-2">
            <MapPin className="w-4 h-4" />
            <span>{location}</span>
          </div>

          <div className="flex items-center mb-3">
            {renderStars(rating)}
            <span className="ml-1 text-sm text-gray-200">({totalReviews})</span>
          </div>
          
          <div className="flex justify-between items-center pt-4 border-t border-gray-700">
            <div className="flex items-center text-gray-200">
              <Clock className="w-4 h-4 mr-1" />
              <span>{duration}</span>
            </div>
            <div className="flex flex-col items-end">
              <span className="text-sm text-gray-200">From</span>
              <span className="font-semibold text-white">${price}</span>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default TourCard;
