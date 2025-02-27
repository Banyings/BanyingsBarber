'use client';

import React from 'react';
import { Scissors, Clock, Star, Check } from 'lucide-react';
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
    id: 'combo',
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

const ServicesPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Our Services
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Experience premium grooming services tailored to your style. Each service includes a
            consultation to ensure we achieve your desired look.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {SERVICES.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition duration-300"
            >
              <div className="relative h-64">
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
                    <Scissors className="text-amber-500 w-6 h-6 mr-3" />
                    <h2 className="text-2xl font-bold text-gray-800">{service.name}</h2>
                  </div>
                  <div className="flex items-center">
                    <Star className="text-amber-500 w-5 h-5 mr-1" fill="currentColor" />
                    <span className="text-gray-600 text-sm">
                      {service.rating} ({service.reviewCount} reviews)
                    </span>
                  </div>
                </div>

                <p className="text-gray-600 mb-4">{service.description}</p>
                
                <div className="flex items-center mb-4 text-gray-600">
                  <Clock className="w-5 h-5 mr-2" />
                  <span>{service.duration} minutes</span>
                </div>

                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">Includes:</h3>
                  <ul className="space-y-2">
                    {service.features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <Check className="w-5 h-5 text-amber-500 mr-2 mt-0.5" />
                        <span className="text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <p className="text-gray-600 italic mb-6">{service.benefits}</p>

                <div className="flex items-center">
                  <span className="text-2xl font-bold text-amber-600">
                    ${service.price}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Single Book an Appointment button */}
        <div className="text-center mt-16">
          <button 
            onClick={() => window.location.href = '/components/booking'}
            className="bg-amber-500 text-black px-8 py-3 rounded-full text-lg font-semibold hover:bg-amber-600 transition inline-block"
          >
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;