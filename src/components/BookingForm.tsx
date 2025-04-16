
import React from 'react';
import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import { Input } from '@/components/ui/input';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { format } from 'date-fns';
import { Calendar as CalendarIcon } from 'lucide-react';

interface BookingFormProps {
  tourTitle: string;
  location: string;
  onSubmit: (date: Date, guests: number) => void;
}

const BookingForm = ({ tourTitle, location, onSubmit }: BookingFormProps) => {
  const [date, setDate] = React.useState<Date>();
  const [guests, setGuests] = React.useState(1);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (date) {
      onSubmit(date, guests);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="space-y-2">
        <label className="block text-sm font-medium text-gray-700">Select Date</label>
        <Popover>
          <PopoverTrigger asChild>
            <Button
              variant="outline"
              className="w-full justify-start text-left font-normal border-gray-300 text-gray-700 bg-white"
            >
              <CalendarIcon className="mr-2 h-4 w-4" />
              {date ? format(date, 'PPP') : <span>Pick a date</span>}
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0" align="start">
            <Calendar
              mode="single"
              selected={date}
              onSelect={setDate}
              initialFocus
              disabled={(date) => date < new Date()}
              className="bg-white border-none"
            />
          </PopoverContent>
        </Popover>
      </div>

      <div className="space-y-2">
        <label className="block text-sm font-medium text-gray-700">Number of Guests</label>
        <Input
          type="number"
          min="1"
          max="20"
          value={guests}
          onChange={(e) => setGuests(parseInt(e.target.value))}
          className="border-gray-300 text-gray-900 w-full bg-white"
        />
      </div>

      <Button 
        type="submit" 
        className="w-full bg-green-600 hover:bg-green-700 text-white font-medium py-2"
        disabled={!date}
      >
        Book via WhatsApp
      </Button>
    </form>
  );
};

export default BookingForm;
