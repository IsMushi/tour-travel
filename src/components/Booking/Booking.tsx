import React, { useEffect, useState } from 'react'
import {  useNavigate } from 'react-router-dom'
import TourItem from '../../types/Item';
interface Detailinformation{
    id: string | Number,
    userEmail: string,
    fullname: string,
    phone: Number ,
    guestSize:Number,
    bookAt:Date | string
}
const  Booking:React.FC<TourItem>=({avgRating,price,reviews}:any,)=>{
    const navigat = useNavigate()
    // const {price,reviews}= props
    const [totalamount,setamount]= useState<Number | null>()
    const [credential,setCredential]=useState<Detailinformation>({
        id:'01',
        userEmail:"example@gmail.com",
        fullname:'',
        phone: 0,
        guestSize:1,
        bookAt: ''
    })
    const service=10
    useEffect(()=>{
        setamount(Number(price)* Number(credential.guestSize)+ Number(service))
    },[credential.guestSize])
    const handlechange=(data:Detailinformation)=>{
        navigat("/thank-you")
       console.log(data);
       

    }
   
  return (
    <div className="booking">
        <div className="booking_top flex items-center justify-between">
            <h2>{"$"+price} <span>/Per Person</span></h2>
            <span className='tour-rating flex items-center'>
                <i style={{color:"orange",fontWeight:"700"}}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
              </svg>
                </i>
                  {avgRating ==0 ? null : avgRating} ({reviews?.length})
              </span>
        </div>
        <div className="booking_body">
            <h1>Information</h1>
            <form action="" onSubmit={(e)=>{
                e.preventDefault(),
                handlechange(credential)
            }}>
              <div className="book_form">
              <div className="booking_input_field">
                    <input type="text" value={credential.fullname}  onChange={(e)=>{setCredential({...credential,fullname:String(e.target.value)})}} placeholder='FullName' required id="fullName" />
                </div>
                <div className="booking_input_field">
                    <input type="text" value={Number(credential.phone)}  onChange={(e)=>{
                        isNaN(Number(e.target.value))?setCredential({...credential,phone:0}):setCredential({...credential,phone:Number(e.target.value)})
                    }} required placeholder='Phone Number' id="phone" />
                </div>
                <div className="booking_input_field flex justify-between gap-2">
                    <input type="date"   required placeholder='' id="BookAt" />
                    <input type="text" value={Number(credential.guestSize)} onChange={(e)=>{
                        isNaN(Number(e.target.value)) ?setCredential({...credential,guestSize:1}):setCredential({...credential,guestSize:Number(e.target.value)})
                    }} required placeholder='Guest' id="GuestSize"  />
                </div>
              </div>
              <div className="booking_bottom p-[1rem]">
                    <ul>
                        <li className='mb-1'>
                            <h5 className='flex font-[600] items-center gap-1'>${price} <i>&times;</i>1 person</h5>
                            <span>${price}</span>
                        </li>

                        <li className='mb-1'>
                            <h5 className='font-[600]'>Service Charge</h5>
                            <span>${service}</span>
                        </li>
                        <li className='total'>
                            <h5 className='font-[600]'>Total</h5>
                            <span className='font-[600]'>${Number(totalamount)}</span>
                        </li>
                    </ul>
                    <button className='bg-orange-400 text-white px-10 py-2 rounded-[20px] w-full mt-4 m-auto'>Book Now</button>
                </div>
            </form>
            
          
        </div>
    </div>
  )
}
export default Booking