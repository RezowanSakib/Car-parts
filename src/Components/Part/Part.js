import React from "react";

const Part = ({ part, setSelectedPart }) => {
  return (
    <div className="card lg:max-w-lg bg-base-100 shadow-xl">
      <figure className="px-10 pt-10">
        <img src={part.picture} alt="Shoes" className="rounded-xl" />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">Shoes!</h2>
        <h5>Minimum: {part.minimum}</h5>
        <p>{part.about}</p>
        <div className="card-actions">
          <label
            htmlFor="booking-modal"
            onClick={() => setSelectedPart(part)}
            className="btn btn-primary"
          >
            Purcess Now
          </label>
        </div>
      </div>
    </div>
  );
};

export default Part;
