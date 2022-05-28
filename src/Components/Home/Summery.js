import React from "react";

const Summery = () => {
  return (
    <div>
      <div className="stats stats-vertical lg:stats-horizontal shadow">
        <div className="stat">
          <div className="stat-title">Customer<i class="fa-solid fa-people-group"></i></div>
          <div className="stat-value">31M+</div>
          <div className="stat-desc">Jan 1st - Feb 1st</div>
        </div>

        <div className="stat">
          <div className="stat-title">Annual Revenew<i class="fa-solid fa-sack-dollar"></i></div>
          <div className="stat-value">500M</div>
          <div className="stat-desc">↗︎ 400 (22%)</div>
        </div>
        <div className="stat">
          <div className="stat-title">Reviws<i class="fa-solid fa-star-sharp"></i></div>
          <div className="stat-value">5M</div>
          <div className="stat-desc">↗︎ 400 (22%)</div>
        </div>

        <div className="stat">
          <div className="stat-title">Tools<i class="fa-solid fa-screwdriver-wrench"></i></div>
          <div className="stat-value">100+</div>
          <div className="stat-desc">↘︎ 90 (14%)</div>
        </div>
      </div>
    </div>
  );
};

export default Summery;
