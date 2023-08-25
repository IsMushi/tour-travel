import { useEffect, useState } from 'react'
import CommonSection from '../shared/CommonSection'
import Searchbar from '../shared/Search-bar'
import Tours from '../assets/data/tours'
import TourCard from '../shared/tourCard'
import NewLetter from '../shared/NewLetter'

export default function ToursPage() {
  const  [pagecount,setpageCount]= useState<Number>(0)
  const [pages,setPage]= useState<Number>(0)
  useEffect(()=>{
    const pages=Math.ceil(5/4)
    setpageCount(pages)
  },[pages])
  return(
    <>
    <CommonSection title={'All Tours'} />
    <div className='md:px-20 mt-10 px-2'>
      <section>
      <div className="md:block">
        <Searchbar />
      </div>
      </section>
      <section className='mt-10'>
        <div className="grid md:grid-cols-4 space-y-2 gap-4">
          {
            Tours.map((item,index)=>(
              <div className="columns-3xs mb-2" key={index}>
                <TourCard tours={item} />
              </div>
            ))
          }
        </div>
        <div className="grid grid-cols-1 mt-10">
          <div className="pagination flex  items-center justify-center mt-4 gap-3">
            {[...Array(pagecount).keys()].map((number, index) =>(
              <span className={pages === number ? "active-page text-white":"" } onClick={()=>setPage(number)} key={index}>{number+1}</span>
            ))}
          </div>
        </div>
      </section>
      <NewLetter />
    </div>
    </>
  )
}
