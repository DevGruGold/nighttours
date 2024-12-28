import React from 'react';
import TourCard from '@/components/TourCard';

const tours = [
  {
    id: '1',
    title: 'Arenal Volcano Adventure',
    location: 'La Fortuna',
    image: 'https://images.unsplash.com/photo-1482938289607-e9573fc25ebb',
    duration: '8 hours',
    price: 99,
    guide: 'Chris',
  },
  {
    id: '2',
    title: 'Manuel Antonio Beach Tour',
    location: 'Pacific Coast',
    image: 'https://images.unsplash.com/photo-1500375592092-40eb2168fd21',
    duration: '6 hours',
    price: 79,
    guide: 'Chris',
  },
  {
    id: '3',
    title: 'Caribbean Snorkeling Adventure',
    location: 'Limon',
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb',
    duration: '4 hours',
    price: 69,
    guide: 'Diego',
  },
  {
    id: '4',
    title: 'Rainforest Hiking Experience',
    location: 'La Fortuna',
    image: 'https://images.unsplash.com/photo-1513836279014-a89f7a76ae86',
    duration: '5 hours',
    price: 59,
    guide: 'Chris',
  },
  {
    id: '5',
    title: 'Tortuguero Canal Tour',
    location: 'Limon',
    image: 'https://images.unsplash.com/photo-1504893524553-b855bce32c67',
    duration: '7 hours',
    price: 89,
    guide: 'Diego',
  },
  {
    id: '6',
    title: 'Sunset Sailing Adventure',
    location: 'Pacific Coast',
    image: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e',
    duration: '4 hours',
    price: 129,
    guide: 'Chris',
  }
];

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="relative h-[60vh] overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1501854140801-50d01698950b"
          alt="Costa Rica landscape"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-5xl font-bold mb-4">Top Tours Costa Rica</h1>
            <p className="text-xl">Discover the natural wonders of Costa Rica</p>
          </div>
        </div>
      </div>

      <div className="container mx-auto py-16">
        <h2 className="text-3xl font-bold text-center mb-12">Our Experiences</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tours.map((tour) => (
            <TourCard key={tour.id} {...tour} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Index;