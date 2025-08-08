import React, { useState } from 'react';
import { ChevronUp, ChevronDown } from 'lucide-react';

interface GuestSelectorProps {
  onGuestsChange: (guests: { adults: number; children: number; rooms: number }) => void;
}

const GuestSelector: React.FC<GuestSelectorProps> = ({ onGuestsChange }) => {
  const [guests, setGuests] = useState(2);

  const updateGuests = (increment: boolean) => {
    let newGuests = guests;
    if (increment) {
      if (newGuests < 4) newGuests++;
    } else {
      if (newGuests > 1) newGuests--;
    }
    setGuests(newGuests);
    onGuestsChange({ adults: newGuests, children: 0, rooms: 1 });
  };

  return (
    <div className="flex items-center border border-gray-300 rounded-lg bg-white">
      <div className="px-4 py-3 text-center min-w-[80px]">
        <div className="text-2xl font-medium text-gray-900">{guests}</div>
      </div>
      <div className="flex flex-col border-l border-gray-300">
        <button
          type="button"
          onClick={() => updateGuests(true)}
          className="px-3 py-1.5 hover:bg-gray-50 transition-colors border-b border-gray-300"
          disabled={guests >= 4}
        >
          <ChevronUp className="w-4 h-4 text-gray-600" />
        </button>
        <button
          type="button"
          onClick={() => updateGuests(false)}
          className="px-3 py-1.5 hover:bg-gray-50 transition-colors"
          disabled={guests <= 1}
        >
          <ChevronDown className="w-4 h-4 text-gray-600" />
        </button>
      </div>
    </div>
  );
};

export default GuestSelector;