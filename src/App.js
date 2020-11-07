import React, { useState, useEffect } from 'react';
import Loading from './Loading';
import Tours from './Tours';
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-tours-project';

function App() {
  // Set up states
  const [loading, setLoading] = useState(true);
  const [tours, setTours] = useState([]);

  // Fetch tour data
  const fetchTours = async () => {
    setLoading(true);
    try {
      const response = await fetch(url);
      const tours = await response.json();
      // confirm we're getting that data
      console.log(tours);
      // update our state variables
      setLoading(false);
      setTours(tours);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  // use useEffect() to trigger the fetch once on the page load
  useEffect(
    () => {
      // invoke the fetch function
      fetchTours();
    },
    // once
    []
  );

  // Apply conditional rendering to use a spinner while the data is fetched
  if (loading) {
    return (
      <main>
        <Loading />
      </main>
    );
  }
  return (
    <main>
      <Tours tours={tours} />
    </main>
  );
}

export default App;
