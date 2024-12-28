import React from 'react';
import TourCard from '@/components/TourCard';

const tours = [
  {
    id: '1',
    title: 'Arenal Volcano Adventure',
    location: 'La Fortuna',
    image: 'volcano',
    duration: '8 hours',
    price: 99,
    guide: 'Chris',
  },
  {
    id: '2',
    title: 'Manuel Antonio Beach Tour',
    location: 'Pacific Coast',
    image: 'beach',
    duration: '6 hours',
    price: 79,
    guide: 'Chris',
  },
  {
    id: '3',
    title: 'Caribbean Snorkeling Adventure',
    location: 'Limon',
    image: 'ocean',
    duration: '4 hours',
    price: 69,
    guide: 'Diego',
  },
  {
    id: '4',
    title: 'Rainforest Hiking Experience',
    location: 'La Fortuna',
    image: 'forest',
    duration: '5 hours',
    price: 59,
    guide: 'Chris',
  },
  {
    id: '5',
    title: 'Tortuguero Canal Tour',
    location: 'Limon',
    image: 'river',
    duration: '7 hours',
    price: 89,
    guide: 'Diego',
  },
  {
    id: '6',
    title: 'Sunset Sailing Adventure',
    location: 'Pacific Coast',
    image: 'sunset',
    duration: '4 hours',
    price: 129,
    guide: 'Chris',
  }
];

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-primary-light/10 to-ocean-light/10">
      <div className="relative h-[60vh] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary to-ocean animate-gradient-x">
          <div className="absolute inset-0 opacity-20">
            <div className="floating-leaves"></div>
          </div>
        </div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white z-10">
            <h1 className="text-5xl font-bold mb-4 animate-fade-up">Top Tours Costa Rica</h1>
            <p className="text-xl animate-fade-up delay-150">Discover the incredible wildlife of Costa Rica</p>
          </div>
        </div>
      </div>

      <div className="container mx-auto py-16">
        <h2 className="text-3xl font-bold text-center mb-12 text-primary">Our Experiences</h2>
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