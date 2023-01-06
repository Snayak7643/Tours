import React from "react";

type PropType = {
  fetching: () => void;
};

const Refresh: React.FunctionComponent<PropType> = ({ fetching }) => {
  return (
    <main className="loading">
      <h3>No Tours</h3>
      <button className="btn" onClick={fetching}>
        Refresh
      </button>
    </main>
  );
};

export default Refresh;
