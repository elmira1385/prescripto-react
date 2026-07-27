import { useQuery } from "@tanstack/react-query";
import { api } from "./axios";

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
export const useDoctorList = () => {
  return useQuery({
    queryKey: ["listOfDoctors"],
    queryFn: async () => {
      const { data } = await api.get<IDoctorsResponse>("/api/doctor/list");
      return data.doctors;
    },
  });
};
