import React from 'react';
import Tour from './Tour';

// take tours fetch data array passed in from App
// pass removeTour method so it can be passed down to Tour component.
const Tours = ({ tours, removeTour }) => {
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
          // pass down the removeTour method as a prop
          <Tour key={tour.id} {...tour} removeTour={removeTour} />
        ))}
      </div>
    </section>
  );
};

export default Tours;
