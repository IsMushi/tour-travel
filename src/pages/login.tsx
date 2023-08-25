import React, { useState } from 'react'
import loginimage from '../assets/images/login.png'
import usericon from '../assets/images/user.png'
import { Link } from 'react-router-dom'
interface logindetail {
  email:string,
  password:string
}
const Login:React.FC=()=>{
  const [login,setLogin]=useState<logindetail>({email:'',password:''})
  const handleform=(data:logindetail)=>{
    console.log(data)
  }
  return (
    <section>
      <div className="comntainer md:px-20 px-2">
        <div className="grid grid-cols-12">
          <div className="col-span-12">
            <div className="login_container grid md:grid-cols-2 gap-4 ">
              <div className="login_img ">
                <img src={loginimage} alt="" />
              </div>
              <div className="login_form ">
                <div className="user">
                  <img src={usericon} alt="" />
                </div>
                <h2>login</h2>
                <form action="" onSubmit={(e)=>{
                  e.preventDefault(),
                  handleform(login)
                }} method="post">
                  <div className="input_form">
                    <input type="text" placeholder='Email' onChange={(e)=>{setLogin({...login,email:e.target.value})}} required id='email' />
                  </div>
                  <div className="input_form">
                    <input type="password" onChange={(e)=>{setLogin({...login,password:e.target.value})}} placeholder='Password' required id='password' />
                  </div>
                  <button type="submit" className='bg-slate-900 w-full px-10 py-2 rounded-[2.2rem] text-white text-[1.2rem] '>Login</button>
                </form>
                <p>Don't have Account? <Link to={'/register'} className='text-blue-500'>Create</Link></p>
              </div>              
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
export default Login