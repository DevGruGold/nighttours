
import React from 'react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

const Index = () => {
  const navigate = useNavigate();
  
  const handleBookNow = (phone: string) => {
    const message = encodeURIComponent(
      `Hello, I would like to book the Night Tour Rio Habana in La Fortuna. Please provide availability and details.`
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
                onClick={() => handleBookNow('50685087360')}
              >
                Book Now via WhatsApp
              </Button>
              <Button 
                className="bg-white hover:bg-gray-200 text-black text-lg px-8 py-6 ml-4"
                onClick={() => navigate('/tour/1')}
              >
                View Details
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
