import React from "react";
import useReviews from "../../Hooks/useRevews";
import Review from "./Review";

const Reviews = () => {
  const { reviews, setReviews } = useReviews();
  return (
    <>
   <h2 className="text-3xl my-5 font-bold">Customer Reviews</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 ">
        {reviews.map((review) => (
          <Review key={review._id} review={review}></Review>
        ))}
      </div>
    </>
  );
};

export default Reviews;
