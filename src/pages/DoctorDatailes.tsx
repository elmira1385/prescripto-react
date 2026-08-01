import React from "react";
import { useParams } from "react-router";
import { useDoctorList } from "../api/listDoctors";
import tik from "../images/tik.svg"
import ItemOfDoctors from "../components/Ui/ItemOfDoctors";
const DoctorDatailes = () => {
  const { id } = useParams();
  const { data } = useDoctorList();
  const doctorDateiels = data?.find((item) => item._id === id);
  const sameCtegory = data?.filter(
    (item) => item.speciality === doctorDateiels?.speciality,
  );
  if (!sameCtegory) return
  return (
    <div className="flex flex-col gap-10 pt-6">
      <div className="flex flex-col sm:flex-row gap-4">
        <img
          className="bg-primary w-full sm:max-w-72 rounded-lg"
          src={doctorDateiels?.image}
          alt="image"
        />

        <div className="flex flex-col gap-4 border border-[#ADADAD] rounded-lg p-8 py-7 bg-white mx-2 sm:mx-0 -mt-20 sm:mt-0">
          <p className="flex items-center gap-2 text-3xl font-medium text-gray-700">
            {doctorDateiels?.name}
            <img
              className="w-5"
              src={tik}
              alt="tik"
            />
          </p>
          <div className="flex items-center gap-2  text-gray-600">
            <p>{doctorDateiels?.degree} - <span>{doctorDateiels?.speciality}</span></p>
            <button className="py-0.5 px-2 border text-xs rounded-full">
              {doctorDateiels?.experience}
            </button>
          </div>
          <div>
            <p className="flex items-center gap-1 text-sm font-medium text-[#262626]">
              About
              <img
                className="w-3"
                src="data:image/svg+xml,%3csvg%20width='17'%20height='17'%20viewBox='0%200%2017%2017'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M8.5%200C3.80559%200%200%203.80554%200%208.5C0%2013.1944%203.80559%2017%208.5%2017C13.1945%2017%2017%2013.1944%2017%208.5C17%203.80554%2013.1945%200%208.5%200ZM8.5%2015.3C4.75049%2015.3%201.7%2012.2495%201.7%208.5C1.7%204.75049%204.75049%201.7%208.5%201.7C12.2496%201.7%2015.3%204.75049%2015.3%208.5C15.3%2012.2495%2012.2496%2015.3%208.5%2015.3ZM9.56436%205.1C9.56436%205.71628%209.11565%206.1625%208.50864%206.1625C7.87706%206.1625%207.43936%205.71628%207.43936%205.08821C7.43936%204.48456%207.88891%204.0375%208.50864%204.0375C9.11565%204.0375%209.56436%204.48456%209.56436%205.1ZM7.65186%207.65H9.35186V12.75H7.65186V7.65Z'%20fill='black'/%3e%3c/svg%3e"
                alt="!"
              />
            </p>
            <p className="text-sm text-gray-600">
             {doctorDateiels?.about}
            </p>
          </div>
          <p className="text-gray-600 font-medium ">
            Appointment fee: <span className="text-gray-800">${doctorDateiels?.fees}</span>
          </p>
        </div>
      </div>
      <div>booking</div>
      <div className="flex flex-col gap-4 justify-center items-center">
       <p className="text-3xl font-semibold">Related Doctors</p>
       <p className="text-center text-sm text-gray-600">Simply browse through our extensive list of trusted doctors.</p>
       <ul className="flex flex-col gap-6">
        <ItemOfDoctors data={sameCtegory}/>
       </ul>
      </div>
    </div>
  );
};

export default DoctorDatailes;
