import React, { useState } from 'react';

// grab all the info being passed down from Tours
const Tour = ({ id, image, info, price, name }) => {
  // enhance the data that is being mapped into each component
  return (
    <article className="single-tour">
      <img src={image} alt={name} />
      <footer>
        <div className="tour-info">
          <h4>{name}</h4>
          <h4 className="tour-price">${price}</h4>
        </div>
        <p>{info}</p>
        <button className="delete-btn">not interested</button>
      </footer>
    </article>
  );
};

export default Tour;
