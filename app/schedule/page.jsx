"use client"
import React, { useState } from 'react';
import { format } from 'date-fns';

export default function Schedule() {
  const [selectedDate, setSelectedDate] = useState(
    format(new Date(), 'yyyy-MM-dd')
  );

  const [timeSlots] = useState([
    {
      id: '1',
      teacherId: '1',
      studentId: null,
      date: '2024-02-20',
      startTime: '09:00',
      endTime: '10:00',
      isBooked: false
    },
    {
      id: '2',
      teacherId: '1',
      studentId: null,
      date: '2024-02-20',
      startTime: '10:00',
      endTime: '11:00',
      isBooked: false
    },
    // More time slots can be added here
  ]);

  const [bookingForm, setBookingForm] = useState({
    name: '',
    email: '',
    phone: ''
  });

  const handleBooking = (slotId) => {
    // Here we would integrate with Supabase or other backend to handle the booking
    console.log('Booking slot:', slotId, bookingForm);
  };

  return (
    <main className="bg-black text-white min-h-screen ">
    <div className=" items-center justify-between px-8 py-32 lg:px-24 bg-gradient-to-r from-gray-900 via-black to-gray-900"
        >
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

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {timeSlots.map((slot) => (
          <div
            key={slot.id}
            className="border border-gray-700 rounded-lg p-6 bg-gray-600 shadow-lg transform transition duration-300 hover:scale-105"
          >
            <div className="flex justify-between items-center mb-4">
              <span className="font-medium text-white">
                {slot.startTime} - {slot.endTime}
              </span>
              <span
                className={`px-3 py-1 rounded-full text-sm ${
                  slot.isBooked
                    ? 'bg-red-100 text-red-800'
                    : 'bg-purple-100 text-purple-800'
                }`}
              >
                {slot.isBooked ? 'Booked' : 'Available'}
              </span>
            </div>

            {!slot.isBooked && (
             <form
             onSubmit={(e) => {
               e.preventDefault();
               handleBooking(slot.id);
             }}
             className="space-y-6 max-w-lg mx-auto"
           >
             <div className="space-y-2">
               <input
                 type="text"
                 placeholder="Your Name"
                 className="w-full p-4 text-white border bg-gray-600 border-gray-700  rounded-md shadow-sm focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all duration-200"
                 value={bookingForm.name}
                 onChange={(e) =>
                   setBookingForm({ ...bookingForm, name: e.target.value })
                 }
                 required
               />
             </div>
             
             <div className="space-y-2">
               <input
                 type="email"
                 placeholder="Email"
                 className="w-full p-4 text-white border bg-gray-600 border-gray-700 rounded-md shadow-sm focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all duration-200"
                 value={bookingForm.email}
                 onChange={(e) =>
                   setBookingForm({ ...bookingForm, email: e.target.value })
                 }
                 required
               />
             </div>
             
             <div className="space-y-2">
               <input
                 type="tel"
                 placeholder="Phone"
                 className="w-full p-4 text-white border bg-gray-600 border-gray-700 rounded-md shadow-sm focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all duration-200"
                 value={bookingForm.phone}
                 onChange={(e) =>
                   setBookingForm({ ...bookingForm, phone: e.target.value })
                 }
                 required
               />
             </div>
             
             <button
               type="submit"
               className="w-full py-3 bg-purple-600 text-white rounded-md hover:bg-purple-700 focus:outline-none focus:ring-4 focus:ring-purple-500 focus:ring-offset-2 transition-all duration-200"
             >
               Book Session
             </button>
           </form>
           
            )}
          </div>
        ))}
      </div>
    </div>
    </main>
  );
}
