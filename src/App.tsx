import React, { useState, useEffect } from "react";

function App() {
  const url = "https://course-api.com/react-tours-project";

  const [tours, setTours] = useState<object[]>([]);

  const fetching = async () => {
    const response = await fetch(url);
    const res = await response.json();
    setTours(res);
    console.log(res);
  };

  useEffect(() => {
    fetching();
  }, []);

  if (tours.length === 0) {
    return (
      <main>
        <h1 className="loading">Loading...</h1>
      </main>
    );
  } else {
    return (
      <main>
        <div className="title">
          <h2>Tours</h2>
          <div className="underline"></div>
        </div>
      </main>
    );
  }
}

export default App;
