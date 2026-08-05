import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import type { IUserResponse } from "../components/Ui/Header";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { api } from "../api/axios";
import { toast } from "react-toastify";
interface IEditUser {
  name: string;
  phone: string;
  addressLine1: string;
  addressLine2: string;
  gender: string;
  dob: string;
}
const MyProfile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const token = localStorage.getItem("token");
  const queryClient = useQueryClient();
  const { data: profile } = useQuery({
    queryKey: ["getUser"],
    queryFn: async () => {
      if (!token) {
        return null;
      }
      const { data } = await api<IUserResponse>("/api/user/get-profile", {
        headers: {
          token: token,
        },
      });
      return data.userData;
    },
  });

  const { register, handleSubmit, reset } = useForm<IEditUser>();
  useEffect(() => {
    if (profile) {
      reset({
        name: profile.name,
        phone: profile.phone,
        addressLine1: profile.address.line1,
        addressLine2: profile.address.line2,
        gender: profile.gender,
        dob: profile.dob,
      });
    }
  }, [profile, reset]);
  console.log(profile?.address);
  const { mutate } = useMutation({
    mutationKey: ["update-profile"],
    mutationFn: async (user: IEditUser) => {
      const { data } = await api.post(
        "/api/user/update-profile",
        {
          name: user.name,
          phone: user.phone,
          address: JSON.stringify({
            line1: user.addressLine1,
            line2: user.addressLine2,
          }),
          gender: user.gender,
          dob: user.dob,
        },
        {
          headers: {
            token: token,
          },
        },
      );
      return data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["getUser"],
      });
      toast.success("profile is changed");
      setIsEditing(false);
    },
    onError: () => {
      toast.error("please try again");
    },
  });

  if (!profile) return;
  return (
    <>
      {!isEditing ? (
        <div className="flex flex-col gap-6 pt-10 items-start">
          <div className="flex flex-col gap-4 ">
            <img width={140} src={profile.image} alt="profile" />
            <p className="text-2xl font-bold">{profile.name}</p>
          </div>
          <hr />
          <div className="flex flex-col gap-3">
            <p className="text-gray-600 underline ">CONTACT INFORMATION</p>
            <div className="flex gap-4 text-sm">
              <p className="font-medium">Email id:</p>
              <p className="text-primary">{profile.email}</p>
            </div>
            <div className="flex gap-4 text-sm">
              <p className="font-medium">Phone:</p>

              <p className="text-primary">{profile.phone}</p>
            </div>
            <div className="flex gap-4 text-sm">
              <p className="font-medium ">Address:</p>

              <p className="text-primary">{profile.address.line1}</p>
              <p className="text-primary">{profile.address.line2}</p>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <p className="text-gray-600 underline ">BASIC INFORMATION</p>
            <div className="flex gap-4 text-sm">
              <p className="font-medium">Gender:</p>

              <p className="text-primary">{profile.gender}</p>
            </div>
            <div className="flex gap-4 text-sm">
              <p className="font-medium">Birthday:</p>

              <p className="text-primary">{profile.dob}</p>
            </div>
          </div>
          <button
            className="border border-gray-500 px-6 py-1 rounded-full"
            type="button"
            onClick={() => {
              setIsEditing(true);
            }}
          >
            edit
          </button>
        </div>
      ) : (
        <form
          method="POST"
          onSubmit={handleSubmit(
            ({ name, phone, addressLine1, addressLine2, gender, dob }) => {
              mutate({ name, phone, addressLine1, addressLine2, gender, dob });
            },
          )}
          className="flex flex-col gap-6 pt-10 items-start"
        >
          <div className="flex flex-col gap-4 ">
            <img width={140} src={profile.image} alt="profile" />
            <input type="text" {...register("name")} />
          </div>
          <hr />
          <div className="flex flex-col gap-3">
            <p className="text-gray-600 underline ">CONTACT INFORMATION</p>
            <div className="flex gap-4 text-sm">
              <p className="font-medium">Email id:</p>
              <p className="text-primary">{profile.email}</p>
            </div>
            <div className="flex gap-4 text-sm">
              <p className="font-medium">Phone:</p>

              <input type="text" {...register("phone")} />
            </div>
            <div className="flex gap-4 text-sm">
              <p className="font-medium ">Address:</p>

              <input
                className="w-20"
                type="text"
                {...register("addressLine1")}
              />
              <input
                className="w-20"
                type="text"
                {...register("addressLine2")}
              />
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <p className="text-gray-600 underline ">BASIC INFORMATION</p>
            <div className="flex gap-4 text-sm">
              <p className="font-medium">Gender:</p>

              <select  {...register("gender")}>
                <option value="Not Selected">Not Selected</option>

                <option value="Male">Male</option>

                <option value="Female">Female</option>
              </select>
            </div>
            <div className="flex gap-4 text-sm">
              <p className="font-medium">Birthday:</p>

              <input type="date" {...register("dob")} />
            </div>
          </div>
          <button
            className="border border-gray-500 px-6 py-1 rounded-full"
            type="submit"
          >
            save
          </button>
        </form>
      )}
    </>
  );
};

export default MyProfile;
