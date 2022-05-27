import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

const Purchase = () => {
  const { partID } = useParams();
  const [product, setProduct] = useState({});
  const {picture,balance}=product
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
  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Customer Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  disabled
                  value={user?.displayName || ""}
                  className="input input-bordered w-full max-w-xs"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  disabled
                  value={user?.email || ""}
                  className="input input-bordered w-full max-w-xs"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Phone</span>
                </label>
                <input
          type="text"
          name="phone"
          placeholder="Phone Number"
          className="input input-bordered w-full max-w-xs"
        />
              
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Quantity</span>
                </label>
                <input
          type="text"
          name="quantity"
          placeholder="Quantity"
          value={product.minimum}
          className="input input-bordered w-full max-w-xs"
        />
              
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Address</span>
                </label>
                <input
          type="text"
          name="address"
          placeholder="Address"
          className="input input-bordered w-full max-w-xs"
        />
              
              </div>
              <input
          type="submit"
          value="Submit"
          className="btn btn-secondary w-full max-w-xs"
        />
            </div>
          </div>
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Purchase now!</h1>
           
            <figure className="px-10 pt-10">
        <img src="https://api.lorem.space/image/movie?w=260&h=400" alt="Shoes" className="rounded-xl" />
      </figure> <h1 className="text-3xl font-bold">{product.Name}</h1>
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
