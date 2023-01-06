import React from "react";

type PropType = {
  tour: {
    id: string;
    image: string;
    info: string;
    name: string;
    price: string;
  };
  deleteTour: (id: string) => void;
};

const Card: React.FunctionComponent<PropType> = ({ tour, deleteTour }) => {
  return (
    <article className="single-tour">
      <img src={tour.image} alt="tour" />
      <footer>
        <div className="tour-info">
          <h4>{tour.name}</h4>
          <h4 className="tour-price">{tour.price}</h4>
        </div>
        <p className="tour-info">{tour.info}</p>
        <button
          className="delete-btn"
          onClick={() => {
            deleteTour(tour.id);
          }}
        >
          Not Interested
        </button>
      </footer>
    </article>
  );
};

export default Card;
