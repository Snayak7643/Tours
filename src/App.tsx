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

  return <h1>Tours</h1>;
}

export default App;
