import { useMutation, useQuery } from "@tanstack/react-query";
import { api } from "../api/axios";
import type { IDoctor } from "../api/listDoctors";
import type { IUser } from "../components/Ui/Header";
import { useEffect } from "react";
import { toast } from "react-toastify";

interface Appointment {
  amount: number;
  cancelled: boolean;
  date: number;
  docData: IDoctor;
  docId: string;
  isCompleted: boolean;
  payment: boolean;
  slotDate: string;
  slotTime: string;
  userData: IUser;
  userId: string;
  __v: number;
  _id: string;
}
interface AppointmentResponse {
  appointments: Appointment[];
  success: boolean;
}

interface ICancel {
  appointmentId: string;
}

const MyAppoiment = () => {
  const token = localStorage.getItem("token");
  const { data ,refetch} = useQuery({
    queryKey: ["getAppointment"],
    queryFn: async () => {
      const { data } = await api<AppointmentResponse>(
        "/api/user/appointments",
        {
          headers: {
            token: token,
          },
        },
      );
      return data.appointments;
    },
  });

  const { mutate, isSuccess } = useMutation({
    mutationKey: ["cancel"],
    mutationFn: async (user: ICancel) => {
      const { data } = await api.post(
        "/api/user/cancel-appointment",
        {
          appointmentId: user.appointmentId,
        },
        {
          headers: {
            token: token,
          },
        },
      );
      return data;
    },
  });
  if (!data) return <p>loading....</p>;
  useEffect(()=>{
  if(isSuccess){
    refetch()
    toast.success("Appointment cancelled")
  }
  },[isSuccess])


  const sortItem=[...data].sort((a,b)=>Number(a.cancelled)-Number(b.cancelled))
  return (
    <div className="flex flex-col gap-6">
      {sortItem.map((item) => (
        <div key={item._id} className="grid grid-cols-[1fr_2fr] gap-4 sm:flex sm:gap-6 py-4 border-b border-gray-400">
          <div>
            <img
              className="w-36 bg-[#EAEFFF]"
              src={item.docData.image}
              alt="doctorImage"
            />
          </div>
          <div className="flex-1 text-sm text-[#5E5E5E]">
            <p className="text-[#262626] text-base font-semibold">
              {item.docData.name}
            </p>
            <p>{item.docData.speciality}</p>
            <p className="text-[#464646] font-medium ">Address:</p>
            <p>{item.docData.address.line1}</p>
            <p>{item.docData.address.line2}</p>
            <p>
              <span className="text-sm text-[#3C3C3C] font-medium">
                Date &amp; Time:
              </span>
              {item.slotDate} | {item.slotTime}
            </p>
          </div>
          <div></div>

          <button
            onClick={() => {
              mutate({ appointmentId: item._id });
            }}
            className={` ${item.cancelled?"text-red-500 border-red-500":"text-gray-500 hover:bg-red-600 hover:text-white border-gray-500"} sm:min-w-48 py-2 border rounded  transition-all duration-300`}
          >
            {item.cancelled?"Appointment cancelled":"Cancel appointment"}
          </button>
        </div>
      ))}
    </div>
  );
};

export default MyAppoiment;
