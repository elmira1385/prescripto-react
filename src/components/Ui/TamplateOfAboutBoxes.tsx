export interface IBox {
  title: string;
  description: string;
}
const TamplateOfAboutBoxes = ({ title, description }: IBox) => {
  return (
    <div className="border border-gray-200 px-10  py-8 sm:py-16 flex flex-col gap-4 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer">
      <b>{title}</b>
      <p>{description}</p>
    </div>
  );
};

export default TamplateOfAboutBoxes;
