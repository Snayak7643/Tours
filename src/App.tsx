import React, { useState, useEffect } from "react";
import Card from "./Components/Card";
import Loading from "./Components/Loading";
import Refresh from "./Refresh";
import { Tour } from "./Components/Type";

function App() {
  const url = "https://course-api.com/react-tours-project";

  /* States */
  const [tours, setTours] = useState<Tour[]>([]);
  const [isLoading, setLoading] = useState<boolean>();
  const [error, setError] = useState<boolean>(false);

  /* Fetching Function */
  const fetchingTours = async () => {
    setLoading(true);
    const response = await fetch(url);
    const res = await response.json();
    setTours(res);
    setLoading(false);
  };

  /* Function For Not Interested(Removing Tour) */
  const deleteTour = (id: string) => {
    const newTours = tours.filter((tour) => {
      return id !== tour.id;
    });
    setTours(newTours);
  };

  /*  */
  useEffect(() => {
    try {
      fetchingTours();
    } catch (err) {
      setError(true);
    }
  }, []);

  /* Condition for error */
  if (error) {
    return <h1 className="loading">Error</h1>;
  }

  /* Condintion for Loading... */
  if (isLoading) {
    return <Loading />;
  }

  /* Condintion for Refresh */
  if (tours.length === 0) {
    return <Refresh fetchingTours={fetchingTours} />;
  }

  /* The UI of the tours to be shown as */
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

export default App;
