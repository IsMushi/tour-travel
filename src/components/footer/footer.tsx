import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assets/images/logo.png'

const quick_link=[
  {
    path:'/home',
    display:'Home'
  }, {
    path:'#',
    display:'About'
  },
  {
    path:'/tours',
    display:'Tours'
  }
]
const quick_link2=[
  {
    path:'/gallery',
    display:'Gallery'
  }, {
    path:'/login',
    display:'Login'
  },
  {
    path:'/register',
    display:'Register'
  }
]

const Footer:React.FC =()=> {
  const year = new Date().getFullYear()
  return (
    <div className="footer px-14 pt-[70px] pb-[30px] mt-10">
      <div className="container grid md:grid-cols-4 grid-cols-">
        <div className="col-span-1">
          <div className="logo px-2">
            <img src={logo} alt="" className=' w-1/2 object-cover  mb-[1rem]' />
            <p className='text-slate-800'>Lorem ipsum dolor sit amet consectetur adipisicing elit.
               Ratione blanditiis</p>
               <div className="social_link flex justify-between items-center gap-4">
                <span>
                  <Link to={'https://youtube.com'}>Youtube</Link>
                </span>
                <span>
                  <Link to={'https://youtube.com'}>Instagram</Link>
                </span>
                <span>
                  <Link to={'https://youtube.com'}>Twitter</Link>
                </span>
                <span>
                  <Link to={'https://youtube.com'}>Facebook</Link>
                </span>
               </div>
          </div>
        </div>
        <div className=" col-span-1 px-3">
          <h2 className='footer-link_title text-xl'>Discover</h2>
          <ul className='mx-2'>
            {
              quick_link.map((link,index)=>(
                <li  key={index}><Link className='footer-quick-link' to={link.path}>{link.display}</Link></li>
              ))
            }
          </ul>
        </div>
        <div className=" col-span-1">
        <h2 className='footer-link_title text-xl'>Quick Links</h2>
          <ul className='mx-2'>
            {
              quick_link2.map((link,index)=>(
                <li key={index}><Link to={link.path}>{link.display}</Link></li>
              ))
            }
          </ul>
        </div>
        <div className="col-spna-1">
          <h5 className='footer-link-title text-xl'>Contact</h5>
          <ul>
            <li className='flex gap-4 items-center'>
              <h3>
                <span className='flex'>
                <i className='mr-1'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                </svg>
                </i>
                Address:
              </span>
          </h3>
            <p>Rwanda, Rubavu</p>
            </li>
            <li className='flex gap-4 items-center'>
              <h3>
                <span className='flex'>
                <i className='mr-1'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
            </svg>

                </i>
                Email:
              </span>
          </h3>
            <p>traveltour@gmail.com</p>
            </li>
            <li className='flex gap-4 items-center'>
              <h3>
                <span className='flex'>
                <i className='mr-1'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
              </svg>

                </i>
                Phone:
              </span>
          </h3>
            <p>+250790435996</p>
            </li>
          </ul>
        </div>
      </div>
      <div className="grid mt-10 grid-cols-1">
        <div className='flex justify-center items-center '>
          <p>&copy;copyright {year}, Design and Developed by Isaac. All right Reserved. </p>
        </div>
      </div>
    </div>
  )
}
export default Footer