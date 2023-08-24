// import React from 'react'
import maletourist from '../assets/images/male-tourist.png'
export default function NewLetter() {
  return (
    <div className="container newletter">
        <div className="md:grid grid-cols-2 ">
            <div className='newsletter_content columns-md'>
                <h2>Subcribe now to useful traveling information.</h2>
                <div className="newsletter_input">
                    <input type="text" className='' id="" />
                    <button className='bg-orange-400 hover:bg-slate-800 transition-all duration-700  btn-newletter rounded text-white'>Subscribe</button>
                </div>
                <p className=''>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Dignissimos ab dolore consectetur assumenda dolorum,
                  est optio explicabo nemo, inventore corporis nulla maxime? 
                  Nostrum placeat ipsa necessitatibus repellendus officiis dicta vel!
                </p>
            </div>
            <div className='columns-md'>
              <div className="newletter-img">
                <img src={maletourist} alt="" />
              </div>
            </div>
        </div>
    </div>
  )
}
