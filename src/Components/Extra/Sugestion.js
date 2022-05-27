import React from "react";

const Sugestion = () => {
  return (
    <div>
      <div class="hero min-h-screen bg-base-200">
        <div class="hero-content flex-col lg:flex-row-reverse">
          <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <h1 class="text-2xl font-bold p-5">You need Something New?</h1>
            <h1 class="text-xl font-bold">
              Please fill up the form to let us know what you want
            </h1>
            <div class="card-body">
              <div class="form-control">
                <label class="label">
                  <span class="label-text">Your Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Enter your name"
                  class="input input-bordered"
                />
              </div>
              <div class="form-control">
                <label class="label">
                  <span class="label-text">Your Email</span>
                </label>
                <input
                  type="email"
                  placeholder="Enter your Email"
                  class="input input-bordered"
                />
              </div>
              <div class="form-control">
                <label class="label">
                  <span class="label-text">Parts name</span>
                </label>
                <input
                  type="text"
                  placeholder="Enter your required parts"
                  class="input input-bordered"
                />
              </div>
              <div class="form-control">
                <label class="label">
                  <span class="label-text">Quantity You need</span>
                </label>
                <input
                  type="text"
                  placeholder="Quantity"
                  class="input input-bordered"
                />
              </div>
              <div class="form-control mt-6">
                <button class="btn btn-primary">Submit</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sugestion;
