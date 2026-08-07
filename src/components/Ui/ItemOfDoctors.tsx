import { useNavigate } from "react-router";
import type { IDoctor } from "../../api/listDoctors";


export interface IProps {
  data: IDoctor[];
}
const ItemOfDoctors = ({ data }: IProps) => {
  const route=useNavigate()
  return (
    <>
      {data?.map((item) => (
        <li onClick={()=>{
        route(`/${item._id}`)
        }}
          key={item._id}
          className="border  border-[#C9D8FF] rounded-xl overflow-hidden cursor-pointer  transition-all duration-500"
        >
          <img className="bg-[#EAEFFF]" src={item.image} alt={item.name} />
          <div className="p-4">
            <div className="flex items-center gap-2 text-sm text-center text-green-500">
              <p className="w-2 h-2 rounded-full bg-green-500"></p>
              <p>{item.available ? "Available" : "unAvailable"}</p>
            </div>
            <p className="text-[#262626] text-lg font-medium">{item.name}</p>
            <p className="text-[#5C5C5C] text-sm">{item.speciality}</p>
          </div>
        </li>
      ))}
    </>
  );
};

export default ItemOfDoctors;
