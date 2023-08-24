import React, { useState } from 'react'
import registerimage from '../assets/images/register.png'
import usericon from '../assets/images/user.png'
import { Link } from 'react-router-dom'
interface logindetail {
  username:string,
  email:string,
  password:string
}
const Register:React.FC=()=> {
  const [login,setLogin]=useState<logindetail>({username:'',email:'',password:''})
  const handleform=(data:logindetail)=>{
    console.log(data)
  }
  return (
    <section>
      <div className="comntainer px-20">
        <div className="grid grid-cols-12">
          <div className="col-span-10">
            <div className="login_container  md:flex justify-between ">
              <div className="login_img">
                <img src={registerimage} alt="" />
              </div>
              <div className="login_form columns-md ">
                <div className="user">
                  <img src={usericon} alt="" />
                </div>
                <h2>Register</h2>
                <form action="" onSubmit={(e)=>{
                  e.preventDefault(),
                  handleform(login)
                }} method="post">
                  <div className="input_form">
                    <input type="text" placeholder='Username' onChange={(e)=>{setLogin({...login,username:e.target.value})}} required id='username' />
                  </div>
                  <div className="input_form">
                    <input type="text" placeholder='Email' onChange={(e)=>{setLogin({...login,email:e.target.value})}} required id='email' />
                  </div>
                  <div className="input_form">
                    <input type="password" onChange={(e)=>{setLogin({...login,password:e.target.value})}} placeholder='Password' required id='password' />
                  </div>
                  <button type="submit" className='bg-slate-900 w-full px-10 py-2 rounded-[2.2rem] text-white text-[1.2rem] '>Create Account</button>
                </form>
                <p>Do you have Account? <Link to={'/login'} className='text-blue-500'>Login</Link></p>
              </div>              
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
export default Register