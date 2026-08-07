import type { IBox } from "../components/Ui/TamplateOfAboutBoxes";
import TamplateOfAboutBoxes from "../components/Ui/TamplateOfAboutBoxes";
import aboutUs from "../images/aboutUs.png";

const items: IBox[] = [
  {
    title: "EFFICIENCY:",
    description:
      "Streamlined appointment scheduling that fits into your busy lifestyle.",
  },
  {
    title: "CONVENIENCE: ",
    description:
      "Access to a network of trusted healthcare professionals in your area.",
  },
  {
    title: "PERSONALIZATION:",
    description:
      "Tailored recommendations and reminders to help you stay on top of your health.",
  },
];
const About = () => {
  return (
    <div className="flex flex-col justify-center gap-4 sm:gap-14 items-center pt-14">
        <p className="text-2xl text-gray-600 ">
          ABOUT <span className="text-gray-700 font-bold">US</span>
        </p>
      <div className="flex flex-col justify-start gap-6 items-center  sm:flex-col md:flex-col lg:flex-row xl:flex-row">
        <img className="w-full md:max-w-90" src={aboutUs} alt="aboutUs" />
        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-sm text-gray-600">
          <p>
            Welcome to Prescripto, your trusted partner in managing your
            healthcare needs conveniently and efficiently. At Prescripto, we
            understand the challenges individuals face when it comes to
            scheduling doctor appointments and managing their health records.
          </p>
          <p>
            Prescripto is committed to excellence in healthcare technology. We
            continuously strive to enhance our platform, integrating the latest
            advancements to improve user experience and deliver superior
            service. Whether you're booking your first appointment or managing
            ongoing care, Prescripto is here to support you every step of the
            way.
          </p>
          <b className="text-gray-800">Our Vision</b>
          <p>
            Our vision at Prescripto is to create a seamless healthcare
            experience for every user. We aim to bridge the gap between patients
            and healthcare providers, making it easier for you to access the
            care you need, when you need it.
          </p>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center gap-6 ">
        <p className="text-2xl text-gray-600 pt-8">
          WHY <span className="text-gray-700 font-bold place-self-start">CHOOSE US</span>
        </p>
        <ul className="flex flex-col sm:flex-col md:flex-col lg:flex-row xl:flex-row ">
       {items.map((i, index)=>(
         <TamplateOfAboutBoxes key={index} title={i.title} description={i.description}/>
       ))}
        </ul>
      </div>
    </div>
  );
};

export default About;
