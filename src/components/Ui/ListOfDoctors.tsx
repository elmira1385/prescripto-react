
import { useDoctorList } from "../../api/listDoctors";
import ItemOfDoctors from "./ItemOfDoctors";


const ListOfDoctors = () => {
 const{data}=useDoctorList()
 const sliceData=data?.slice(0,10)
 if(!sliceData) return
  return (
    <div className="flex flex-col gap-10 px-2 justify-center items-center">
      <div className="flex flex-col gap-4 justify-center items-center">
        <p className="text-3xl font-medium">Top Doctors to Book</p>
        <p className="text-center text-sm">
          Simply browse through our extensive list of trusted doctors.
        </p>
      </div>
      <ul className="flex flex-col gap-6 justify-center items-center">
       <ItemOfDoctors data={sliceData}/>
      </ul>
      <button className="bg-[#EAEFFF] text-gray-600 px-12 py-3 rounded-full ">more</button>
    </div>
  );
};

export default ListOfDoctors;
