import React from 'react';
import Testimonial from './testimonial'; // Import the Testimonial component

function Testimonials() {
  // Sample testimonial data
  const testimonials = [
    { name: "John Doe", text: "Great product, excellent service!" },
    { name: "Jane Smith", text: "Couldn't be happier with my purchase!" },
    { name: "Alex Johnson", text: "Amazing experience, highly recommended!" },
    { name: "Emily Brown", text: "Fantastic product quality and fast delivery!" }
  ];

  return (
    <div className="relative bg-white container mx-auto px-10">
      {/* bg-pattern-desktop */}
      <img
        src={require("./images/bg-pattern-top-desktop.svg")}
        alt="desktop-top"
        className="hidden lg:block absolute top-0 left-0"
      />
      <img
        src={require("./images/bg-pattern-bottom-desktop.svg")}
        alt="desktop-bottom"
        className="hidden lg:block absolute bottom-0 right-0"
      />

      {/* bg-pattern-mobile */}
      <img
        src={require("./images/bg-pattern-top-mobile.svg")}
        alt="mobile-top"
        className="absolute lg:hidden top-0"
      />
      <img
        src={require("./images/bg-pattern-bottom-mobile.svg")}
        alt="mobile-bottom"
        className="absolute lg:hidden bottom-0"
      />

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-5 py-16 lg:py-24">
        <div className="text-center lg:text-left lg:col-span-2">
          <h1 className="mb-4 text-3xl md:text-5xl lg:text-6xl text-pink-900 font-bold leading-none">
            10,000+ of our users love our products.
          </h1>
          <p className="text-pink-700 leading-relaxed">
            We only provide great products combined with excellent customer
            service. See what our satisfied customers are saying about our
            services.
          </p>
        </div>
        <div className="lg:col-span-2 space-y-3">
          {/* Render testimonial cards */}
          {testimonials.map((testimonial, index) => (
            <Testimonial key={index} name={testimonial.name} text={testimonial.text} />
          ))}
        </div>
      </div>
      <div className="mb-16">
        <div className="lg:flex space-y-3 lg:space-y-0 lg:space-x-4">
          {/* Render individual testimonials */}
          {testimonials.map((testimonial, index) => (
            <Testimonial key={index} name={testimonial.name} text={testimonial.text} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
