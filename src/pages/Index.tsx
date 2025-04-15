
import React, { useState } from 'react';
import TourCard from '@/components/TourCard';
import { Button } from '@/components/ui/button';
import { Award, Filter } from 'lucide-react';

const tours = [
  {
    id: '1',
    title: 'Arenal Volcano Adventure',
    location: 'La Fortuna',
    image: 'volcano',
    duration: '8 hours',
    price: 99,
    rating: 4.9,
    totalReviews: 345,
    region: 'Northern Plains',
    guide: 'Chris',
  },
  {
    id: '2',
    title: 'Manuel Antonio Beach Tour',
    location: 'Pacific Coast',
    image: 'beach',
    duration: '6 hours',
    price: 79,
    rating: 4.8,
    totalReviews: 289,
    region: 'Central Pacific',
    guide: 'Chris',
  },
  {
    id: '3',
    title: 'Caribbean Snorkeling Adventure',
    location: 'Limon',
    image: 'ocean',
    duration: '4 hours',
    price: 69,
    rating: 4.8,
    totalReviews: 312,
    region: 'Caribbean',
    guide: 'Diego',
  },
  {
    id: '4',
    title: 'Monteverde Cloud Forest Hike',
    location: 'Monteverde',
    image: 'forest',
    duration: '5 hours',
    price: 65,
    rating: 4.7,
    totalReviews: 278,
    region: 'Northern Plains',
    guide: 'Maria',
  },
  {
    id: '5',
    title: 'Tortuguero Canal Tour',
    location: 'Limon',
    image: 'river',
    duration: '7 hours',
    price: 89,
    rating: 4.7,
    totalReviews: 256,
    region: 'Caribbean',
    guide: 'Diego',
  },
  {
    id: '6',
    title: 'Sunset Sailing Adventure',
    location: 'Pacific Coast',
    image: 'sunset',
    duration: '4 hours',
    price: 129,
    rating: 4.7,
    totalReviews: 245,
    region: 'Central Pacific',
    guide: 'Chris',
  },
  {
    id: '7',
    title: 'Rincon de la Vieja Volcano Tour',
    location: 'Guanacaste',
    image: 'volcano',
    duration: '8 hours',
    price: 95,
    rating: 4.6,
    totalReviews: 231,
    region: 'Northern Pacific',
    guide: 'Ana',
  },
  {
    id: '8',
    title: 'La Fortuna Waterfall Hike',
    location: 'La Fortuna',
    image: 'river',
    duration: '4 hours',
    price: 55,
    rating: 4.6,
    totalReviews: 224,
    region: 'Northern Plains',
    guide: 'Chris',
  },
  {
    id: '9',
    title: 'Caño Negro Wildlife Refuge Tour',
    location: 'Northern Plains',
    image: 'river',
    duration: '10 hours',
    price: 110,
    rating: 4.6,
    totalReviews: 218,
    region: 'Northern Plains',
    guide: 'Diego',
  },
  {
    id: '10',
    title: 'Corcovado National Park Expedition',
    location: 'Osa Peninsula',
    image: 'forest',
    duration: '12 hours',
    price: 150,
    rating: 4.6,
    totalReviews: 201,
    region: 'South Pacific',
    guide: 'Elena',
  },
  {
    id: '11',
    title: 'Rio Celeste Waterfall Tour',
    location: 'Alajuela',
    image: 'river',
    duration: '9 hours',
    price: 105,
    rating: 4.5,
    totalReviews: 197,
    region: 'Northern Plains',
    guide: 'Carlos',
  },
  {
    id: '12',
    title: 'Whale & Dolphin Watching',
    location: 'Uvita',
    image: 'ocean',
    duration: '5 hours',
    price: 85,
    rating: 4.5,
    totalReviews: 195,
    region: 'South Pacific',
    guide: 'Pablo',
  },
  {
    id: '13',
    title: 'Zip Lining in Monteverde',
    location: 'Monteverde',
    image: 'forest',
    duration: '3 hours',
    price: 75,
    rating: 4.5,
    totalReviews: 185,
    region: 'Northern Plains',
    guide: 'Maria',
  },
  {
    id: '14',
    title: 'Poas Volcano National Park',
    location: 'Central Valley',
    image: 'volcano',
    duration: '5 hours',
    price: 65,
    rating: 4.5,
    totalReviews: 178,
    region: 'Central Valley',
    guide: 'Luis',
  },
  {
    id: '15',
    title: 'Chocolate & Coffee Tour',
    location: 'Central Valley',
    image: 'forest',
    duration: '4 hours',
    price: 59,
    rating: 4.5,
    totalReviews: 174,
    region: 'Central Valley',
    guide: 'Sofia',
  },
  {
    id: '16',
    title: 'Whitewater Rafting Pacuare River',
    location: 'Turrialba',
    image: 'river',
    duration: '10 hours',
    price: 99,
    rating: 4.4,
    totalReviews: 168,
    region: 'Central Valley',
    guide: 'Marco',
  },
  {
    id: '17',
    title: 'Night Jungle Safari Tour',
    location: 'La Fortuna',
    image: 'forest',
    duration: '3 hours',
    price: 45,
    rating: 4.4,
    totalReviews: 162,
    region: 'Northern Plains',
    guide: 'Chris',
  },
  {
    id: '18',
    title: 'Doka Coffee Estate Tour',
    location: 'Alajuela',
    image: 'forest',
    duration: '5 hours',
    price: 55,
    rating: 4.4,
    totalReviews: 159,
    region: 'Central Valley',
    guide: 'Gabriela',
  },
  {
    id: '19',
    title: 'Tamarindo Sunset Catamaran',
    location: 'Guanacaste',
    image: 'sunset',
    duration: '4 hours',
    price: 85,
    rating: 4.4,
    totalReviews: 155,
    region: 'Northern Pacific',
    guide: 'Ana',
  },
  {
    id: '20',
    title: 'Arenal Hot Springs Experience',
    location: 'La Fortuna',
    image: 'volcano',
    duration: '3 hours',
    price: 65,
    rating: 4.3,
    totalReviews: 148,
    region: 'Northern Plains',
    guide: 'Chris',
  },
  {
    id: '21',
    title: 'Indigenous Culture Tour',
    location: 'Southern Zone',
    image: 'forest',
    duration: '6 hours',
    price: 75,
    rating: 4.3,
    totalReviews: 142,
    region: 'South Pacific',
    guide: 'Juana',
  },
  {
    id: '22',
    title: 'Tenorio River Rafting',
    location: 'Guanacaste',
    image: 'river',
    duration: '7 hours',
    price: 85,
    rating: 4.3,
    totalReviews: 138,
    region: 'Northern Pacific',
    guide: 'Roberto',
  },
  {
    id: '23',
    title: 'Turtle Nesting Experience',
    location: 'Ostional',
    image: 'beach',
    duration: '5 hours',
    price: 70,
    rating: 4.3,
    totalReviews: 135,
    region: 'Northern Pacific',
    guide: 'Maria',
  },
  {
    id: '24',
    title: 'Birdwatching in Carara',
    location: 'Central Pacific',
    image: 'forest',
    duration: '6 hours',
    price: 60,
    rating: 4.2,
    totalReviews: 128,
    region: 'Central Pacific',
    guide: 'Pablo',
  },
  {
    id: '25',
    title: 'Irazu Volcano Day Trip',
    location: 'Cartago',
    image: 'volcano',
    duration: '7 hours',
    price: 70,
    rating: 4.2,
    totalReviews: 122,
    region: 'Central Valley',
    guide: 'Carlos',
  }
];

