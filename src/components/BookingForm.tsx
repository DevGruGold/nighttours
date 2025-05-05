
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
        <label className="block text-sm font-medium text-yellow-200">Select Date</label>
        <Popover>
          <PopoverTrigger asChild>
            <Button
              variant="outline"
              className="w-full justify-start text-left font-normal border-yellow-500/50 text-white bg-black/30 hover:bg-black/50"
            >
              <CalendarIcon className="mr-2 h-4 w-4 text-yellow-500" />
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
              className="bg-gray-900 border-none"
            />
          </PopoverContent>
        </Popover>
      </div>

      <div className="space-y-2">
        <label className="block text-sm font-medium text-yellow-200">Number of Guests</label>
        <Input
          type="number"
          min="1"
          max="20"
          value={guests}
          onChange={(e) => setGuests(parseInt(e.target.value))}
          className="border-yellow-500/50 text-white w-full bg-black/30"
        />
      </div>

      <Button 
        type="submit" 
        className="w-full bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-2"
        disabled={!date}
      >
        BOOK NOW
      </Button>
    </form>
  );
};

export default BookingForm;
