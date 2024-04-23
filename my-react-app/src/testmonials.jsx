import React from 'react';

const testimonials = [
  {
    name: 'Colton Smith',
    verified: true,
    text: 'We needed the same printed design as the one we had ordered a week prior. Not only did they find the original order, but we also received it in time. Excellent!',
    ratings: [
      { source: 'Reviews', stars: 5 },
      { source: 'Report Guru', stars: 5 },
      { source: 'BestTech', stars: 5 }
    ]
  },
  {
    name: 'Anne Wallace',
    verified: true,
    text: 'Put an order with this company and can only praise them for the very high standard. Will definitely use them again and recommend them to everyone!',
    ratings: []
  },
  {
    name: 'Irene Roberts',
    verified: true,
    text: 'Customer service is always excellent and very quick turn around. Completely delighted with the simplicity of the purchase and the speed of delivery.',
    ratings: []
  }
];

function StarRating({ stars }) {
  const starIcons = [];
  for (let i = 0; i < 5; i++) {
    starIcons.push(
      <span key={i} className={i < stars ? 'star filled' : 'star'}>&#9733;</span>
    );
  }
  return <div>{starIcons}</div>;
}

function Testimonial({ name, verified, text, ratings }) {
  return (
    <div className="testimonial">
      <p>{text}</p>
      <p>{name} {verified && 'Verified Buyer'}</p>
      {ratings.map((rating, index) => (
        <div key={index}>
          <StarRating stars={rating.stars} />
          <p>Rated {rating.stars} Stars in {rating.source}</p>
        </div>
      ))}
    </div>
  );
}

function TestimonialsPage() {
  return (
    <div>
      <h1>Customer Testimonials</h1>
      {testimonials.map((testimonial, index) => (
        <Testimonial key={index} {...testimonial} />
      ))}
    </div>
  );
}

export default TestimonialsPage;
