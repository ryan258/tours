import React, { useState } from 'react';

// grab all the info being passed down from Tours
const Tour = ({ id, image, info, price, name }) => {
  // create a state variable to toggle the read more
  const [readMore, setReadMore] = useState(false);
  // enhance the data that is being mapped into each component
  return (
    <article className="single-tour">
      <img src={image} alt={name} />
      <footer>
        <div className="tour-info">
          <h4>{name}</h4>
          <h4 className="tour-price">${price}</h4>
        </div>
        {/* use conditional rendering to toggle between read more states */}
        <p>
          {readMore ? info : `${info.substring(0, 200)}...`}
          <button onClick={() => setReadMore(!readMore)}>
            {readMore ? `read less` : `read more`}
          </button>
        </p>
        <button className="delete-btn">not interested</button>
      </footer>
    </article>
  );
};

export default Tour;
