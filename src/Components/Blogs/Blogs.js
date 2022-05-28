import React from "react";

const Blogs = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
      <div className="card lg:max-w-lg bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title">
            How will you improve the performance of a React Application?
          </h2>
          <ul>
            <li>Keeping component state local where necessary</li>
            <li>
              Memoizing React components to prevent unnecessary re-renders
            </li>
            <li>Code-splitting in React using dynamic import()</li>
            <li>Windowing or list virtualization in React</li>
          </ul>
        </div>
      </div>
      <div className="card lg:max-w-lg bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title">
            What are the different ways to manage a state in a React
            application?
          </h2>
          <ul>
            <li>Local state.</li>
            <li>Global state.</li>
            <li>Server state.</li>
            <li>URL state.</li>
          </ul>
        </div>
      </div>
      <div className="card lg:max-w-lg bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title">
            How does prototypical inheritance work?
          </h2>
          <p>
            The Prototypal Inheritance is a feature in javascript used to add
            methods and properties in objects. It is a method by which an object
            can inherit the properties and methods of another object.
            Traditionally, in order to get and set the [[Prototype]] of an
            object, we use Object.getPrototypeOf and Object
          </p>
        </div>
      </div>
      <div className="card lg:max-w-lg bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title">
            What is a unit test? Why should write unit tests?
          </h2>
          <p>UNIT TESTING is a type of software testing where individual units or components of a software are tested. </p>
          <p>Unit testing allows software developers to actually think through the design of the software and what has to be done before they write the code.</p>
        </div>
      </div>
      <div className="card lg:max-w-lg bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title">
            {" "}
            Why you do not set the state directly in React. For example, if you have const [products, setProducts] = useState([]). Why you do not set products = [...] instead, you use the setProducts
          </h2>
          <p>One should never update the state directly because of the following reasons: If you update it directly, calling the setState() afterward may just replace the update you made.</p>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
