import Slider from 'react-slick'
import ava01 from '../../assets/images/ava-1.jpg'
import ava02 from '../../assets/images/ava-2.jpg'
import ava03 from '../../assets/images/ava-3.jpg'

export default function Testimonial() {
  const settings={
    dots:true,
    infinite:true,
    autoplay:true,
    speed: 1000,
    swipeToSlide:true,
    autoplaySpeed: 2000,
    slidesToShow:3, 
    responsive: [
      {
      breakpoint: 992,
      settings: {
      slidesToShow: 2,
      slidesToScroll: 1,
      infinite: true,
      dots: true,
      }
      },
     {
      breakpoint: 576,
      settings: {
      slidesToShow: 1,
      slidesToScroll: 1,
      }
    },
      ]
  }
  return (
    <Slider {...settings}>
        <div className="px-3 py-4 ">
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Dolores aut ipsam porro, voluptatum officiis unde.
            Adipisci eius doloremque labore repudiandae! Placeat,
            hic? Labore magni, ipsam inventore assumenda maiores quo. Numquam.
          </p>
        <div className="flex items-center mt-3 gap-4">
          <img src={ava01} className='rounded-2 w-24 h-24' alt="" />
          <div>
            <h5 className='mb-0 mt-3'>John Doe</h5>
            <p>Customer</p>
          </div>
        </div>
      </div>
      <div className="px-3 py-4">
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Dolores aut ipsam porro, voluptatum officiis unde.
            Adipisci eius doloremque labore repudiandae! Placeat,
            hic? Labore magni, ipsam inventore assumenda maiores quo. Numquam.
          </p>
        <div className="flex items-center mt-3 gap-4">
          <img src={ava02} className='rounded-2 w-24 h-24' alt="" />
          <div>
            <h5 className='mb-0 mt-3'>John Doe</h5>
            <p>Customer</p>
          </div>
        </div>
      </div>
      <div className="px-3 py-4">
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Dolores aut ipsam porro, voluptatum officiis unde.
            Adipisci eius doloremque labore repudiandae! Placeat,
            hic? Labore magni, ipsam inventore assumenda maiores quo. Numquam.
          </p>
        <div className="flex items-center mt-3 gap-4">
          <img src={ava03} className='rounded-2 w-24 h-24' alt="" />
          <div>
            <h5 className='mb-0 mt-3'>John Doe</h5>
            <p>Customer</p>
          </div>
        </div>
      </div>
    </Slider>
  )
}
