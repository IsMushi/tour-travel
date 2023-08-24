import React, {  useState } from 'react'

interface Item{
  location: string,
  distance: number,
  maxpeople: number
}
const Searchbar:React.FC=() =>{
  const [inputName,setInputName]= useState<Item>({location:'',distance:0,maxpeople:0})
  const searchHandler=(data:Item)=>{
    console.log(data);
    
  }
  return (
    <div className='mt-[50px] bg-white shadow-sm p-2 rounded-[50px]  flex columns-1'>
      <div className="search-bar ">
        <form onSubmit={(e)=>{
          e.preventDefault(),
          searchHandler(inputName)
        }} className="md:flex justify-between   gap-4 items-center">
          <div className="input_field flex items-center gap-2">
            <span className='flex text-pink-600 text-[1.8rem]'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
            </svg>
            </span>
            <div>
              <label >Location</label>
              <input type="text"  value={inputName.location} onChange={(e)=>{setInputName({...inputName, location:e.target.value})}} className='mt-1' placeholder='Where you Going?' id="" />
            </div>
          </div>
          <div className="input_field flex items-center border-l gap-2">
            <span className='flex text-pink-600 mx-1 text-[1.8rem]'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
            </span>
            <div>
              <label >Distance</label>
            <input type="text" value={Number(inputName.distance)} onChange={(e)=>{
              (!isNaN(Number(e.target.value)))?setInputName({...inputName, distance:Number(e.target.value)}):setInputName({...inputName,distance:0})
            }} className='mt-1' placeholder='Distance k/m' id="" />
            </div>
          </div>
          <div className="input_field flex items-center border-l  gap-2">
            <span className='flex text-pink-600 mx-1 text-[1.8rem]'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
            </svg>

            </span>
            <div>
              <label> Max People</label>
            <input type="text" value={inputName.maxpeople} onChange={(e)=>{
              (!isNaN(Number(e.target.value)))?setInputName({...inputName, maxpeople:Number(e.target.value)}):setInputName({...inputName,maxpeople:0})
            }} className='mt-1' placeholder='Max People' id="" />
            </div>
          </div>
          <button type='submit' className='search-button '>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
          </svg>
          </button>
        </form>
      </div>
    </div>
  )
}
export default Searchbar