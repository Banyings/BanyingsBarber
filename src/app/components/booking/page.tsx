'use client';

import React, { useState } from 'react';
import { Calendar, Clock, Scissors, UserCircle, Star} from 'lucide-react';
import Image from 'next/image';

const SERVICES = [
  {
    id: 'haircut',
    name: 'Classic Haircut',
    price: 35,
    duration: 45,
    description: 'Timeless style for the modern gentleman.',
    image: '/image.png',
    features: [
      'Consultation to understand your style preferences',
      'Precision cutting techniques',
      'Styling with premium products',
      'Hot towel neck shave'
    ],
    benefits: 'Perfect for maintaining a professional appearance while staying true to your personal style.',
    rating: 4.9,
    reviewCount: 128
  },
  {
    id: 'beard-trim',
    name: 'Beard Trim',
    price: 25,
    duration: 30,
    description: 'Precision grooming for your facial hair.',
    image: '/image.png',
    features: [
      'Beard shape consultation',
      'Line-up and detailing',
      'Hot towel treatment',
      'Beard oil application'
    ],
    benefits: 'Keep your beard looking sharp and well-maintained with our expert trimming service.',
    rating: 4.8,
    reviewCount: 95
  },
  {
    id: 'hot-towel-shave',
    name: 'Hot Towel Shave',
    price: 45,
    duration: 60,
    description: 'Luxurious traditional shaving experience.',
    image: '/image.png',
    features: [
      'Pre-shave oil treatment',
      'Multiple hot towel applications',
      'Traditional straight razor shave',
      'After-shave balm massage'
    ],
    benefits: 'Experience the ultimate in traditional grooming with our relaxing and thorough shaving service.',
    rating: 4.9,
    reviewCount: 87
  },
  {
    id: 'Haircut- & Beard - Trim',
    name: 'Haircut & Beard Trim',
    price: 55,
    duration: 75,
    description: 'Complete grooming package.',
    image: '/image.png',
    features: [
      'Full haircut service',
      'Beard shaping and trimming',
      'Styling consultation',
      'Complimentary beverage'
    ],
    benefits: 'Get the complete package with our most popular combination service for a fully refined look.',
    rating: 5.0,
    reviewCount: 156
  },
];

const TIME_SLOTS = [
  '09:00 AM', '10:00 AM', '11:00 AM', '12:00 PM', 
  '01:00 PM', '02:00 PM', '03:00 PM', '04:00 PM', 
  '05:00 PM'
];

