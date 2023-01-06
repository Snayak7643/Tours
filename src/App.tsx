import React, { useState, useEffect } from "react";
import Card from "./Components/Card";

type Tour = {
  id: string;
  image: string;
  info: string;
  name: string;
  price: string;
};

function App() {
  const url = "https://course-api.com/react-tours-project";

  const [tours, setTours] = useState<Tour[]>([]);
  const [isLoading, setLoading] = useState<boolean>();

  const fetching = async () => {
    setLoading(true);
    const response = await fetch(url);
    const res = await response.json();
    setTours(res);
    setLoading(false);
  };

  const deleteTour = (id: string) => {
    const newTours = tours.filter((tour) => {
      return id !== tour.id;
    });
    setTours(newTours);
  };

  useEffect(() => {
    fetching();
  }, []);

  if (isLoading) {
    return (
      <main className="loading">
        <h1>Loading...</h1>
      </main>
    );
  }

  if (tours.length === 0) {
    return (
      <main className="loading">
        <h3>No Tours</h3>
        <button className="btn" onClick={fetching}>
          Refresh
        </button>
      </main>
    );
  } else {
    return (
      <main>
        <div className="title">
          <h2>Tours</h2>
          <div className="underline"></div>
        </div>
        <section>
          {tours.map((tour, i) => {
            return <Card key={i} tour={tour} deleteTour={deleteTour} />;
          })}
        </section>
      </main>
    );
  }
}

export default App;
