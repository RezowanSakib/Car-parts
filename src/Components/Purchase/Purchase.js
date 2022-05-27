import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import { useForm } from "react-hook-form";
const Purchase = () => {
  const { partID } = useParams();
  const [product, setProduct] = useState({});
  const { picture, balance } = product;
  const [user, loading, error] = useAuthState(auth);
  const handlePurcing = (event) => {
    event.preventDefault();
  };
  useEffect(() => {
    const url = `http://localhost:5000/product/${partID}`;

    fetch(url)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, []);

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const onSubmit = (data) =>{
    const url = `http://localhost:5000/order`;
    fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
      });
  }

  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div className="card-body">
              <form onSubmit={handleSubmit(onSubmit)}>
                <label className="label">
                  <span className="label-text">Customer Name</span>
                </label>
                <input
                  value={user?.displayName || ""}
                  className="input input-bordered w-full max-w-xs"
                  {...register("name", { required: true, maxLength: 20 })}
                />
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="Your Email"
                  value={user?.email || ""}
                  className="input input-bordered w-full max-w-xs"
                  {...register("email", {
                    required: {
                      value: true,
                      message: "Email is Required",
                    },
                    pattern: {
                      value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                      message: "Provide a valid Email",
                    },
                  })}
                />
                <label className="label">
                  <span className="label-text">Phone</span>
                </label>
                <input
                  type="text"
                  placeholder="Phone"
                  className="input input-bordered w-full max-w-xs"
                  {...register("phone", {
                    required: {
                      value: true,
                      message: "Phone number is Required",
                    },
                    minLength: {
                      value: 11,
                      message: "enter a valid phone number",
                    },
                  })}
                />{" "}
                <label className="label">
                  <span className="label-text">Quantity</span>
                </label>
                <input
                  type="text"
                  placeholder="Quantity"
                  value={product.minimum}
                  className="input input-bordered w-full max-w-xs"
                  {...register("quantity", { min: 18, max: 99 })}
                  
                />
                <label className="label">
                  <span className="label-text">Address</span>
                </label>
                <input
                  type="text"
                  placeholder="Address"
                  className="input input-bordered w-full max-w-xs"
                  {...register("address", { pattern: /^[A-Za-z]+$/i })}
                />
                <input
                  className="btn btn-secondary w-full max-w-xs"
                  type="submit"
                />
              </form>
            </div>
          </div>
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Purchase now!</h1>
            <figure className="px-10 pt-10">
              <img
                src="https://api.lorem.space/image/movie?w=260&h=400"
                alt="Shoes"
                className="rounded-xl"
              />
            </figure>
            <h1 className="text-3xl font-bold">{product.Name}</h1>
            <p className="py-6">{product.about}</p>
            <h3>Available :{product.available}</h3>
            <p className="py-6">Price :{balance}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Purchase;
