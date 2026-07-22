import React from 'react'
import Hero from '../components/Ui/Hero'
import FindbySpeciality from '../components/Ui/FindbySpeciality'
import ListOfDoctors from '../components/Ui/ListOfDoctors'
import BookAppointment from '../components/Ui/BookAppointment'

const Home = () => {
  return (
    <div className='flex flex-col gap-20'>
      <Hero/>
      <FindbySpeciality/>
      <ListOfDoctors/>
      <BookAppointment/>
    </div>
  )
}

export default Home