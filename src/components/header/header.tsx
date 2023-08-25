import React, { useEffect, useRef } from 'react'
import { Link, NavLink } from 'react-router-dom'
import logo from '../../assets/images/logo.png'
const nav_link=[
  {
    path:'/',
    display:'Home'
  }, {
    path:'/about',
    display:'About'
  },
  {
    path:'/tours',
    display:'Tours'
  }
]
const  Header:React.FC =()=> {
  const headerRef:any = useRef()
  const stickyHeaderFunc = ( )=>{
      window.addEventListener('scroll', ()=>{
    if(document.body.scrollTop >80 || document.documentElement.scrollTop >80) {
        headerRef.current.classList.add('sticky_header')
    }else{
        headerRef.current.classList.remove('sticky_header')
    }
    })
  }
  useEffect(()=>{
    stickyHeaderFunc()
    return window.removeEventListener('scroll', stickyHeaderFunc)
    })
  return (
    <header className='header' ref={headerRef}>
      <div className="flex items-center justify-around w-full">
        <div className="logo">
          <NavLink to={'/'}>
            <img src={logo} className='w-[30%]' alt="" />
          </NavLink>
        </div>
        <div className="menu md:flex md:mt-0 mt-10 justify-between items-center md:w-[50%] ">
        <div className="link-part">
        <ul className='md:flex justify-between gap-5'>
          {
            nav_link.map((link,index)=>(
              <li className='link' key={index}><NavLink  to={link.path}>{link.display}</NavLink></li>
            ))
          }
          </ul>
        </div>
        <div className="right-part flex items-center ">
          <button><Link to={'/login'}>Login</Link></button>
          <button className='register'><Link to={'/register'}>Register</Link></button>
        </div>
        <span className='menu-button cursor-pointer'>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
     </svg>

        </span>
        </div>
      </div>
    </header>
  )
}
export default Header
