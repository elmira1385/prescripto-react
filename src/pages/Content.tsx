import contactUs from "../images/contactUs.png";
const Content = () => {
  return (
    <div className="flex flex-col justify-center gap-6 ">
      <p className="text-2xl text-center text-gray-600 pt-8">
        CONTACT <span className="text-gray-700 font-bold">US</span>
      </p>
      <img className="w-full md:max-w-90" src={contactUs} alt="contactUs" />
      <div className="flex flex-col justify-center items-start gap-6 pt-6">
        <p className=" font-semibold text-lg text-gray-600">OUR OFFICE</p>
        <p className=" text-gray-500">
          00000 Willms Station <br /> Suite 000, Washington, USA
        </p>
        <p className=" text-gray-500">
          Tel: (000) 000-0000 <br /> Email: greatstackdev@gmail.com
        </p>
       
      </div>
    </div>
  );
};

export default Content;
