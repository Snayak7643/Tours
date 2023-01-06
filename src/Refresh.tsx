import React from "react";

type PropType = {
  fetchingTours: () => void;
};

const Refresh: React.FunctionComponent<PropType> = ({ fetchingTours }) => {
  return (
    <main className="loading">
      <h3>No Tours</h3>
      <button className="btn" onClick={fetchingTours}>
        Refresh
      </button>
    </main>
  );
};

export default Refresh;
