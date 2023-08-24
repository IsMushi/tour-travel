import React from 'react'
import Tours from '../../assets/data/tours'
import TourCard from '../../shared/tourCard'
const FeaturedTourList:React.FC = () => {
  return (
    <div className='md:grid grid-cols-4 gap-4'>
      {
        Tours.map((tour,index) =>(
            <div key={index} className="columns-3xs flex bg-slate-50 mt-3 p-4">
                <TourCard  tours={tour} />
            </div>
        ))
      }
    </div>
  )
}

export default FeaturedTourList
