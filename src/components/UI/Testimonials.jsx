import React from 'react'
import Slider from 'react-slick'


const Testimonials = () => {
   
  const settings = {
    dots:true,
    infinite: true,
    autoplay: true,
    speed:2000,
    swipeToSlide: true,
    autoplaySpeed:2000,
    slidesToShow:3,
    slidesToScroll:1,
    responsive:[
      {
        breakpoint: 992,
        settings:{
          slidesToShow:2,
          slidesToScroll:1,
          infinite:true,
          dots:true,
        },
      },
      {
        breakpoint:576,
        settings:{
          slidesToShow:1,
          slidesToScroll:1,
        },
      },
    ],
  };

  return <Slider {...settings}>

   <div className="testimonial py-4 px-3">
    <p className="section_description">
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
      Id quasi asperiores laborum velit nobis a ab mollitia similique consequuntur eius qui neque, unde explicabo. 
      Ipsam eligendi quasi eveniet unde aspernatur?
    </p>
    <div className='mt-3 flex align-items-center gap-4'>
      <img src="#" alt="" className='w-25 h-25 rounded-2' />
      <div>
        <h6 className='mb-0 mt-3'>Miriam</h6>
        <p className="section_description">Customer</p>
      </div>
    </div>
   </div>

   <div className="testimonial py-4 px-3">
    <p className="section_description">
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
      Id quasi asperiores laborum velit nobis a ab mollitia similique consequuntur eius qui neque, unde explicabo. 
      Ipsam eligendi quasi eveniet unde aspernatur?
    </p>
    <div className='mt-3 flex align-items-center gap-4'>
      <img src="#" alt="" className='w-25 h-25 rounded-2' />
      <div>
        <h6 className='mb-0 mt-3'>Miriam</h6>
        <p className="section_description">Customer</p>
      </div>
    </div>
   </div>

   <div className="testimonial py-4 px-3">
    <p className="section_description">
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
      Id quasi asperiores laborum velit nobis a ab mollitia similique consequuntur eius qui neque, unde explicabo. 
      Ipsam eligendi quasi eveniet unde aspernatur?
    </p>
    <div className='mt-3 flex align-items-center gap-4'>
      <img src="#" alt="" className='w-25 h-25 rounded-2' />
      <div>
        <h6 className='mb-0 mt-3'>Miriam</h6>
        <p className="section_description">Customer</p>
      </div>
    </div>
   </div>

   <div className="testimonial py-4 px-3">
    <p className="section_description">
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
      Id quasi asperiores laborum velit nobis a ab mollitia similique consequuntur eius qui neque, unde explicabo. 
      Ipsam eligendi quasi eveniet unde aspernatur?
    </p>
    <div className='mt-3 flex align-items-center gap-4'>
      <img src="#" alt="" className='w-25 h-25 rounded-2' />
      <div>
        <h6 className='mb-0 mt-3'>Miriam</h6>
        <p className="section_description">Customer</p>
      </div>
    </div>
   </div>

  </Slider>
  
  
}

export default Testimonials