import React from "react";

const Stats = () => {
  return (
    <div className="bg-gray-200 p-3">
      <div className="bg-white px-4 rounded-4xl -mt-16 py-8 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-10 gap-y-4 text-center">
          <div className="stat">
            <h3 className="text-3xl font-bold text-blue-600">200+</h3>
            <p className="text-gray-700">Projects Completed</p>
          </div>
          <div className="stat">
            <h3 className="text-3xl font-bold text-blue-600">98%</h3>
            <p className="text-gray-700">Client Satisfaction</p>
          </div>
          <div className="stat">
            <h3 className="text-3xl font-bold text-blue-600">95%</h3>
            <p className="text-gray-700">Client Success Rate</p>
          </div>
          <div className="stat">
            <h3 className="text-3xl font-bold text-blue-600">24/7</h3>
            <p className="text-gray-700">Support Availability</p>
          </div>
      </div>
    </div>
  );
};

export default Stats;
