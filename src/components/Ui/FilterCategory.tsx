import React, { useState } from "react";
import { useFilter } from "../../store/useFilter";

const FilterCategory = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState(false);
  const { setFilter, filter } = useFilter();

  return (
    <div className="flex flex-col gap-4 i">
      <p>Browse through the doctors specia</p>
      <button
        onClick={() => {
          setIsOpen((prev) => !prev);
          setActive((prev) => !prev);
        }}
        className={`py-1 px-3 border self-start ${active && "bg-primary text-white"} border-gray-300 rounded-md text-sm  transition-all `}
      >
        Filters
      </button>
      {isOpen && (
        <div className="flex flex-col gap-4 text-sm text-gray-600 ">
          <p
            onClick={() => {
              setFilter("GeneralPhysician");
            }}
            className={`${filter === "GeneralPhysician" && "bg-blue-200"} w-full pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer `}
          >
            General physician
          </p>
          <p
            onClick={() => {
              setFilter("Gynecologist");
            }}
            className={`${filter === "Gynecologist" && "bg-blue-200"} w-full pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer `}
          >
            Gynecologist
          </p>
          <p
            onClick={() => {
              setFilter("Dermatologist");
            }}
            className={`${filter === "Dermatologist" && "bg-blue-200"} w-full pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer `}
          >
            Dermatologist
          </p>
          <p
            onClick={() => {
              setFilter("Pediatricians");
            }}
            className={`${filter === "Pediatricians" && "bg-blue-200"} w-full pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer `}
          >
            Pediatricians
          </p>
          <p
            onClick={() => {
              setFilter("Neurologist");
            }}
            className={`${filter === "Neurologist" && "bg-blue-200"} w-full pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer `}
          >
            Neurologist
          </p>
          <p
            onClick={() => {
              setFilter("Gastroenterologist");
            }}
            className={`${filter === "Gastroenterologist" && "bg-blue-200"} w-full pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer `}
          >
            Gastroenterologist
          </p>
        </div>
      )}
    </div>
  );
};

export default FilterCategory;
