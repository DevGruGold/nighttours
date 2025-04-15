
import React, { useState } from 'react';
import TourCard from '@/components/TourCard';
import { Button } from '@/components/ui/button';
import { Filter, Moon } from 'lucide-react';

const tourTypes = ["All", "Sloths", "Frogs", "Toucans", "Mixed Wildlife"];

const tours = [
  {
    id: '1',
    title: 'Night Tour Rio Habana',
    location: 'La Fortuna, Costa Rica',
    image: 'frog',
    duration: '3 hours',
    price: 45,
    rating: 4.9,
    totalReviews: 345,
    region: 'Northern Plains',
    type: 'Frogs',
    description: 'Experience the magic of the rainforest at night and discover iconic red-eyed tree frogs in their natural habitat.',
  },
  {
    id: '2',
    title: 'Red-Eyed Tree Frog Safari',
    location: 'La Fortuna',
    image: 'frog',
    duration: '3 hours',
    price: 50,
    rating: 4.8,
    totalReviews: 289,
    region: 'Northern Plains',
    type: 'Frogs',
    description: 'A specialized tour focused on finding the iconic red-eyed tree frogs in their natural habitat.',
  },
  {
    id: '3',
    title: 'Sloth Spotting Night Tour',
    location: 'La Fortuna',
    image: 'sloth',
    duration: '3 hours',
    price: 40,
    rating: 4.8,
    totalReviews: 312,
    region: 'Northern Plains',
    type: 'Sloths',
    description: 'Spot three-toed and two-toed sloths as they become active in the evening.',
  },
  {
    id: '4',
    title: 'Toucan Observation Tour',
    location: 'La Fortuna',
    image: 'toucan',
    duration: '4 hours',
    price: 55,
    rating: 4.7,
    totalReviews: 278,
    region: 'Northern Plains',
    type: 'Toucans',
    description: 'Observe the colorful toucans in their natural habitat as they prepare for the night.',
  },
  {
    id: '5',
    title: 'Rainforest Night Adventure',
    location: 'La Fortuna',
    image: 'sloth',
    duration: '4 hours',
    price: 60,
    rating: 4.7,
    totalReviews: 256,
    region: 'Northern Plains',
    type: 'Mixed Wildlife',
    description: 'A complete night tour to discover various nocturnal animals of the rainforest.',
  },
  {
    id: '6',
    title: 'Photography Night Safari',
    location: 'La Fortuna',
    image: 'toucan',
    duration: '4 hours',
    price: 65,
    rating: 4.7,
    totalReviews: 245,
    region: 'Northern Plains',
    type: 'Mixed Wildlife',
    description: 'Specially designed for photography enthusiasts to capture wildlife at night.',
  },
  {
    id: '7',
    title: 'Family Night Tour',
    location: 'La Fortuna',
    image: 'frog',
    duration: '2 hours',
    price: 35,
    rating: 4.6,
    totalReviews: 231,
    region: 'Northern Plains',
    type: 'Mixed Wildlife',
    description: 'A shorter tour designed for families with children to experience the night wildlife.',
  },
  {
    id: '8',
    title: 'Arenal Wildlife Night Tour',
    location: 'La Fortuna',
    image: 'toucan',
    duration: '4 hours',
    price: 55,
    rating: 4.6,
    totalReviews: 224,
    region: 'Northern Plains',
    type: 'Mixed Wildlife',
    description: 'Explore the wildlife around the Arenal Volcano area at night.',
  },
  {
    id: '9',
    title: 'Rio Habana Frog Discovery',
    location: 'La Fortuna',
    image: 'frog',
    duration: '3 hours',
    price: 45,
    rating: 4.6,
    totalReviews: 218,
    region: 'Northern Plains',
    type: 'Frogs',
    description: 'Focus on discovering the diverse frog species around Rio Habana.',
  }
];

// Sort tours by rating (highest to lowest)
const sortedTours = [...tours].sort((a, b) => 
  b.rating === a.rating ? b.totalReviews - a.totalReviews : b.rating - a.rating
);

const Index = () => {
  const [filteredTours, setFilteredTours] = useState(sortedTours);
  const [selectedType, setSelectedType] = useState<string>("All");
  
  const handleTypeFilter = (type: string) => {
    setSelectedType(type);
    if (type === "All") {
      setFilteredTours(sortedTours);
    } else {
      setFilteredTours(sortedTours.filter(tour => tour.type === type));
    }
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section with Large Wildlife Image */}
      <div className="relative h-[80vh] overflow-hidden">
        <img 
          src="public/lovable-uploads/5b6341ed-dd6e-41a3-974e-01c9aaa91c99.png" 
          alt="Red-eyed tree frog"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-80"></div>
        
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 text-white">NIGHT TOUR RIO HABANA</h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl">
            Experience Costa Rica's magical wildlife after dark in La Fortuna
          </p>
          <Button 
            size="lg" 
            className="bg-white text-black hover:bg-white/90"
            onClick={() => document.getElementById('tours')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Explore Tours
          </Button>
        </div>
      </div>

      <div id="tours" className="container mx-auto py-16 px-4">
        <div className="mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 flex items-center justify-center">
            <Moon className="h-8 w-8 mr-3" /> Top-Rated Night Tours
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Discover the best wildlife night tours in La Fortuna, ranked by TripAdvisor ratings.
            Our expert guides will help you spot red-eyed tree frogs, sloths, toucans and more.
          </p>
        </div>

        <div className="mb-10">
          <h3 className="text-xl font-semibold mb-4">Filter by Wildlife</h3>
          <div className="flex flex-wrap gap-2">
            {tourTypes.map(type => (
              <Button 
                key={type}
                variant={selectedType === type ? "default" : "outline"}
                onClick={() => handleTypeFilter(type)}
                className={selectedType === type ? "bg-white text-black" : "text-white border-white"}
              >
                {type}
              </Button>
            ))}
          </div>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredTours.map((tour, index) => (
            <TourCard 
              key={tour.id} 
              {...tour} 
              rank={sortedTours.findIndex(t => t.id === tour.id) + 1}
            />
          ))}
        </div>
      </div>

      {/* Featured Wildlife Section */}
      <div className="py-16 bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center">Meet Our Wildlife Stars</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <img 
                src="public/lovable-uploads/5b6341ed-dd6e-41a3-974e-01c9aaa91c99.png" 
                alt="Red-eyed Tree Frog" 
                className="w-full h-64 object-cover rounded-lg mb-4"
              />
              <h3 className="text-2xl font-bold mb-2">Red-eyed Tree Frogs</h3>
              <p className="text-gray-300">
                These iconic amphibians are the stars of our night tours, with their vibrant red eyes and colorful bodies.
              </p>
            </div>
            
            <div className="text-center">
              <img 
                src="public/lovable-uploads/07731ecd-b5ee-4075-a120-d022a5c56f60.png" 
                alt="Sloth" 
                className="w-full h-64 object-cover rounded-lg mb-4"
              />
              <h3 className="text-2xl font-bold mb-2">Sloths</h3>
              <p className="text-gray-300">
                These gentle, slow-moving mammals are often spotted during our tours as they wake up for their nocturnal activities.
              </p>
            </div>
            
            <div className="text-center">
              <img 
                src="public/lovable-uploads/cec58bf8-8041-4883-af29-2b5eea0c7852.png" 
                alt="Toucan" 
                className="w-full h-64 object-cover rounded-lg mb-4"
              />
              <h3 className="text-2xl font-bold mb-2">Toucans</h3>
              <p className="text-gray-300">
                With their distinctive large, colorful bills, toucans are one of the most beloved sights on our night tours.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
