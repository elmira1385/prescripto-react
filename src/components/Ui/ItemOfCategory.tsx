import React from 'react'
 
export interface IItemOfCategory{
    id?:string,
    title:string,
    image:string
}
const ItemOfCategory = ({title,image}:IItemOfCategory) => {
  return (
    <div className='flex flex-col gap-4 justify-center items-center'>
     <img className='w-16' src={image} alt="" />
     <p className='text-[12px]'>{title}</p>
    </div>
  )
}

export default ItemOfCategory