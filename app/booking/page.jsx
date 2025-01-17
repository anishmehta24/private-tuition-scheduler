"use client"
import { useState, useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL || '',
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || ''
);

export default function BookingPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
  });

  const bookingDetails = {
    day: searchParams.get('day'),
    startTime: searchParams.get('startTime'),
    endTime: searchParams.get('endTime'),
    week: searchParams.get('week'),
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Disable form submission while processing
    const submitButton = e.target.querySelector('button[type="submit"]');
    submitButton.disabled = true;
    
    try {
      // First, check if the slot is already booked
      const { data: existingBooking } = await supabase
        .from('Schedule')
        .select('*')
        .eq('day', bookingDetails.day)
        .eq('time_slot', `${bookingDetails.startTime}-${bookingDetails.endTime}`)
        .eq('week', bookingDetails.week)
        .single();

      if (existingBooking) {
        alert('Sorry, this slot has already been booked. Please choose another time.');
        router.push('/schedule');
        return;
      }

      // Create the booking
      const { error } = await supabase
        .from('Schedule')
        .insert([{
          day: bookingDetails.day,
          time_slot: `${bookingDetails.startTime}-${bookingDetails.endTime}`,
          week: bookingDetails.week,
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          booking_date: new Date().toISOString(),
          status: 'confirmed'
        }]);

      if (error) throw error;

      // Show success message and redirect
      alert(`Booking confirmed for ${bookingDetails.day} at ${bookingDetails.startTime}`);
      router.push('/schedule');
      
    } catch (error) {
      console.error('Booking error:', error);
      alert('Failed to book slot: ' + error.message);
    } finally {
      submitButton.disabled = false;
    }
  };

  return (
    <>
    <main className="bg-black text-white min-h-screen">
      <div className="container mx-auto px-4 py-32">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-3xl font-bold text-purple-500 mb-8">Complete Your Booking</h1>
          
          <div className="bg-gray-800 p-6 rounded-lg mb-8">
            <h2 className="text-xl font-semibold mb-4">Selected Time Slot</h2>
            <p className="text-gray-300">
              Day: {bookingDetails.day}<br />
              Time: {bookingDetails.startTime} - {bookingDetails.endTime}
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-gray-300 mb-2">Name</label>
              <input
                type="text"
                required
                className="w-full p-3 bg-gray-700 rounded-md"
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
              />
            </div>

            <div>
              <label className="block text-gray-300 mb-2">Email</label>
              <input
                type="email"
                required
                className="w-full p-3 bg-gray-700 rounded-md"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
              />
            </div>

            <div>
              <label className="block text-gray-300 mb-2">Phone</label>
              <input
                type="tel"
                required
                className="w-full p-3 bg-gray-700 rounded-md"
                value={formData.phone}
                onChange={(e) => setFormData({...formData, phone: e.target.value})}
              />
            </div>

            <div className="flex gap-4">
              <button
                type="button"
                onClick={() => router.back()}
                className="px-6 py-3 bg-gray-600 rounded-md hover:bg-gray-700"
              >
                Back
              </button>
              <button
                type="submit"
                className="px-6 py-3 bg-purple-600 rounded-md hover:bg-purple-700 flex-1"
              >
                Confirm Booking
              </button>
            </div>
          </form>
        </div>
      </div>
    </main>
    </>
  );
}
