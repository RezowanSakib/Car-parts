import React from "react";
import myimage from "../../Sakib pic (1).jpg";

const PortPolio = () => {
  return (
    <div>
      <div className=" card lg:card-top bg-base-100 shadow-xl">
        <figure>
          <img src={myimage} alt="Album" className="" />
        </figure>
        <div className="card-body mx-auto">
          <h2 className="card-title">Name: Sakib Md Rezowan</h2>
          <h2 className="card-title">Email: sakibmdrezowan@gmail.com</h2>
          <h2 className="card-title">Phone: 01706446987</h2>
          <h2 className="card-title">Education:</h2>
          <div className="overflow-x-auto">
            <table className="table table-zebra lg:w-full">
              <thead>
                <tr>
                  <th></th>
                  <th>Exam</th>
                  <th>Board</th>
                  <th>Gpa</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th>1</th>
                  <td>JSC </td>
                  <td>Cumilla </td>
                  <td>5</td>
                </tr>

                <tr>
                  <th>2</th>
                  <td>SSC</td>
                  <td>Cumilla </td>
                  <td>4.83</td>
                </tr>

                <tr>
                  <th>3</th>
                  <td>HSC </td>
                  <td>Cumilla </td>
                  <td>5</td>
                </tr>
              </tbody>
            </table>
          </div>
          <h2 className="card-title">My skills:</h2>
          <ul className="list-disc text-justify mx-20">
            <li>html</li>
            <li>css</li>
            <li>javascript</li>
            <li>react</li>
            <li>firebase</li>
            <li>nodejs</li>
            <li>expess</li>
          </ul>
          <h2 className="card-title">My projects:</h2>
          <ul className="list-disc text-justify mx-20">
            <li><a href="https://bookcoverreviews.netlify.app">Book review site</a></li>
            <li><a href="https://shwapnonirman.netlify.app">Construction site</a></li>
            <li><a href="https://mathherodemo.netlify.app">Math hero</a></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PortPolio;
