
import React from 'react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import BookingForm from '@/components/BookingForm';
import { useIsMobile } from '@/hooks/use-mobile';

const Index = () => {
  const navigate = useNavigate();
  const isMobile = useIsMobile();
  
  const handleBookNow = (phone: string) => {
    const message = encodeURIComponent(
      `Hello, I would like to book the Night Tour Rio Habana in La Fortuna. Please provide availability and details.`
    );
    window.open(`https://wa.me/${phone}?text=${message}`);
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section with New Graphic */}
      <div className="container mx-auto py-6 px-4 sm:px-6">
        <div className="relative mb-8">
          <img 
            src="/lovable-uploads/f449f80c-6f48-4d6c-b6e5-4487ee38fc54.png" 
            alt="Río La Habana Night Walk" 
            className="w-full rounded-lg shadow-xl"
          />
          
          {/* Booking Form overlay on right side for desktop, below image for mobile */}
          <div className="mt-6 md:absolute md:top-1/2 md:right-8 md:transform md:-translate-y-1/2 md:w-96 md:max-w-[30%]">
            <div className="bg-black bg-opacity-80 rounded-lg shadow-xl overflow-hidden border border-yellow-500">
              <div className="bg-yellow-500 p-4 text-black">
                <h3 className="text-xl font-bold">Book Your Night Tour</h3>
                <p className="text-sm">$59 per person | $99 per couple</p>
              </div>
              <div className="p-4">
                <BookingForm 
                  tourTitle="Night Tour Rio Habana" 
                  location="La Fortuna, Costa Rica" 
                  onSubmit={(date, guests) => {
                    const formattedDate = date.toLocaleDateString();
                    const message = encodeURIComponent(
                      `Hello, I would like to book the Night Tour Rio Habana in La Fortuna for ${formattedDate} with ${guests} guest${guests !== 1 ? 's' : ''}. Please provide availability and details.`
                    );
                    window.open(`https://wa.me/50685087360?text=${message}`);
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Experience Description */}
      <div className="bg-black py-8">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-yellow-500">EXPERIENCE THE RAINFOREST AT NIGHT</h2>
            <p className="text-lg mb-8">Discover the magical nocturnal wildlife of Costa Rica's rainforest. Our guided night walk reveals a hidden world of fascinating creatures like frogs, snakes, sloths, and more in their natural habitat.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                className="bg-yellow-500 hover:bg-yellow-600 text-black text-base sm:text-lg px-8 py-4 font-bold"
                onClick={() => handleBookNow('50685087360')}
              >
                BOOK NOW
              </Button>
              <Button 
                className="bg-transparent hover:bg-white/10 text-white border border-white text-base sm:text-lg px-8 py-4"
                onClick={() => navigate('/tour/1')}
              >
                VIEW DETAILS
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Night Tour Images */}
      <div className="bg-black py-8 sm:py-12">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gray-900 p-6 rounded-lg">
              <img 
                src="/lovable-uploads/1008dccb-f695-4c83-a7e8-016bfc52eff3.png" 
                alt="Night Tour Featured Image" 
                className="rounded-lg shadow-xl mb-4 w-full h-60 object-cover"
              />
              <h3 className="text-xl font-bold mb-2 text-yellow-500">Nocturnal Wildlife</h3>
              <p className="text-gray-300">Spot fascinating creatures that only emerge after dark, including frogs, spiders, and insects.</p>
            </div>
            <div className="bg-gray-900 p-6 rounded-lg">
              <img 
                src="/lovable-uploads/da2efb5f-4b88-4403-8f3c-ce331a829ee3.png" 
                alt="Night Tour Featured Image" 
                className="rounded-lg shadow-xl mb-4 w-full h-60 object-cover"
              />
              <h3 className="text-xl font-bold mb-2 text-yellow-500">Expert Guides</h3>
              <p className="text-gray-300">Our knowledgeable guides will help you spot and learn about the fascinating rainforest ecosystem.</p>
            </div>
            <div className="bg-gray-900 p-6 rounded-lg">
              <img 
                src="/lovable-uploads/461fb1d7-9855-49a9-a1c9-e4d3c31e3437.png" 
                alt="Night Tour Featured Image" 
                className="rounded-lg shadow-xl mb-4 w-full h-60 object-cover"
              />
              <h3 className="text-xl font-bold mb-2 text-yellow-500">Memorable Adventure</h3>
              <p className="text-gray-300">Experience the sounds and sights of the rainforest in a completely different light.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
