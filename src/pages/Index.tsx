
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Filter, Moon } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const tourTypes = ["All", "Sloths", "Frogs", "Toucans", "Mixed Wildlife"];

const tours = [
  {
    id: '1',
    title: 'Night Tour Rio Habana',
    location: 'La Fortuna, Costa Rica',
    image: '/lovable-uploads/5b6341ed-dd6e-41a3-974e-01c9aaa91c99.png',
    duration: '1.5 to 2 hours',
    price: 45,
    rating: 4.9,
    totalReviews: 345,
    region: 'Northern Plains',
    type: 'Frogs',
    description: 'Experience the magic of the rainforest at night and discover iconic red-eyed tree frogs in their natural habitat.',
    highlights: [
      'Transportation included',
      'Bilingual tour guide',
      'Private reserve next to Arenal volcano',
      'Small groups for a personalized experience'
    ],
    promo: '15% OFF GROUPS + 3 OR MORE',
    phone: '50685087360'
  },
  {
    id: '2',
    title: 'Red-Eyed Tree Frog Safari',
    location: 'La Fortuna',
    image: '/lovable-uploads/5b6341ed-dd6e-41a3-974e-01c9aaa91c99.png',
    duration: '3 hours',
    price: 50,
    rating: 4.8,
    totalReviews: 289,
    region: 'Northern Plains',
    type: 'Frogs',
    description: 'A specialized tour focused on finding the iconic red-eyed tree frogs in their natural habitat.',
    phone: '50685087360'
  },
  {
    id: '3',
    title: 'Sloth Spotting Night Tour',
    location: 'La Fortuna',
    image: '/lovable-uploads/07731ecd-b5ee-4075-a120-d022a5c56f60.png',
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
    image: '/lovable-uploads/cec58bf8-8041-4883-af29-2b5eea0c7852.png',
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
    image: '/lovable-uploads/07731ecd-b5ee-4075-a120-d022a5c56f60.png',
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
    image: '/lovable-uploads/cec58bf8-8041-4883-af29-2b5eea0c7852.png',
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
    image: '/lovable-uploads/5b6341ed-dd6e-41a3-974e-01c9aaa91c99.png',
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
    image: '/lovable-uploads/cec58bf8-8041-4883-af29-2b5eea0c7852.png',
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
    image: '/lovable-uploads/5b6341ed-dd6e-41a3-974e-01c9aaa91c99.png',
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
  const navigate = useNavigate();
  
  const handleTypeFilter = (type: string) => {
    setSelectedType(type);
    if (type === "All") {
      setFilteredTours(sortedTours);
    } else {
      setFilteredTours(sortedTours.filter(tour => tour.type === type));
    }
  };

  const handleBookNow = (tourId: string, phone: string) => {
    const tour = sortedTours.find(t => t.id === tourId);
    if (!tour) return;
    
    const message = encodeURIComponent(
      `Hello, I would like to book the ${tour.title} night tour in La Fortuna. Please provide availability and details.`
    );
    window.open(`https://wa.me/${phone}?text=${message}`);
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header Section with Site Title */}
      <div className="container mx-auto py-12 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">NIGHT TOUR RIO HABANA</h1>
        <p className="text-xl md:text-2xl mb-6">La Fortuna, Costa Rica</p>
        <p className="text-lg text-gray-300 max-w-3xl mx-auto">
          Discover Costa Rica's magical wildlife after dark with our expert-guided night tours.
        </p>
      </div>

      {/* Featured Night Walk Adventure Flyer */}
      <div className="bg-green-400 py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <img 
                src="/lovable-uploads/461fb1d7-9855-49a9-a1c9-e4d3c31e3437.png" 
                alt="Night Walk Adventure Flyer" 
                className="rounded-lg shadow-xl mx-auto"
              />
            </div>
            <div className="text-black">
              <h2 className="text-3xl md:text-5xl font-bold mb-4">NIGHT WALK ADVENTURE</h2>
              <p className="text-xl font-semibold mb-6">15% OFF GROUPS + 3 OR MORE</p>
              <ul className="space-y-3 text-lg mb-6">
                <li className="flex items-center">
                  <span className="mr-2 text-2xl">•</span> Transportation included
                </li>
                <li className="flex items-center">
                  <span className="mr-2 text-2xl">•</span> Bilingual tour guide
                </li>
                <li className="flex items-center">
                  <span className="mr-2 text-2xl">•</span> Private reserve next to Arenal volcano
                </li>
                <li className="flex items-center">
                  <span className="mr-2 text-2xl">•</span> Small groups for a personalized experience
                </li>
              </ul>
              <p className="text-xl mb-6">1.5 to 2 hours</p>
              <Button 
                className="bg-black hover:bg-gray-800 text-white text-lg px-8 py-6"
                onClick={() => handleBookNow('1', '50685087360')}
              >
                Book Now via WhatsApp
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Tour Tile Gallery */}
      <div id="tours" className="container mx-auto py-16 px-4">
        <div className="mb-10">
          <h2 className="text-3xl font-bold mb-8 text-center">
            Explore Our Night Tours
          </h2>
          
          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-4">Filter by Wildlife</h3>
            <div className="flex flex-wrap gap-2">
              {tourTypes.map(type => (
                <Button 
                  key={type}
                  variant={selectedType === type ? "default" : "outline"}
                  onClick={() => handleTypeFilter(type)}
                  className={selectedType === type ? "bg-green-500 text-black hover:bg-green-600" : "text-white border-white hover:bg-gray-800"}
                >
                  {type}
                </Button>
              ))}
            </div>
          </div>
        </div>
        
        {/* Tour Tile Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredTours.map((tour) => (
            <div key={tour.id} className="group relative overflow-hidden rounded-lg cursor-pointer">
              {/* Tour Rank Badge */}
              <div className="absolute top-3 left-3 z-10 bg-white text-black font-bold rounded-full h-8 w-8 flex items-center justify-center">
                {sortedTours.findIndex(t => t.id === tour.id) + 1}
              </div>
              
              {/* Tour Image */}
              <div className="aspect-square overflow-hidden">
                <img 
                  src={tour.image} 
                  alt={tour.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-60 transition-all duration-300"></div>
              </div>
              
              {/* Tour Details Overlay */}
              <div className="absolute inset-0 flex flex-col justify-end p-6 text-white">
                <h3 className="text-2xl font-bold mb-2 group-hover:text-green-400 transition-colors">
                  {tour.title}
                </h3>
                <p className="text-sm mb-3 opacity-90">{tour.location}</p>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center">
                    <span className="text-yellow-400 mr-1">★</span>
                    <span className="font-bold">{tour.rating.toFixed(1)}</span>
                    <span className="text-xs ml-1">({tour.totalReviews})</span>
                  </div>
                  <span className="font-bold">${tour.price}</span>
                </div>
                
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 mt-auto">
                  <div className="flex space-x-2">
                    <Button 
                      className="w-full bg-green-500 hover:bg-green-600 text-black"
                      onClick={() => navigate(`/tour/${tour.id}`)}
                    >
                      View Details
                    </Button>
                    <Button 
                      className="w-full bg-white hover:bg-gray-200 text-black"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleBookNow(tour.id, tour.phone || '50685087360');
                      }}
                    >
                      Book Now
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Index;
