import React, { useState } from "react";
import icon from "../../images/icon_header.svg";
import { NavLink, useNavigate } from "react-router";

const Header = () => {
  const [isOpenHeader, setIsOpenHeader] = useState(false);

  return (
    <header className="flex py-4 justify-between items-center border-b">
      <div>
        <img width={150} src={icon} alt="icon" />
      </div>
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
