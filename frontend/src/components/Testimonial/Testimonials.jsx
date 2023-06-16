import React from 'react'
import Slider from 'react-slick'
import ava01 from '../../assets/images/ava-1.jpg'
import ava02 from '../../assets/images/ava-1.jpg'
import ava03 from '../../assets/images/ava-1.jpg'

const Testimonials = () => {
   const settings = {
      dots:true,
      infinite:true,
      autoplay:true,
      speed:1000,
      swipeToSlide:true,
      autoplaySpeed:2000,
      slidesToShow:3,

      responsive: [
         {
            breakpoint: 992,
            settings: {
               slidesToShow: 2,
               slidesToScroll: 1,
               infinite: true,
               dots: true,
            },
            breakpoint: 576,
            settings: {
               slidesToShow: 1,
               slidesToScroll: 1,
               infinite: true,
               dots: true,
            },
         }
      ]
   }

   return <Slider {...settings}>
      <div className="testimonial py-4 px-3">
         <p>"Your travel website is a breath of fresh air! The visually appealing design, combined with authentic user reviews, made me feel confident in my travel choices. It's now my go-to platform for planning my trips."
         </p>

         <div className='d-flex align-items-center gap-4 mt-3'>
            <img src={ava01} className='w-25 h-25 rounded-2' alt="" />
            <div>
               <h6 className='mb-0 mt-3'>John </h6>
               <p>Customer</p>
            </div>
         </div> 
      </div>

      <div className="testimonial py-4 px-3">
         <p>"I stumbled upon your travel website and I must say, it's a hidden gem! The user-friendly interface and detailed information on destinations helped me plan my dream vacation effortlessly. Highly recommended!"
         </p>

         <div className='d-flex align-items-center gap-4 mt-3'>
            <img src={ava02} className='w-25 h-25 rounded-2' alt="" />
            <div>
               <h6 className='mb-0 mt-3'>Harry</h6>
               <p>Customer</p>
            </div>
         </div> 
      </div>

      <div className="testimonial py-4 px-3">
         <p>"I've used numerous travel websites before, but yours stands out from the crowd. The personalized recommendations and insightful tips from fellow travelers added a personal touch to my itinerary. Kudos to the team behind this fantastic platform!"
         </p>

         <div className='d-flex align-items-center gap-4 mt-3'>
            <img src={ava03} className='w-25 h-25 rounded-2' alt="" />
            <div>
               <h6 className='mb-0 mt-3'>Tom</h6>
               <p>Customer</p>
            </div>
         </div> 
      </div>

      <div className="testimonial py-4 px-3">
         <p>"Your travel website exceeded my expectations. The hassle-free booking process and seamless navigation made it a breeze to find the best deals. Thanks to your website, I had an unforgettable vacation experience!"
         </p>

         <div className='d-flex align-items-center gap-4 mt-3'>
            <img src={ava03} className='w-25 h-25 rounded-2' alt="" />
            <div>
               <h6 className='mb-0 mt-3'>Mr Robert</h6>
               <p>Customer</p>
            </div>
         </div> 
      </div>
   </Slider>
}

export default Testimonials