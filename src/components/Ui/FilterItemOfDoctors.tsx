import React from "react";
import { useFilter } from "../../store/useFilter";
import { useDoctorList } from "../../api/listDoctors";
import ItemOfDoctors from "./ItemOfDoctors";

const FilterItemOfDoctors = () => {
  const { data } = useDoctorList();
  const { filter } = useFilter();
  
  const FilterItem = data?.filter((item)=>{
   if(filter==="GeneralPhysician"){
    return item.speciality==="General physician"
   }else if(filter==="Gynecologist"){
    return item.speciality==="Gynecologist"
   }else if(filter==="Dermatologist"){
    return item.speciality==="Dermatologist"
   }else if(filter==="Pediatricians"){
    return item.speciality==="Pediatricians"
   }else if(filter==="Neurologist"){
    return item.speciality==="Neurologist"
   }else if(filter==="Gastroenterologist"){
    return item.speciality==="Gastroenterologist"
   }else return true
  })

  if(!FilterItem) return
  return <ul className="flex flex-col gap-6 justify-center items-center">
    <ItemOfDoctors data={FilterItem}/>
  </ul>;
};

export default FilterItemOfDoctors;
