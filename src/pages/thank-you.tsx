import React from 'react'
import { Link } from 'react-router-dom'

const ThankYou:React.FC=()=> {
  return (
    <div className="md:px-20 px-2">
      <div className="container mt-20 flex justify-center items-center">
        <div className="grid grid-cols-12">
          <div className="thank_you col-span-12 w-[500px] border p-4 flex flex-col rounded-[0.5rem] mt-auto ">
            <h1 className='text-green-500'> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg></h1>
            <h1 className='text-2xl mb-2'>Thank you </h1>
            <h3 className='text-xl'>Your tour is booked</h3>
            <button className='bg-orange-400 px-5 py-2 text-white mt-3 rounded-[20px]'>
              <Link to={'/home'}>Back to Home</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
export default ThankYou