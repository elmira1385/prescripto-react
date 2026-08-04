import { useEffect, useState } from "react";
import { Route, useNavigate, useParams } from "react-router";
import { useDoctorList } from "../api/listDoctors";
import tik from "../images/tik.svg";
import ItemOfDoctors from "../components/Ui/ItemOfDoctors";
import { useMutation } from "@tanstack/react-query";
import { api } from "../api/axios";
import { toast } from "react-toastify";
interface IBookingUser {
  docId: string;
  slotDate: string;
  slotTime: string;
}
const DoctorDatailes = () => {
  const { id } = useParams();
  const { data } = useDoctorList();
  const route = useNavigate();
  const doctorDateiels = data?.find((item) => item._id === id);
  const sameCategory = data?.filter(
    (item) => item.speciality === doctorDateiels?.speciality,
  );
  const token = localStorage.getItem("token");

  // for booking
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  //days
  const dates = [];
  const today = new Date();
  for (let i = 0; i < 7; i++) {
    const date = new Date(today);
    // because start from 0 that is why for example today  is 3 there for 0+3=3
    date.setDate(today.getDate() + i);

    dates.push(
      `${date.getDate()}_${date.getMonth() + 1}_${date.getFullYear()}`,
    );
  }

  //hours
  const allTimes = [
    "10:00 AM",
    "10:30 AM",
    "11:00 AM",
    "11:30 AM",
    "12:00 PM",
    "12:30 PM",
    "1:00 PM",
  ];
  const bookedTimes = doctorDateiels?.slots_booked?.[selectedDate] || [];
  const times = allTimes.filter((time) => !bookedTimes.includes(time));
  //become date in days
  const getDayName = (date: string) => {
    const [day, month, year] = date.split("_");
    return new Date(
      Number(year),
      Number(month) - 1,
      Number(day),
    ).toLocaleDateString("en-US", {
      weekday: "short",
    });
  };

  const { mutate, isPending, isSuccess, isError } = useMutation({
    mutationKey: ["booking"],
    mutationFn: async (user: IBookingUser) => {
      const { data } = await api.post<IBookingUser>(
        "/api/user/book-appointment",
        {
          docId: user.docId,
          slotDate: user.slotDate,
          slotTime: user.slotTime,
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

  useEffect(() => {
    if (isSuccess) {
      route("/MyAppoiment");
      toast.success("Appointment Booked");
    } else if (isError) {
      toast.error("please try again");
    }
  }, [isSuccess,isError]);
  if (!sameCategory) {
    return <div>Loading...</div>;
  }

  if (!doctorDateiels) {
    return <div>Doctor not found</div>;
  }
  const handleBooking = () => {
    if (!selectedDate || !selectedTime) {
      toast.info("please select day and time");
      return;
    }
    if (!token) {
      toast.error("please login or signup");
      route("/Login")
      return;
    }

    mutate({
      docId: doctorDateiels?._id,
      slotDate: selectedDate,
      slotTime: selectedTime,
    });
  };

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
            <img className="w-5" src={tik} alt="tik" />
          </p>
          <div className="flex items-center gap-2  text-gray-600">
            <p>
              {doctorDateiels?.degree} -{" "}
              <span>{doctorDateiels?.speciality}</span>
            </p>
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
            <p className="text-sm text-gray-600">{doctorDateiels?.about}</p>
          </div>
          <p className="text-gray-600 font-medium ">
            Appointment fee:{" "}
            <span className="text-gray-800">${doctorDateiels?.fees}</span>
          </p>
        </div>
      </div>
      <div className="flex flex-col gap-4 justify-start items-start">
        <p>Booking slots</p>
        <div className="flex sm:justify-center gap-4 pt-5 w-full overflow-x-scroll scrollbar-none">
          {dates.map((eachData) => (
            <button
              key={eachData}
              type="button"
              onClick={() => {
                setSelectedDate(eachData);
              }}
              className={` px-4 py-3 rounded-full flex flex-col border border-gray-400 ${selectedDate === eachData ? "bg-primary text-white" : "bg-white"}`}
            >
              <span className="font-semibold">{getDayName(eachData)}</span>

              <span>{eachData}</span>
            </button>
          ))}
        </div>
        {selectedDate && (
          <div className="flex sm:justify-center gap-4 pt-5 w-full overflow-x-scroll scrollbar-none">
            {times.map((time, index) => (
              <button
                key={`${time}-${index}`}
                type="button"
                onClick={() => {
                  setSelectedTime(time);
                }}
                className={`px-4 py-2 rounded-full border border-gray-400 ${selectedTime === time ? "bg-primary text-white" : "bg-white"}`}
              >
                {time}
              </button>
            ))}
          </div>
        )}

        <button
          disabled={isPending}
          onClick={handleBooking}
          className="bg-primary text-white px-4 py-2 rounded-full"
        >
          Book an appointment
        </button>
      </div>
      <div className="flex flex-col gap-4 justify-center items-center">
        <p className="text-3xl font-semibold">Related Doctors</p>
        <p className="text-center text-sm text-gray-600">
          Simply browse through our extensive list of trusted doctors.
        </p>
        <ul className="flex flex-col gap-6">
          <ItemOfDoctors data={sameCategory} />
        </ul>
      </div>
    </div>
  );
};

export default DoctorDatailes;
