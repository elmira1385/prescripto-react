import React from "react";
import type { IItemOfCategory } from "./ItemOfCategory";
import ItemOfCategory from "./ItemOfCategory";
import item1 from "../../images/item1ofcategory.svg";
import item2 from "../../images/item2ofcategory.svg";
import item3 from "../../images/item3ofcategory.svg";
import item4 from "../../images/item4ofcategory.svg";
import item5 from "../../images/item5ofcategory.svg";
import item6 from "../../images/item6ofcategory.svg";
import { useFilter } from "../../store/useFilter";
import { useNavigate } from "react-router";
const FindbySpeciality = () => {
  const { setFilter,setIsFilterOpen } = useFilter();
  const route=useNavigate()
  const items: IItemOfCategory[] = [
    {
      id: crypto.randomUUID(),
      title: "GeneralPhysician",
      image: item1,
    },
    {
      id: crypto.randomUUID(),
      title: "Gynecologist",
      image: item2,
    },
    {
      id: crypto.randomUUID(),
      title: "Dermatologist",
      image: item3,
    },
    {
      id: crypto.randomUUID(),
      title: "Pediatricians",
      image: item4,
    },
    {
      id: crypto.randomUUID(),
      title: "Neurologist",
      image: item5,
    },
    {
      id: crypto.randomUUID(),
      title: "Gastroenterologist",
      image: item6,
    },
  ];
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col gap-4 justify-center items-center">
        <p className="text-3xl font-medium">Find by Speciality</p>
        <p className="text-center text-sm">
          Simply browse through our extensive list of trusted doctors, schedule
          your appointment hassle-free.
        </p>
      </div>
      <ul className="flex sm:justify-center gap-4 pt-5 w-full overflow-x-scroll scrollbar-none">
        {items.map((item) => (
          <ItemOfCategory
            key={item.id}
            title={item.title}
            image={item.image}
            onClick={() => {
              setFilter(item.title);
              setIsFilterOpen(true)
              route("AllDoctors")
            }}
          />
        ))}
      </ul>
    </div>
  );
};

export default FindbySpeciality;
