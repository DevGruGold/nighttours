
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
      {/* Hero Section with Cropped and Condensed Image */}
      <div className="container mx-auto py-4 px-4 sm:px-6">
        <div className="flex justify-center">
          <img 
            src="/lovable-uploads/e15d9e1a-b8b6-4ce4-ad4a-498e607acd13.png" 
            alt="Rio Habana Night Tours" 
            className="w-full max-w-4xl mx-auto rounded-lg shadow-xl object-cover h-[40vh] sm:h-[45vh] md:h-[60vh]"
          />
        </div>
      </div>

      {/* Featured Night Walk Adventure Flyer */}
      <div className="bg-green-400 py-8 sm:py-12">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 items-center">
            <div className="order-2 md:order-1">
              <img 
                src="/lovable-uploads/461fb1d7-9855-49a9-a1c9-e4d3c31e3437.png" 
                alt="Night Walk Adventure Flyer" 
                className="rounded-lg shadow-xl mx-auto max-w-full h-auto"
              />
            </div>
            <div className="text-black order-1 md:order-2">
              <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-3 sm:mb-4">NIGHT WALK ADVENTURE</h2>
              <p className="text-lg sm:text-xl font-semibold mb-4 sm:mb-6">15% OFF GROUPS + 3 OR MORE</p>
              <ul className="space-y-2 sm:space-y-3 text-base sm:text-lg mb-4 sm:mb-6">
                <li className="flex items-center">
                  <span className="mr-2 text-xl sm:text-2xl">•</span> Transportation included
                </li>
                <li className="flex items-center">
                  <span className="mr-2 text-xl sm:text-2xl">•</span> Bilingual tour guide
                </li>
                <li className="flex items-center">
                  <span className="mr-2 text-xl sm:text-2xl">•</span> Private reserve next to Arenal volcano
                </li>
                <li className="flex items-center">
                  <span className="mr-2 text-xl sm:text-2xl">•</span> Small groups for a personalized experience
                </li>
              </ul>
              <p className="text-lg sm:text-xl mb-4 sm:mb-6">1.5 to 2 hours</p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <Button 
                  className="bg-black hover:bg-gray-800 text-white text-base sm:text-lg px-6 py-4 sm:px-8 sm:py-6 w-full sm:w-auto"
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

      {/* Booking Section */}
      <div className="bg-gray-900 py-10 sm:py-16">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-sm sm:max-w-md mx-auto bg-white rounded-lg shadow-xl overflow-hidden">
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
    </div>
  );
};

export default Index;
