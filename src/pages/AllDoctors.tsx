import React from 'react'
import FilterCategory from '../components/Ui/FilterCategory'
import FilterItemOfDoctors from '../components/Ui/FilterItemOfDoctors'

const AllDoctors = () => {
  return (
    <div className='flex flex-col gap-6 pt-4'>
       <FilterCategory/>
       <FilterItemOfDoctors/>
    </div>
  )
}

export default AllDoctors