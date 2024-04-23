import React from 'react';

function Testimonial({ name, text }) {
  return (
    <div className="bg-gray-100 p-4 rounded-lg">
      <p className="text-gray-800 font-semibold">{name}</p>
      <p className="text-gray-600">{text}</p>
    </div>
  );
}

export default Testimonial;
