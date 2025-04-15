
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import BookingForm from '@/components/BookingForm';
import { Button } from '@/components/ui/button';
import { ArrowLeft, MapPin, Clock, Star, Award, Moon } from 'lucide-react';
import { format } from 'date-fns';

const tours = [
  {
    id: '1',
    title: 'Night Tour Rio Habana',
    location: 'La Fortuna, Costa Rica',
    image: 'public/lovable-uploads/5b6341ed-dd6e-41a3-974e-01c9aaa91c99.png',
    duration: '3 hours',
    price: 45,
    description: 'Experience the magic of the Rio Habana area after dark with our expert-guided night tour. Witness the transformation of the rainforest as nocturnal creatures emerge, including the iconic red-eyed tree frogs. Our guides use specialized techniques to locate wildlife while respecting their natural habitat.',
    rating: 4.9,
    totalReviews: 345,
    region: 'Northern Plains',
    guide: 'Chris',
    phone: '+50685087360',
    highlights: [
      'Spot red-eyed tree frogs in their natural habitat',
      'Learn about nocturnal rainforest ecosystems',
      'Expert bilingual guides with spotting equipment',
      'Small groups for a personalized experience',
      'Convenient location near La Fortuna'
    ]
  },
  {
    id: '2',
    title: 'Red-Eyed Tree Frog Safari',
    location: 'La Fortuna',
    image: 'public/lovable-uploads/5b6341ed-dd6e-41a3-974e-01c9aaa91c99.png',
    duration: '3 hours',
    price: 50,
    description: 'A specialized tour focused on finding the iconic red-eyed tree frogs in their natural habitat. Learn about their unique adaptations and behaviors from our knowledgeable guides.',
    rating: 4.8,
    totalReviews: 289,
    guide: 'Chris',
    phone: '+50685087360',
    highlights: [
      'Focus on red-eyed tree frogs and other amphibians',
      'Photography assistance from expert guides',
      'Learn about frog conservation efforts',
      'All required equipment provided',
      'Hotel pickup and drop-off available'
    ]
  },
  {
    id: '3',
    title: 'Sloth Spotting Night Tour',
    location: 'La Fortuna',
    image: 'public/lovable-uploads/07731ecd-b5ee-4075-a120-d022a5c56f60.png',
    duration: '3 hours',
    price: 40,
    description: 'Join us for an evening adventure focused on spotting sloths as they become active at night. Our expert guides know exactly where to find these fascinating creatures in their natural habitat.',
    guide: 'Diego',
    rating: 4.8,
    totalReviews: 312,
    phone: '+50685087360',
    highlights: [
      'Observe both two-toed and three-toed sloths',
      'Learn about sloth behavior and adaptations',
      'Night vision equipment provided',
      'Perfect for families and photographers',
      'Eco-friendly approach to wildlife viewing'
    ]
  },
  {
    id: '4',
    title: 'Toucan Observation Tour',
    location: 'La Fortuna',
    image: 'public/lovable-uploads/cec58bf8-8041-4883-af29-2b5eea0c7852.png',
    duration: '4 hours',
    price: 55,
    description: 'Discover the colorful world of toucans in this specialized night tour. See these magnificent birds as they settle in for the evening and learn about their important role in the ecosystem.',
    guide: 'Chris',
    rating: 4.7,
    totalReviews: 278,
    phone: '+50685087360',
    highlights: [
      'Observe keel-billed and other toucan species',
      'Bird watching with professional equipment',
      'Learn about rainforest bird conservation',
      'Suitable for all experience levels',
      'Includes refreshments during the tour'
    ]
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
    <div className="min-h-screen bg-black text-white">
      <div className="relative h-[60vh] overflow-hidden">
        <img 
          src={tour.image}
          alt={tour.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute top-0 left-0 w-full h-full bg-black/40" />
        <Button
          variant="ghost"
          className="absolute top-4 left-4 text-white hover:text-white/80 z-10"
          onClick={() => navigate('/')}
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back
        </Button>
        
        <div className="absolute bottom-4 left-4 bg-white text-black px-3 py-1 rounded-full flex items-center">
          <Award className="h-4 w-4 mr-1" />
          <span>Top Rated Tour</span>
        </div>
      </div>

      <div className="container mx-auto py-12 px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h1 className="text-4xl font-bold mb-4">{tour.title}</h1>
            
            <div className="flex items-center mb-4">
              {renderStars(tour.rating)}
              <span className="ml-2 font-semibold text-lg">{tour.rating.toFixed(1)}</span>
              <span className="ml-2 text-gray-400">({tour.totalReviews} reviews)</span>
            </div>
            
            <div className="flex flex-wrap items-center gap-4 mb-6">
              <div className="flex items-center text-gray-300">
                <MapPin className="h-5 w-5 mr-1 text-white" />
                <span>{tour.location}</span>
              </div>
              <div className="flex items-center text-gray-300">
                <Clock className="h-5 w-5 mr-1 text-white" />
                <span>{tour.duration}</span>
              </div>
              <div className="font-semibold text-white text-lg">${tour.price} per person</div>
            </div>
            
            <div className="mb-8">
              <h2 className="text-2xl font-semibold mb-3">About This Tour</h2>
              <p className="text-gray-300 mb-6">{tour.description}</p>
            </div>
            
            <div className="mb-6">
              <h2 className="text-2xl font-semibold mb-3">Tour Highlights</h2>
              <ul className="list-disc pl-5 space-y-2 text-gray-300">
                {tour.highlights?.map((highlight, index) => (
                  <li key={index}>{highlight}</li>
                ))}
              </ul>
            </div>
          </div>
          
          <div className="bg-gray-900 p-6 rounded-lg">
            <h2 className="text-2xl font-semibold mb-6 flex items-center">
              <Moon className="h-5 w-5 mr-2" />
              Book this Night Tour
            </h2>
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
