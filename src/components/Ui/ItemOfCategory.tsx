import type { TSpeciality } from "../../store/useFilter"

 
export interface IItemOfCategory{
    id?:string
    title:TSpeciality,
    image:string,
    onClick?:()=>void
}
const ItemOfCategory = ({title,image,onClick}:IItemOfCategory) => {
  return (
    <div onClick={onClick}  className='flex flex-col gap-4 justify-center items-center'>
     <img className='w-16' src={image} alt="" />
     <p className='text-[12px]'>{title}</p>
    </div>
  )
}

export default ItemOfCategory