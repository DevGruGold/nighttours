
import React from 'react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import BookingForm from '@/components/BookingForm';
import { useIsMobile } from '@/hooks/use-mobile';
import TourCard from '@/components/TourCard';
import { Star, Award } from 'lucide-react';

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

      {/* Top Tours Costa Rica Ranking Section */}
      <div className="bg-gradient-to-b from-yellow-900/30 to-black py-8">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-center gap-2 mb-6">
            <Award className="text-yellow-500 h-8 w-8" />
            <h2 className="text-2xl md:text-3xl font-bold text-white">Top Tours Costa Rica</h2>
            <Award className="text-yellow-500 h-8 w-8" />
          </div>
          
          <div className="flex flex-col items-center mb-8">
            <div className="relative">
              <div className="absolute -top-4 -left-4 bg-yellow-500 text-black rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl shadow-lg z-10">
                #1
              </div>
              <div className="relative overflow-hidden rounded-lg border-4 border-yellow-500 shadow-[0_0_25px_rgba(234,179,8,0.3)]">
                <TourCard
                  id="1"
                  title="Night Tour Rio Habana"
                  location="La Fortuna, Costa Rica"
                  image="/lovable-uploads/f449f80c-6f48-4d6c-b6e5-4487ee38fc54.png"
                  duration="2 hours"
                  price={59}
                  rating={5.0}
                  rank={1}
                  totalReviews={124}
                  description="The #1 rated night tour in Costa Rica. Discover the magical nocturnal wildlife of Costa Rica's rainforest with our expert guides."
                />
              </div>
              <div className="flex items-center justify-center gap-1 mt-4">
                <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                <span className="text-yellow-400 font-semibold ml-2">(124 reviews)</span>
              </div>
              <div className="text-center mt-2">
                <p className="text-sm text-yellow-300 font-semibold">Ranked #1 in Top Tours Costa Rica's "Top Ten Night Tours"</p>
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
