"use client"
import React, { useState, useEffect } from 'react';
import { format } from 'date-fns';
import { createClient } from '@supabase/supabase-js';
import { useRouter } from 'next/navigation';

// Initialize Supabase client
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL || '',
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || ''
);

export default function Schedule() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);
  const [bookings, setBookings] = useState({});
  const [fetchError, setFetchError] = useState(null);

  // Generate time slots from 8 AM to 10 PM
  const timeSlots = Array.from({ length: 14 }, (_, index) => {
    const hour = index + 8;
    const startTime = `${hour.toString().padStart(2, '0')}:00`;
    const endTime = `${(hour + 1).toString().padStart(2, '0')}:00`;
    return { startTime, endTime };
  });

  const days = ['Saturday', 'Sunday'];

  // Fetch bookings from Supabase
  useEffect(() => {
    const fetchBookings = async () => {
      try {
        // Check if Supabase is properly configured
        if (!process.env.NEXT_PUBLIC_SUPABASE_URL || !process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY) {
          throw new Error('Supabase credentials not configured');
        }

        const { data, error } = await supabase
          .from('Schedule')
          .select('*')
          .eq('week', format(new Date(), 'yyyy-w'));

        if (error) throw error;

        // Transform bookings data into a lookup object
        const bookingsMap = {};
        data.forEach(booking => {
          bookingsMap[`${booking.day}-${booking.time_slot}`] = booking;
        });
        
        setBookings(bookingsMap);
      } catch (error) {
        setFetchError(error);
        // Set empty bookings object so all slots appear as available
        setBookings({});
      } finally {
        setIsLoading(false);
      }
    };

    fetchBookings();
  }, []);

  const handleBooking = (day, timeSlot) => {
    const bookingData = {
      day,
      startTime: timeSlot.startTime,
      endTime: timeSlot.endTime,
      week: format(new Date(), 'yyyy-w')
    };

    // Encode booking data for URL
    const queryParams = new URLSearchParams(bookingData).toString();
    router.push(`/booking?${queryParams}`);
  };

  if (isLoading) {
    return <div className="min-h-screen flex items-center justify-center">
      <div className="text-purple-500">Loading...</div>
    </div>;
  }

  if (fetchError) {
    console.warn('Running in offline mode - all slots shown as available');
  }

  return (
    <main className="bg-black text-white min-h-screen">
      <div className="items-center justify-between px-8 py-32 lg:px-24 bg-gradient-to-r from-gray-900 via-black to-gray-900">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-purple-500 mb-4">
            Extra Sessions Available in Different Cities During Weekends
          </h2>
          <p className="text-lg text-gray-300">
            Our teacher frequently conducts extra sessions in various cities over the weekends. Book your session here and get personalized guidance to excel in your studies!
          </p>
        </div>

        {/* Schedule Form Section */}
        <h2 className="text-3xl font-extrabold text-purple-500 mb-8 text-center">
          Book a Session
        </h2>

        {/* Schedule Grid */}
        <div className="grid grid-cols-2 gap-4">
          {days.map(day => (
            <div key={day} className="border border-gray-700 rounded-lg p-4">
              <h3 className="text-2xl font-bold text-purple-500 mb-4 text-center">{day}</h3>
              <div className="space-y-2">
                {timeSlots.map((slot, index) => {
                  const bookingKey = `${day}-${slot.startTime}-${slot.endTime}`;
                  const isBooked = !!bookings[bookingKey];
                  const bookedDetails = bookings[bookingKey];

                  return (
                    <div
                      key={`${day}-${index}`}
                      className={`flex justify-between items-center p-3 border ${
                        isBooked 
                          ? 'border-red-800 bg-red-900/20' 
                          : 'border-gray-700 bg-gray-800 hover:bg-gray-700'
                      } rounded-lg transition-colors duration-200`}
                    >
                      <div className="flex flex-col">
                        <span className="text-white">
                          {slot.startTime} - {slot.endTime}
                        </span>
                        {isBooked && (
                          <span className="text-xs text-red-400">
                            Booked by: {bookedDetails?.name || 'Someone'}
                          </span>
                        )}
                      </div>
                      {isBooked ? (
                        <span className="px-4 py-1 bg-red-600 text-white rounded-md select-none">
                          Booked
                        </span>
                      ) : (
                        <button 
                          onClick={() => handleBooking(day, slot)}
                          className="px-4 py-1 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition-colors"
                        >
                          Book
                        </button>
                      )}

                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
