import {  useState } from "react";
import icon from "../../images/icon_header.svg";
import { NavLink, useNavigate } from "react-router";
import { useQuery } from "@tanstack/react-query";
import { api } from "../../api/axios";

export interface IUser {
  _id: string;
  name: string;
  email: string;
  image: string;
  phone: string;
  address: {
    line1: string;
    line2: string;
  };
  gender: string;
  dob: string;
  __v: number;
}

interface IUserResponse {
  success: boolean;
  userData: IUser;
}
const Header = () => {
  const [isOpenHeader, setIsOpenHeader] = useState(false);
  const route=useNavigate()
  const [isOpenUserInformation, setIsOpenUserInformation] = useState(false);
  const { data, refetch } = useQuery({
    queryKey: ["getUser"],
    queryFn: async () => {
      const token = localStorage.getItem("token");
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

  return (
    <header className="flex py-4 justify-between items-center border-b">
      <div>
        <img width={150} src={icon} alt="icon" />
      </div>
      <div className="flex relative gap-2 justify-center items-center">
        {data && (
          <button
            onClick={() => {
              setIsOpenUserInformation((prev) => !prev);
            }}
            className=" flex gap-1 justify-center items-center"
          >
            <img className="w-10 rounded-full" src={data?.image} alt="" />
            <svg
              fill="#000000"
              width="18px"
              height="18px"
              viewBox="0 0 24 24"
              id="triple-down-sign"
              data-name="Line Color"
              xmlns="http://www.w3.org/2000/svg"
            >
              <polyline id="primary" points="19 14 12 21 5 14"></polyline>
            </svg>
          </button>
        )}
        {isOpenUserInformation && (
          <div className="absolute  top-0 right-0 pt-14 text-base font-medium text-gray-600 z-60 ">
            <div className="min-w-48 bg-gray-50 rounded flex flex-col gap-4 p-4">
              <p className="hover:text-black cursor-pointer">My Profile</p>
              <p onClick={()=>{
              route("/MyAppoiment")
              setIsOpenUserInformation(false)
              }} className="hover:text-black cursor-pointer">My Appointments</p>
              <p
                onClick={() => {
                  localStorage.removeItem("token");
                  refetch();
                  setIsOpenUserInformation(false);
                  route("/")
                }}
                className="hover:text-black cursor-pointer"
              >
                Logout
              </p>
            </div>
          </div>
        )}
        <div
          onClick={() => {
            setIsOpenHeader((prev) => !prev);
          }}
        >
          {isOpenHeader ? (
            <svg
              fill="#000000"
              width="30px"
              height="30px"
              viewBox="-3.5 0 19 19"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M11.383 13.644A1.03 1.03 0 0 1 9.928 15.1L6 11.172 2.072 15.1a1.03 1.03 0 1 1-1.455-1.456l3.928-3.928L.617 5.79a1.03 1.03 0 1 1 1.455-1.456L6 8.261l3.928-3.928a1.03 1.03 0 0 1 1.455 1.456L7.455 9.716z" />
            </svg>
          ) : (
            <svg
              fill="#000000"
              width="40px"
              height="40px"
              viewBox="-5 -7 24 24"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="xMinYMin"
            >
              <path d="M1 0h5a1 1 0 1 1 0 2H1a1 1 0 1 1 0-2zm7 8h5a1 1 0 0 1 0 2H8a1 1 0 1 1 0-2zM1 4h12a1 1 0 0 1 0 2H1a1 1 0 1 1 0-2z" />
            </svg>
          )}
        </div>
      </div>
      {isOpenHeader && (
        <div
          className={`fixed sm:inline-flex md:inline-flex lg:inline-flex xl:hidden  flex flex-col gap-6 items-center  z-50 bg-white  w-full h-full top-15  p-4 transition-all duration-300 ${isOpenHeader ? "right-0" : "-right-full"}`}
        >
          <ul className="flex flex-col justify-center items-center gap-6 *:font-bold  *:text-[16px] *:cursor-pointer *:px-4 *:py-2 *:rounded-md">
            <NavLink
              to="/"
              end
              onClick={() => setIsOpenHeader(false)}
              className={({ isActive }) =>
                isActive ? "bg-primary text-white" : ""
              }
            >
              HOME
            </NavLink>
            <NavLink
              to="/AllDoctors"
              onClick={() => setIsOpenHeader(false)}
              className={({ isActive }) =>
                isActive ? "bg-primary text-white" : ""
              }
            >
              ALL Doctors
            </NavLink>
            <NavLink
              to="/About"
              onClick={() => setIsOpenHeader(false)}
              className={({ isActive }) =>
                isActive ? "bg-primary text-white" : ""
              }
            >
              ABOUT
            </NavLink>
            <NavLink
              to="/Content"
              onClick={() => setIsOpenHeader(false)}
              className={({ isActive }) =>
                isActive ? "bg-primary text-white" : ""
              }
            >
              CONTENT
            </NavLink>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
