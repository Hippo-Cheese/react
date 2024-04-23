import React from 'react';

const Testimonial = ({ image, name, role, text }) => (
  <div className="py-10 px-8 space-y-3 border bg-pink-900 text-white rounded-lg shadow">
    <div className="flex space-x-5">
      <img src={image} alt={name} className="rounded-full w-12" />
      <div>
        <p className="text-sm font-bold">{name}</p>
        <p className="text-sm text-pink-700 hover:text-pink-500">{role}</p>
      </div>
    </div>
    <p className="text-base text-gray-200">{text}</p>
  </div>
);

const Stars = () => (
  <div className="flex space-x-2">
    {[...Array(5)].map((_, index) => (
      <img key={index} src="./images/icon-star.svg" alt="star" />
    ))}
  </div>
);

const Rating = ({ text }) => (
  <div className="lg:w-3/4 p-5 space-y-3 lg:space-y-0 space-x-0 lg:space-x-10 flex flex-col lg:flex-row justify-center items-center border-none bg-purple-100 rounded">
    <Stars />
    <p className="text-xs lg:text-sm text-pink-900 font-bold">{text}</p>
  </div>
);

const Testimonials = () => (
  <div className="mb-16 lg:flex lg:justify-center">
    <div className="lg:flex space-y-3 lg:space-y-0 lg:space-x-4">
      <Testimonial
        image="./images/image-colton.jpg"
        name="Colton Smith"
        role="Verified Buyer"
        text="We needed the same printed design as the one we had ordered a week prior. Not only did they find the original order, but we also received it in time. Excellent!"
      />
      <Testimonial
        image="./images/image-irene.jpg"
        name="Irene Roberts"
        role="Verified Buyer"
        text="Customer service is always excellent and very quick turn around. Completely delighted with the simplicity of the purchase and the speed of delivery."
      />
      <Testimonial
        image="./images/image-anne.jpg"
        name="Anne Wallace"
        role="Verified Buyer"
        text="Put an order with this company and can only praise them for the very high standard. Will definitely use them again and recommend them to everyone!"
      />
    </div>
  </div>
);

const ReactComponent = () => (
  <div className="relative bg-white container mx-auto px-10 lg:px-20">
    {/* Background images */}
    {/* Rest of your components */}
    {/* Testimonials */}
    <Testimonials />
    {/* Footer */}
    <div className="bg-black text-white p-5">
      <div className="container mx-auto flex justify-center"></div>
    </div>
  </div>
);

export default ReactComponent;
