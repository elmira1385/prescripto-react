import { useQuery } from "@tanstack/react-query";
import { api } from "../../api/axios";

export interface IDoctor {
  _id: string;
  name: string;
  image: string;
  speciality: string;
  degree: string;
  experience: string;
  about: string;
  fees: number;
  available: boolean;
  date: number;
  address: {
    line1: string;
    line2: string;
  };
  slots_booked: Record<string, string[]>;
  __v: number;
}
export interface IDoctorsResponse {
  success: boolean;
  doctors: IDoctor[];
}
const ListOfDoctors = () => {
  const { data } = useQuery({
    queryKey: ["listOfDoctors"],
    queryFn: async () => {
      const { data } = await api.get<IDoctorsResponse>("/api/doctor/list");
      return data.doctors;
    },
  });
  return (
    <div className="flex flex-col gap-10 px-2 justify-center items-center">
      <div className="flex flex-col gap-4 justify-center items-center">
        <p className="text-3xl font-medium">Top Doctors to Book</p>
        <p className="text-center text-sm">
          Simply browse through our extensive list of trusted doctors.
        </p>
      </div>
      <ul className="flex flex-col gap-6 justify-center items-center">
        {data?.slice(0,10).map((item) => (
          <li key={item._id} className="border border-[#C9D8FF] rounded-xl overflow-hidden cursor-pointer  transition-all duration-500">
            <img
              className="bg-[#EAEFFF]"
              src={item.image}
              alt={item.name}
            />
            <div className="p-4">
              <div className="flex items-center gap-2 text-sm text-center text-green-500">
                <p className="w-2 h-2 rounded-full bg-green-500"></p>
                <p>{item.available ?"Available":"unAvailable"}</p>
              </div>
              <p className="text-[#262626] text-lg font-medium">
                {item.name}
              </p>
              <p className="text-[#5C5C5C] text-sm">{item.speciality}</p>
            </div>
          </li>
        ))}
      </ul>
      <button className="bg-[#EAEFFF] text-gray-600 px-12 py-3 rounded-full ">more</button>
    </div>
  );
};

export default ListOfDoctors;
