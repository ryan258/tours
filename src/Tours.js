import React from 'react';
import Tour from './Tour';

// take tours fetch data array passed in from App
const Tours = ({ tours }) => {
  return (
    <section>
      <div className="title">
        <h2>our tours</h2>
        <div className="underline"></div>
      </div>
      <div>
        {/* Map over each item of the tours array */}
        {tours.map((tour) => (
          // Pass all the properties in each tour item down to the Tour component with the spread operator
          <Tour key={tour.id} {...tour} />
        ))}
      </div>
    </section>
  );
};

export default Tours;
