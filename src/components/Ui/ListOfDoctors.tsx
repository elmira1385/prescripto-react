import { useNavigate } from "react-router";
import { useDoctorList } from "../../api/listDoctors";
import ItemOfDoctors from "./ItemOfDoctors";

const ListOfDoctors = () => {
  const { data } = useDoctorList();
  const route = useNavigate();
  const sliceData = data?.slice(0, 10);
  if (!sliceData) return;
  return (
    <div className="flex flex-col gap-10 px-2 justify-center items-center">
      <div className="flex flex-col gap-4 justify-center items-center">
        <p className="text-3xl font-medium">Top Doctors to Book</p>
        <p className="text-center text-sm">
          Simply browse through our extensive list of trusted doctors.
        </p>
      </div>
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5  pt-5 gap-6 px-3 sm:px-0">
        <ItemOfDoctors data={sliceData} />
      </ul>
      <button
        onClick={() => {
          route("/AllDoctors");
        }}
        className="bg-[#EAEFFF] text-gray-600 px-12 py-3 rounded-full "
      >
        more
      </button>
    </div>
  );
};

export default ListOfDoctors;
