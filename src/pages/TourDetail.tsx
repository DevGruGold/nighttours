import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import BookingForm from '@/components/BookingForm';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import { format } from 'date-fns';

const tours = [
  {
    id: '1',
    title: 'Arenal Volcano Adventure',
    location: 'La Fortuna',
    image: 'https://images.unsplash.com/photo-1482938289607-e9573fc25ebb',
    duration: '8 hours',
    price: 99,
    description: 'Experience the majestic Arenal Volcano up close with this thrilling adventure tour. Hike through lush rainforest trails, witness unique wildlife, and enjoy stunning views of one of Costa Rica\'s most active volcanoes.',
    guide: 'Chris',
    phone: '+50689484857'
  },
  {
    id: '2',
    title: 'Manuel Antonio Beach Tour',
    location: 'Pacific Coast',
    image: 'https://images.unsplash.com/photo-1500375592092-40eb2168fd21',
    duration: '6 hours',
    price: 79,
    description: 'Discover the pristine beaches and diverse wildlife of Manuel Antonio National Park. Enjoy guided nature walks, spot monkeys and sloths, and relax on beautiful white sand beaches.',
    guide: 'Chris',
    phone: '+50689484857'
  },
  {
    id: '3',
    title: 'Caribbean Snorkeling Adventure',
    location: 'Limon',
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb',
    duration: '4 hours',
    price: 69,
    description: 'Explore the vibrant underwater world of the Caribbean coast. Swim among tropical fish, discover coral reefs, and experience the unique culture of Costa Rica\'s Caribbean region.',
    guide: 'Diego',
    phone: '+50561500559'
  },
  {
    id: '4',
    title: 'Rainforest Hiking Experience',
    location: 'La Fortuna',
    image: 'https://images.unsplash.com/photo-1513836279014-a89f7a76ae86',
    duration: '5 hours',
    price: 59,
    description: 'Immerse yourself in the heart of Costa Rica\'s rainforest. Trek through pristine trails, learn about local flora and fauna, and experience the magic of the cloud forest.',
    guide: 'Chris',
    phone: '+50689484857'
  },
  {
    id: '5',
    title: 'Tortuguero Canal Tour',
    location: 'Limon',
    image: 'https://images.unsplash.com/photo-1504893524553-b855bce32c67',
    duration: '7 hours',
    price: 89,
    description: 'Navigate the peaceful canals of Tortuguero National Park. Spot diverse wildlife including turtles, monkeys, and countless bird species in their natural habitat.',
    guide: 'Diego',
    phone: '+50561500559'
  },
  {
    id: '6',
    title: 'Sunset Sailing Adventure',
    location: 'Pacific Coast',
    image: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e',
    duration: '4 hours',
    price: 129,
    description: 'Set sail along the Pacific Coast and witness breathtaking sunsets. Enjoy refreshments, spot marine life, and create unforgettable memories on this relaxing cruise.',
    guide: 'Chris',
    phone: '+50689484857'
  }
];

const TourDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const tour = tours.find(t => t.id === id);

  if (!tour) {
    return <div>Tour not found</div>;
  }

  const handleBooking = (date: Date, guests: number) => {
    const message = encodeURIComponent(
      `Hello ${tour.guide}, I would like to book the ${tour.title} tour:\n\n` +
      `Date: ${format(date, 'PPP')}\n` +
      `Number of guests: ${guests}\n` +
      `Total price: $${tour.price * guests}\n\n` +
      `Please confirm availability and provide payment details.`
    );
    window.open(`https://wa.me/${tour.phone.replace('+', '')}?text=${message}`);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="relative h-[50vh] overflow-hidden">
        <img 
          src={tour.image}
          alt={tour.title}
          className="w-full h-full object-cover"
        />
        <Button
          variant="ghost"
          className="absolute top-4 left-4 text-white hover:text-white/80"
          onClick={() => navigate('/')}
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back
        </Button>
      </div>

      <div className="container mx-auto py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h1 className="text-4xl font-bold mb-4">{tour.title}</h1>
            <div className="flex items-center gap-4 mb-6">
              <span className="text-gray-600">{tour.location}</span>
              <span className="text-gray-600">{tour.duration}</span>
              <span className="font-semibold">${tour.price} per person</span>
            </div>
            <p className="text-gray-700 mb-6">{tour.description}</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold mb-6">Book this Experience</h2>
            <BookingForm 
              tourTitle={tour.title}
              location={tour.location}
              onSubmit={handleBooking}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TourDetail;