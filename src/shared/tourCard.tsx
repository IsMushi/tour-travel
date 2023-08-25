import { Link } from 'react-router-dom'
import calculateAvgRating from '../utils/avgRating'

export default function TourCard({tours}:any) {
  const {id, title, photo, price,city, featured, reviews }:any = tours
  const {totalrating, avgRating} = calculateAvgRating(reviews)
  return (
    <div className='tour-card px-1 shadow-sm py-1'>
      <div className='container'>
     <div className="card">
     <div className="tour_img">
        <img src={photo} alt="" className='w-full rounded-e-md' />
        {featured && <span>Featured</span> }
      </div>
     </div>
      <div className='md:flex items-center justify-between'>
        <span className='tour_location flex items-center gap-1'>
           <i> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
        </svg></i>
          {city}
        </span>
        <span className='tour-rating md:flex items-center gap-1'>
          <i>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
        </svg>
          </i>
          {avgRating ==0 ? null : avgRating}{totalrating === 0? 'Now Rated':<span>({reviews.length})</span>}
        </span>
      </div>
      <h1 className='title'><Link to={`/tours/${id}`} >{title}</Link></h1>
        <div className="md:flex tour-bottom items-center justify-between mt-3">
          <h3>${price} <span>/per person</span></h3>
          <button><Link to={`/tours/${id}`}>Book Now</Link></button>
        </div>
      </div>
    </div>
  )
}
