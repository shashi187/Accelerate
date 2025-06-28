import React from "react";

const Stats = () => {
  return (
    <div className="bg-gray-200 p-3 rounded-t-4xl md:mx-2">
      <div className="bg-white px-4 md:px-2 rounded-4xl relative md:-top-24 -top-16 py-8 grid grid-cols-2 sm:grid-cols-2 md:w-[90%] md:mx-auto md:grid-cols-4 gap-10 md:gap-2 gap-y-4 text-center">
          <div className="stat">
            <h3 className="text-3xl md:text-6xl font-bold text-blue-600">200+</h3>
            <p className="text-gray-700 md:text-2xl">Projects Completed</p>
          </div>
          <div className="stat">
            <h3 className="text-3xl md:text-6xl font-bold text-blue-600">98%</h3>
            <p className="text-gray-700 md:text-2xl">Client Satisfaction</p>
          </div>
          <div className="stat">
            <h3 className="text-3xl md:text-6xl font-bold text-blue-600">95%</h3>
            <p className="text-gray-700 md:text-2xl">Client Success Rate</p>
          </div>
          <div className="stat">
            <h3 className="text-3xl md:text-6xl font-bold text-blue-600">24/7</h3>
            <p className="text-gray-700 md:text-2xl">Support Availability</p>
          </div>
      </div>
    </div>
  );
};

export default Stats;
