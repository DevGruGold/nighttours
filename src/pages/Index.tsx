
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

      {/* Tour Features - Using text instead of green photos */}
      <div className="bg-black/80 py-12 border-t border-yellow-500/20">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-yellow-400">What Makes Our Tour Special</h2>
            <div className="w-24 h-1 bg-yellow-500 mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 rounded-lg border border-yellow-500/20 bg-black/40 hover:bg-black/60 transition-all">
              <h3 className="text-xl font-bold mb-3 text-yellow-400">Nocturnal Wildlife</h3>
              <p className="text-gray-300">Spot fascinating creatures that only emerge after dark, including frogs, spiders, and insects in their natural habitat.</p>
            </div>
            
            <div className="p-6 rounded-lg border border-yellow-500/20 bg-black/40 hover:bg-black/60 transition-all">
              <h3 className="text-xl font-bold mb-3 text-yellow-400">Expert Local Guides</h3>
              <p className="text-gray-300">Our knowledgeable guides are experts in local ecology and will help you spot and learn about the rainforest ecosystem.</p>
            </div>
            
            <div className="p-6 rounded-lg border border-yellow-500/20 bg-black/40 hover:bg-black/60 transition-all">
              <h3 className="text-xl font-bold mb-3 text-yellow-400">Unforgettable Experience</h3>
              <p className="text-gray-300">Experience the sounds, sights and atmosphere of the Costa Rican rainforest in a completely different light.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
