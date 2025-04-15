import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import BookingForm from '@/components/BookingForm';
import { Button } from '@/components/ui/button';
import { ArrowLeft, MapPin, Clock, Star, Award } from 'lucide-react';
import { format } from 'date-fns';

const tours = [
  {
    id: '1',
    title: 'Arenal Volcano Adventure',
    location: 'La Fortuna',
    image: 'https://images.unsplash.com/photo-1632935190508-bd46801c14af',
    duration: '8 hours',
    price: 99,
    description: 'Experience the majestic Arenal Volcano up close with this thrilling adventure tour. Spot the iconic red-eyed tree frogs, witness unique wildlife, and enjoy stunning views of one of Costa Rica\'s most active volcanoes.',
    rating: 4.9,
    totalReviews: 345,
    region: 'Northern Plains',
    guide: 'Chris',
    phone: '+50685087360'
  },
  {
    id: '2',
    title: 'Manuel Antonio Beach Tour',
    location: 'Pacific Coast',
    image: 'https://images.unsplash.com/photo-1599511772946-b9288c486d29',
    duration: '6 hours',
    price: 79,
    description: 'Discover the pristine beaches and diverse wildlife of Manuel Antonio National Park. Watch playful white-faced capuchin monkeys, spot sloths, and relax on beautiful white sand beaches.',
    guide: 'Chris',
    phone: '+50689484857'
  },
  {
    id: '3',
    title: 'Caribbean Snorkeling Adventure',
    location: 'Limon',
    image: 'https://images.unsplash.com/photo-1544552866-d3ed42536d15',
    duration: '4 hours',
    price: 69,
    description: 'Explore the vibrant underwater world of the Caribbean coast. Swim with sea turtles, discover coral reefs, and experience the unique marine life of Costa Rica\'s Caribbean region.',
    guide: 'Diego',
    phone: '+50561500559'
  },
  {
    id: '4',
    title: 'Rainforest Hiking Experience',
    location: 'La Fortuna',
    image: 'https://images.unsplash.com/photo-1632935189145-c78d415bde8e',
    duration: '5 hours',
    price: 59,
    description: 'Immerse yourself in the heart of Costa Rica\'s rainforest. Spot colorful toucans, learn about local flora and fauna, and experience the magic of the cloud forest.',
    guide: 'Chris',
    phone: '+50689484857'
  },
  {
    id: '5',
    title: 'Tortuguero Canal Tour',
    location: 'Limon',
    image: 'https://images.unsplash.com/photo-1582486225644-3897b3772b31',
    duration: '7 hours',
    price: 89,
    description: 'Navigate the peaceful canals of Tortuguero National Park. Watch three-toed sloths lounging in the trees, spot diverse wildlife including monkeys, and countless bird species in their natural habitat.',
    guide: 'Diego',
    phone: '+50561500559'
  },
  {
    id: '6',
    title: 'Sunset Sailing Adventure',
    location: 'Pacific Coast',
    image: 'https://images.unsplash.com/photo-1605142859862-978be7eba909',
    duration: '4 hours',
    price: 129,
    description: 'Set sail along the Pacific Coast and witness breathtaking sunsets while spotting scarlet macaws. Enjoy refreshments, spot marine life, and create unforgettable memories on this relaxing cruise.',
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
      `Hello, I would like to book the ${tour.title} tour:\n\n` +
      `Date: ${format(date, 'PPP')}\n` +
      `Number of guests: ${guests}\n` +
      `Total price: $${tour.price * guests}\n\n` +
      `Please confirm availability and provide payment details.`
    );
    window.open(`https://wa.me/${tour.phone.replace('+', '')}?text=${message}`);
  };

  const renderStars = (rating: number) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;

    for (let i = 0; i < fullStars; i++) {
      stars.push(<Star key={`full-${i}`} className="w-5 h-5 fill-yellow-400 text-yellow-400" />);
    }
    
    if (hasHalfStar) {
      stars.push(
        <div key="half" className="relative w-5 h-5">
          <Star className="absolute w-5 h-5 text-yellow-400" />
          <div className="absolute w-2.5 h-5 overflow-hidden">
            <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
          </div>
        </div>
      );
    }
    
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);
    for (let i = 0; i < emptyStars; i++) {
      stars.push(<Star key={`empty-${i}`} className="w-5 h-5 text-gray-300" />);
    }

    return stars;
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="relative h-[50vh] overflow-hidden">
        <img 
          src={tour.image}
          alt={tour.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute top-0 left-0 w-full h-full bg-black/20" />
        <Button
          variant="ghost"
          className="absolute top-4 left-4 text-white hover:text-white/80 z-10"
          onClick={() => navigate('/')}
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back
        </Button>
        
        <div className="absolute bottom-4 left-4 bg-primary text-white px-3 py-1 rounded-full flex items-center">
          <Award className="h-4 w-4 mr-1" />
          <span>Top Rated Tour</span>
        </div>
      </div>

      <div className="container mx-auto py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h1 className="text-4xl font-bold mb-4">{tour.title}</h1>
            
            <div className="flex items-center mb-4">
              {renderStars(tour.rating)}
              <span className="ml-2 font-semibold text-lg">{tour.rating.toFixed(1)}</span>
              <span className="ml-2 text-gray-600">({tour.totalReviews} reviews)</span>
            </div>
            
            <div className="flex flex-wrap items-center gap-4 mb-6">
              <div className="flex items-center text-gray-600">
                <MapPin className="h-5 w-5 mr-1 text-primary" />
                <span>{tour.location}</span>
              </div>
              <div className="flex items-center text-gray-600">
                <Clock className="h-5 w-5 mr-1 text-primary" />
                <span>{tour.duration}</span>
              </div>
              <div className="font-semibold text-primary text-lg">${tour.price} per person</div>
            </div>
            
            <div className="mb-8">
              <h2 className="text-2xl font-semibold mb-3">About This Tour</h2>
              <p className="text-gray-700 mb-6">{tour.description}</p>
            </div>
            
            <div className="mb-6">
              <h2 className="text-2xl font-semibold mb-3">Why It's Top Rated</h2>
              <ul className="list-disc pl-5 space-y-2">
                <li>Exceptional guides with extensive knowledge</li>
                <li>Small group sizes for personalized experience</li>
                <li>Consistently high reviews for wildlife sightings</li>
                <li>Safety standards that exceed expectations</li>
                <li>Environmentally responsible practices</li>
              </ul>
            </div>
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
