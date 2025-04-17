
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
      {/* Hero Section with Image and Booking Form */}
      <div className="container mx-auto py-4 px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
          <div className="relative">
            <img 
              src="/lovable-uploads/e15d9e1a-b8b6-4ce4-ad4a-498e607acd13.png" 
              alt="Rio Habana Night Tours" 
              className="w-full rounded-lg shadow-xl object-contain"
            />
          </div>
          <div className="bg-white rounded-lg shadow-xl overflow-hidden">
            <div className="bg-green-600 p-4 sm:p-6 text-white">
              <h3 className="text-xl sm:text-2xl font-bold">Book Your Night Tour</h3>
              <p className="text-green-100 text-sm sm:text-base">Select a date and number of guests</p>
            </div>
            <div className="p-4 sm:p-6">
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

      {/* Featured Night Tour Images */}
      <div className="bg-black py-8 sm:py-12">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 items-center">
            <div>
              <img 
                src="/lovable-uploads/1008dccb-f695-4c83-a7e8-016bfc52eff3.png" 
                alt="Night Tour Featured Image" 
                className="rounded-lg shadow-xl mx-auto max-w-full h-auto"
              />
            </div>
            <div className="text-white">
              <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-6">NIGHT TOUR ADVENTURE</h2>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-6">
                <Button 
                  className="bg-green-600 hover:bg-green-700 text-white text-base sm:text-lg px-6 py-4 sm:px-8 sm:py-6 w-full sm:w-auto"
                  onClick={() => handleBookNow('50685087360')}
                >
                  Book Now via WhatsApp
                </Button>
                <Button 
                  className="bg-white hover:bg-gray-200 text-black text-base sm:text-lg px-6 py-4 sm:px-8 sm:py-6 w-full sm:w-auto"
                  onClick={() => navigate('/tour/1')}
                >
                  View Details
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