// Sort tours by rating (highest to lowest)
const sortedTours = [...tours].sort((a, b) => 
  b.rating === a.rating ? b.totalReviews - a.totalReviews : b.rating - a.rating
);

const regions = [...new Set(tours.map(tour => tour.region))];

const Index = () => {
  const [filteredTours, setFilteredTours] = useState(sortedTours);
  const [selectedRegion, setSelectedRegion] = useState<string | null>(null);
  
  const handleRegionFilter = (region: string | null) => {
    setSelectedRegion(region);
    if (region === null) {
      setFilteredTours(sortedTours);
    } else {
      setFilteredTours(sortedTours.filter(tour => tour.region === region));
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-primary-light/5 to-ocean-light/5">
      <div className="relative h-[30vh] md:h-[40vh] overflow-hidden bg-primary">
        <div className="absolute inset-0 bg-gradient-to-r from-primary to-ocean animate-gradient-x opacity-90" />
        <div className="absolute inset-0 flex items-center justify-center px-4">
          <div className="text-center text-white z-10">
            <h1 className="text-3xl md:text-5xl font-bold mb-4 animate-fade-up flex items-center justify-center">
              <Award className="h-8 w-8 mr-3" /> Top Tours Costa Rica
            </h1>
            <p className="text-lg md:text-xl animate-fade-up delay-150">
              Discover the 25 highest-rated tours in Costa Rica based on TripAdvisor reviews
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto py-8 md:py-12 px-4">
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Filter by Region</h2>
          <div className="flex flex-wrap gap-2">
            <Button 
              variant={selectedRegion === null ? "default" : "outline"} 
              onClick={() => handleRegionFilter(null)}
              className="flex items-center"
            >
              <Filter className="h-4 w-4 mr-2" /> All Regions
            </Button>
            {regions.map(region => (
              <Button 
                key={region}
                variant={selectedRegion === region ? "default" : "outline"}
                onClick={() => handleRegionFilter(region)}
              >
                {region}
              </Button>
            ))}
          </div>
        </div>
        
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 md:mb-12 text-primary flex items-center justify-center">
          <Award className="h-7 w-7 mr-2" /> Top-Rated Tours in Costa Rica
        </h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {filteredTours.map((tour, index) => (
            <TourCard 
              key={tour.id} 
              {...tour} 
              rank={sortedTours.findIndex(t => t.id === tour.id) + 1}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Index;
