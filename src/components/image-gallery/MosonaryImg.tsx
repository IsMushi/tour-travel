import React from 'react'
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry'
import GalleryImages from './galleryimages'

 const  MasonaryImg:React.FC=() =>{
  return (
    <ResponsiveMasonry columnsCountBreakPoints={{350:1,768:3,992:4}}>
      <Masonry gutter='1rem' columnsCount={4}>
          {
          GalleryImages.map((image,index)=>(
            <img src={image}  key={index} alt="" className='block gallery-img w-full rounded-[10px]' />
          ))
          }
      </Masonry>
    </ResponsiveMasonry>
  )
}
export default MasonaryImg