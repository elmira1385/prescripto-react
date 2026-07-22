
import bookAppointment from "../../images/bookappoiment.png";

const BookAppointment = () => {
  return (
    <div className="flex justify-between items-start bg-primary rounded-lg  px-6 sm:px-10 md:px-14 lg:px-12 ">
      <div className="flex flex-col justify-start items-start gap-8 py-8 sm:py-10 md:py-16 lg:py-24 lg:pl-5">
        <div className="text-xl flex flex-col gap-4 sm:text-2xl md:text-3xl lg:text-5xl font-semibold text-white">
          <p>Book Appointment</p>
          <p>With 100+ Trusted Doctors</p>
        </div>
        <button className="bg-white text-sm sm:text-base text-[#595959] px-8 py-3 rounded-full  hover:scale-105 transition-all ">
          Create account
        </button>
      </div>
      <div className="hidden md:block md:w-1/2 lg:w-92.5 ">
        <img
          className="w-full  max-w-md"
          src={bookAppointment}
          alt=""
        />
      </div>
    </div>
  );
};

export default BookAppointment;
