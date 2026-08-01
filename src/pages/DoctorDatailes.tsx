import React from 'react'
import { useParams } from 'react-router'
import { useDoctorList } from '../api/listDoctors'

const DoctorDatailes = () => {
   const{id}= useParams()
   const {data}=useDoctorList()
   const doctorDateiels=data?.find((item)=>(item._id===id))
   const sameCtegory=data?.filter((item)=>(item.speciality===doctorDateiels?.speciality))
  return (
    <>
    <div>{doctorDateiels?.name}</div>
    <ul>
        {sameCtegory?.map((item)=>(
            <li key={item._id}>
                {item.speciality}
            </li>
        ))}
    </ul>
    </>
  )
}

export default DoctorDatailes