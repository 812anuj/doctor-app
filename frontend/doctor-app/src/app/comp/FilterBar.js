// components/FilterBar.js
import React from "react";

const FilterBar = () => {
  return (
    <div className="flex flex-wrap md:flex-nowrap justify-center gap-4 px-4 py-3 bg-white shadow-sm border-b">
      <select className="px-4 py-2 border border-gray-300 rounded-md text-sm">
        <option>Gender</option>
        <option>Male Doctor</option>
        <option>Female Doctor</option>
      </select>
      <select className="px-4 py-2 border border-gray-300 rounded-md text-sm">
        <option>Patient Stories</option>
        <option>50+ Stories</option>
        <option>100+ Stories</option>
      </select>
      <select className="px-4 py-2 border border-gray-300 rounded-md text-sm">
        <option>Experience</option>
        <option>5+ years</option>
        <option>10+ years</option>
      </select>
      <select className="px-4 py-2 border border-gray-300 rounded-md text-sm">
        <option>All Filters</option>
        <option>Online Booking</option>
        <option>Available Today</option>
      </select>
    </div>
  );
};

export default FilterBar;
