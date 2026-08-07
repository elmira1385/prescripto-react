import React from "react";
import FilterCategory from "../components/Ui/FilterCategory";
import FilterItemOfDoctors from "../components/Ui/FilterItemOfDoctors";

const AllDoctors = () => {
  return (
    <div className="flex flex-col pt-10 sm:flex-col md:flex-row lg:flex-row xl:flex-row gap-6  justify-center  sm:items-start">
      <FilterCategory />
      <FilterItemOfDoctors />
    </div>
  );
};

export default AllDoctors;
