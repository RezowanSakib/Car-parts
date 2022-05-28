import React, { useEffect, useRef, useState } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import { useForm } from "react-hook-form";
const Purchase = () => {
  const { partID } = useParams();
  const [product, setProduct] = useState({});
  const { picture, balance, Name, minimum } = product;

  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();
  const handlePurching = (event) => {
    event.preventDefault();
    const productName = Name;
    const email = user.email;
    const address = event.target.address.value;
    const quantity = event.target.quantity.value;
    const order = { productName, email, address, quantity };
    const url = `https://pacific-anchorage-45522.herokuapp.com/order`;
    
    fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(order),
    })
      .then((res) => res.json())
      .then((result) => {
        if ("acknowledged") {
          window.alert("data added");
          navigate(`/`)
        }
      });
  };
  useEffect(() => {
    const url = `https://pacific-anchorage-45522.herokuapp.com/product/${partID}`;

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
              <form onSubmit={handlePurching}>
                <label className="label">
                  <span className="label-text">Customer Name</span>
                </label>
                <input
                  disabled
                  value={user?.displayName || ""}
                  className="input input-bordered w-full max-w-xs"
                />
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  disabled
                  placeholder="Your Email"
                  value={user?.email || ""}
                  className="input input-bordered w-full max-w-xs"
                />
                <label className="label">
                  <span className="label-text">Phone</span>
                </label>
                <input
                  type="text"
                  name="phone"
                  placeholder="Phone"
                  className="input input-bordered w-full max-w-xs"
                />{" "}
                <label className="label">
                  <span className="label-text">Quantity</span>
                </label>
                <input
                  type="text"
                  // value={minimumQuantity}
                  min={minimum}
                  max={product.available}
                  name="quantity"
                  placeholder="Quantity"
                  className="input input-bordered w-full max-w-xs"
                />
                <label className="label">
                  <span className="label-text">Address</span>
                </label>
                <input
                  type="text"
                  name="address"
                  placeholder="Address"
                  className="input input-bordered w-full max-w-xs"
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
              {/* practice */}
              <img src={product.picture} alt="Shoes" className="rounded-xl" />
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
