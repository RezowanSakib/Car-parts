import React from "react";
import { useNavigate } from "react-router-dom";

const Part = ({ part, setSelectedPart }) => {
  const navigate = useNavigate();
  const navigateToPurchase = (id) => {
    navigate(`/product/${id}`);
  };
  return (
    <div className="card lg:max-w-lg bg-base-100 shadow-xl">
      <figure className="px-10 pt-10">
        <img src={part.picture} alt="Shoes" className="rounded-xl" />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{part.Name}</h2>
        <h3 className="text-bold">Available {part.available}</h3>
        <h5>Minimum: {part.minimum}</h5>
        <h3>Price : {part.balance}</h3>
        <p>{part.about}</p>
        <div className="card-actions">
        {/* {() => setSelectedPart(part)} */}
          <label
            htmlFor="booking-modal"
            onClick={() => {
              navigateToPurchase(part._id);
            }}
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
