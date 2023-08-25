import React from 'react'
import worldimage from '../assets/images/world.png'
import heroimg2 from '../assets/images/hero-img02.jpg'
import heroimg1 from '../assets/images/hero-img01.jpg'
import herovideo from '../assets/images/hero-video.mp4'
import expreinceimg from '../assets/images/experience.png'
import Subtitle from '../shared/subtitle'
import Searchbar from '../shared/Search-bar'
import ServiceList from '../service/ServiceList'
import FeaturedTourList from '../components/featured/FeaturedTourList'
import MasonaryImg from '../components/image-gallery/MosonaryImg'
import Testimonial from '../components/testimonial/Testimonial'
import NewLetter from '../shared/NewLetter'

const Home:React.FC=()=> {
  return (
    <><div className="md:px-20 px-3 relative mt-10 container">
      <div className='w-full md:flex '>
        <div className="content  md:w-1/2 full  p-3 text-justify">
          <div className="m-4 flex items-center">
            <Subtitle subtitle={"Know Before You Go"} className="bg-orange-400 text-white font-bold p-3 w-auto" />
            <img src={worldimage} className='w-[2.3rem] h-[2.5rem]' alt="" />
          </div>
          <h1 className='text-slate-800 p-3 text-3xl font-[500] text-justify  leading-8'>Traveling opens the door to <br /> creating <span
            className="highlight text-orange-400">
            Memories</span></h1>
          <p className='p-3'>Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Ullam ipsum nobis asperiores soluta voluptas quas voluptates.
            Molestiae tempora dignissimos, animi praesentium molestias
            perferendis porro expedita delectus. Soluta natus porro.</p>
        </div>
        <div className=' md:w-1/2 w-full flex columns-3 gap-3'>
          <div className="hero_image w-full  h-full">
            <img src={heroimg1} alt="" className='w-full  h-[350px] object-cover rounded-[20px] border-2 border-orange-300' />
          </div>
          <div className="hero_image w-full mt-5  h-[350px]">
            <video controls src={herovideo} className='w-full h-full object-cover rounded-[20px] border-2 border-orange-300' />
          </div>

          <div className="hero_image w-full mt-10 h-[350px]">
            <img src={heroimg2} alt="" className='w-full h-full object-cover rounded-[20px] border-2  border-orange-300' />
          </div>
        </div>

      </div>
      <Searchbar />
      <section className='mt-10 mx-3'>
        <div className="container grid md:grid-cols-4  gap-2">
          <div className=" text-slate-800  py-4 columns-md px-3 ">
            <h4 className='text-[2.2rem] font-[500] text-[#ee6e6e]'><strong>What we Serve</strong></h4>
            <h2 className='text-2xl text-[2.2rem] font-[500] mt-3'>We offer our best services</h2>
          </div>
          <ServiceList />
        </div>
      </section>
      <section className='mt-10'>
        <div className="container">
          <div className="flex flex-col">
            <Subtitle subtitle={"Explore"} className=" bg-orange-400 w-24 text-white font-bold p-3" />
            <h1 className='text-2xl mt-3'>Our Featured Tours</h1>
          </div>
          <FeaturedTourList />
        </div>
      </section>
      <section className='mt-10'>
        <div className="columns-2 flex">
          <div className=" px-5 py-3 columns-[50%]">
            <div className="expreince_content">
              <Subtitle subtitle="Experience" className="text-orange-400 font-semibold" />
              <h1 className=''>With  our all Experience <br /> we Will serve you</h1>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. <br />
                Earum repudiandae quas et hic ratione dolores blanditiis aperiam dolor.
              </p>
            </div>
            <div className="counter-wrapper flex items-center gap-5">
              <div className="counter-box">
                <span>12k+</span>
                <h2>Successful Trip</h2>
              </div>
              <div className="counter-box">
                <span>2k+</span>
                <h2>Regular Cleints</h2>
              </div>
              <div className="counter-box">
                <span>15</span>
                <h2>Years Experience</h2>
              </div>
            </div>
          </div>
          <div className=' columns-[50%]'>
            <div className='experience_img'>
              <img src={expreinceimg} alt="" className='w-[90%]' />
            </div>
          </div>
        </div>
      </section>

      <section className='mt-10'>
        <div className='columns-1 px-4'>
          <div className="columns-[600px]">
            <Subtitle className="text-orange-400 mb-2" subtitle={"Gallery"} />
            <h2 className='gallery-title'>Visit our customer tour Gallery</h2>
          </div>
          <div className="grid grid-rows-1">
            <MasonaryImg />
          </div>
        </div>
      </section>
      <section className='mt-10'>
        <div className="columns-1">
          <Subtitle subtitle={"Fans love"} className="text-2xl font-[700] text-orange-400" />
          <h2 className='testimonial_title text-[2.3rem] mt-[1rem]'>What our fans say about us</h2>
          <div className="columns">
            <Testimonial />
          </div>
        </div>
      </section>
      <div className="mt-20">
        <NewLetter />
      </div>
    </div>
    
      </>
  )
}
export default Home