const BookingPage = () => {
  const [selectedService, setSelectedService] = useState<string | null>(null);
  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [customerInfo, setCustomerInfo] = useState({
    name: '',
    phone: '',
    email: ''
  });

  const handleServiceSelect = (serviceId: string) => {
    setSelectedService(serviceId);
    setSelectedDate(null);
    setSelectedTime(null);
  };

  const handleDateSelect = (date: string) => {
    setSelectedDate(date);
    setSelectedTime(null);
  };

  const handleTimeSelect = (time: string) => {
    setSelectedTime(time);
  };

  const handleInfoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setCustomerInfo(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const bookingData = {
      service: SERVICES.find(s => s.id === selectedService),
      date: selectedDate,
      time: selectedTime,
      customer: customerInfo
    };
    console.log('Booking Submitted:', bookingData);
    alert('Booking submitted successfully!');
  };

  const getSelectedService = () => 
    SERVICES.find(service => service.id === selectedService);

  return (
    <div className="">
      <div className="max-w-7xl mx-auto   overflow-hidden">
        <div className="p-8">
          <h1 className="text-4xl font-bold text-center mb-12 text-gray-800">
            Book Your Appointment
          </h1>

          {/* Services Selection */}
          <div className="mb-12">
            <h2 className="text-2xl font-semibold mb-6 flex items-center">
              <Scissors className="mr-3 text-amber-600" />
              Select a Service
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {SERVICES.map((service) => (
                <button
                  key={service.id}
                  onClick={() => handleServiceSelect(service.id)}
                  className={`w-full text-left transition-all duration-300 rounded-xl ${
                    selectedService === service.id 
                      ? 'ring-2 ring-amber-500' 
                      : 'hover:shadow-lg'
                  }`}
                >
                  <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                    <div className="relative h-48">
                      <Image
                        src={service.image}
                        alt={service.name}
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 50vw"
                        priority={service.id === 'haircut'}
                        fill
                      />
                    </div>
                    
                    <div className="p-6">
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center">
                          <Scissors className="text-amber-500 w-5 h-5 mr-2" />
                          <h3 className="text-xl font-bold text-gray-800">{service.name}</h3>
                        </div>
                        <div className="flex items-center">
                          <Star className="text-amber-500 w-4 h-4 mr-1" fill="currentColor" />
                          <span className="text-gray-600 text-sm">
                            {service.rating}
                          </span>
                        </div>
                      </div>

                      <p className="text-gray-600 mb-4">{service.description}</p>
                      
                      <div className="flex items-center mb-4 text-gray-600">
                        <Clock className="w-4 h-4 mr-2" />
                        <span>{service.duration} minutes</span>
                      </div>

                      <div className="flex items-center justify-between mt-4">
                        <span className="text-2xl font-bold text-amber-600">
                          ${service.price}
                        </span>
                        <span className="px-4 py-2 bg-amber-100 text-amber-800 rounded-lg text-sm font-medium">
                          {selectedService === service.id ? 'Selected' : 'Select'}
                        </span>
                      </div>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {selectedService && (
            <>
              {/* Date Selection */}
              <div className="mb-12">
                <h2 className="text-2xl font-semibold mb-6 flex items-center">
                  <Calendar className="mr-3 text-amber-600" />
                  Choose a Date
                </h2>
                <div className="flex gap-2 overflow-x-auto pb-2">
                  {[...Array(7)].map((_, i) => {
                    const date = new Date();
                    date.setDate(date.getDate() + i);
                    const dateString = date.toISOString().split('T')[0];
                    return (
                      <button
                        key={dateString}
                        onClick={() => handleDateSelect(dateString)}
                        className={`p-4 rounded-lg border-2 min-w-[100px] text-center transition-all duration-300 ${
                          selectedDate === dateString 
                            ? 'border-amber-600 bg-amber-50 shadow-md' 
                            : 'border-gray-200 hover:border-amber-300'
                        }`}
                      >
                        <div>{date.toLocaleDateString('en-US', { weekday: 'short' })}</div>
                        <div className="font-bold">{date.getDate()}</div>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Time Selection */}
              {selectedDate && (
                <div className="mb-12">
                  <h2 className="text-2xl font-semibold mb-6 flex items-center">
                    <Clock className="mr-3 text-amber-600" />
                    Select a Time
                  </h2>
                  <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2">
                    {TIME_SLOTS.map((time) => (
                      <button
                        key={time}
                        onClick={() => handleTimeSelect(time)}
                        className={`p-2 rounded-lg border-2 text-center transition-all duration-300 ${
                          selectedTime === time 
                            ? 'border-amber-600 bg-amber-50 shadow-md' 
                            : 'border-gray-200 hover:border-amber-300'
                        }`}
                      >
                        {time}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Customer Information */}
              {selectedTime && (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <h2 className="text-2xl font-semibold mb-6 flex items-center">
                    <UserCircle className="mr-3 text-amber-600" />
                    Your Details
                  </h2>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block mb-2">Full Name</label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={customerInfo.name}
                        onChange={handleInfoChange}
                        className="w-full p-3 border rounded-lg"
                        placeholder="Enter your full name"
                      />
                    </div>
                    <div>
                      <label className="block mb-2">Phone Number</label>
                      <input
                        type="tel"
                        name="phone"
                        required
                        value={customerInfo.phone}
                        onChange={handleInfoChange}
                        className="w-full p-3 border rounded-lg"
                        placeholder="Enter your phone number"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block mb-2">Email Address</label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={customerInfo.email}
                      onChange={handleInfoChange}
                      className="w-full p-3 border rounded-lg"
                      placeholder="Enter your email address"
                    />
                  </div>

                  {/* Booking Summary */}
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="text-xl font-semibold mb-4">Booking Summary</h3>
                    <div className="space-y-2">
                      <p><strong>Service:</strong> {getSelectedService()?.name}</p>
                      <p><strong>Duration:</strong> {getSelectedService()?.duration} minutes</p>
                      <p><strong>Date:</strong> {new Date(selectedDate!).toLocaleDateString()}</p>
                      <p><strong>Time:</strong> {selectedTime}</p>
                      <p className="text-xl font-bold text-amber-600 mt-4">
                        Total: ${getSelectedService()?.price}
                      </p>
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-amber-500 text-white py-4 rounded-full text-lg font-semibold hover:bg-amber-600 transition"
                  >
                    Confirm Booking
                  </button>
                </form>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default BookingPage;