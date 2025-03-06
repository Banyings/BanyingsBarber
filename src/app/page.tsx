import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const services = [
  {
    name: "Classic Haircut",
    price: "$35",
    description: "Timeless style for the modern gentleman",
    videoSrc: "./ScreenRecording.mp4",
    image: "./services/classic-haircut.jpg"
  },
  {
    name: "Beard Trim",
    price: "$25",
    description: "Precision grooming for your facial hair",
    videoSrc: "./ScreenRecording.mp4",
    image: "./services/beard-trim.jpg"
  },
  {
    name: "Hot Towel Shave",
    price: "$45",
    description: "Luxurious traditional shaving experience",
    videoSrc: "./ScreenRecording.mp4",
    image: "./services/hot-towel.jpg"
  },
  {
    name: "Haircut & Beard Trim",
    price: "$55",
    description: "Luxurious traditional shaving experience",
    videoSrc: "./ScreenRecording.mp4",
    image: "./image.png"
  }

];

const testimonials = [
  {
    name: "John Doe",
    comment: "Best haircut I've ever had! The attention to detail is amazing.",
    rating: 5
  },
  {
    name: "Mike Smith",
    comment: "Great atmosphere and professional service. Highly recommended!",
    rating: 5
  },
  {
    name: "David Wilson",
    comment: "The hot towel shave was an incredible experience. Will be back!",
    rating: 5
  }
];

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <header
        className="relative h-[600px] bg-cover bg-center"
        style={{
          backgroundImage: 'url("./image.png")'
        }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative container mx-auto h-full flex flex-col justify-center items-center text-center text-white">
          <h1 className="text-5xl font-bold mb-4">
            Precision Cuts, Classic Style
          </h1>
          <p className="text-xl mb-8">
            Where tradition meets modern grooming
          </p>
          <Link
            href="/components/booking"
            className="bg-amber-500 text-black px-8 py-3 rounded-full text-lg font-semibold hover:bg-amber-600 transition"
          >
            Book Now
          </Link>
        </div>
      </header>

      {/* Services Section */}
      <section id="services" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center">Our Services</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div 
                key={index} 
                className="bg-gray-100 p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
              >
                <div className="aspect-video mb-4 rounded-lg overflow-hidden">
                  <video
                    className="w-full h-full object-cover"
                    autoPlay
                    muted
                    loop
                    playsInline
                  >
                    <source src={service.videoSrc} type="video/mp4" />
                    <Image
                      src={service.image}
                      alt={service.name}
                      width={400}
                      height={225}
                      className="w-full h-full object-cover"
                    />
                  </video>
                </div>
                <h3 className="text-2xl font-semibold mb-4">{service.name}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <div className="text-3xl font-bold text-amber-600">{service.price}</div>
                <Link
                  href="/components/booking"
                  className="mt-4 inline-block bg-amber-500 text-black px-6 py-2 rounded-full text-sm font-semibold hover:bg-amber-600 transition"
                >
                  Book Now
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center">What Our Clients Say</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-5 h-5 text-amber-500 fill-current"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-600 mb-4">{testimonial.comment}</p>
                <p className="font-semibold">{testimonial.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-8">Ready for a Fresh Look?</h2>
          <p className="text-xl mb-8">Book your appointment today and experience the difference</p>
          <Link
            href="/components/booking"
            className="bg-amber-500 text-black px-8 py-3 rounded-full text-lg font-semibold hover:bg-amber-600 transition inline-block"
          >
            Book Now
          </Link>
        </div>
      </section>
    </div>
  );
}