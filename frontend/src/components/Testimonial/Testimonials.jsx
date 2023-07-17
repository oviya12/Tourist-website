// testimonial jsx
import React from "react";
import Slider from 'react-slick'
import ava01 from '../../assets/images/ava-1.jpeg'
import ava02 from '../../assets/images/ava-2.jpeg'
import ava03 from '../../assets/images/ava-3.jpeg'
const Testimonials = () =>{
    const settings={
      dots:true,
      infinite:true,
      autoplay:true,
      speed:1000,
      swipeToSlide:true,
      autoplaySpeed:2000,
      slidesToShow:3,
      responsive:[
        {
            breakpoint: 992,
            settings:{
                slidesToShow:2,
                slidesToScroll:1,
                infinite: true,
                dots: true,
            },
        } ,
        {
            breakpoint: 576,
            settings:{
                slidesToShow:1,
                slidesToScroll:1,
            },
        },
        ]
    }
return (<Slider {...settings}>
  <div className="testimonial py-4 px-3">
    <p>Wings of Wanderlust really a fabulous website to make our journey a memorable one. Their service is great making us feel comfort and fascinating throughout our trip </p>
    <div className="d-flex align-items-center gap-4 mt-3">
        <img src={ava01} className="w-25 h-25 rounded-2" alt=" "/>
        <div>
            <h6 className="mb-0 mt-3">Nalina</h6>
            <p>Customer</p>
        </div>
    </div>
    </div>  
   <div className="testimonial py-4 px-3">
    <p> This website is great and their service is really a notable one!! I appreciate their efforts to fullfil our trip dream </p>
    <div className="d-flex align-items-center gap-4 mt-3">
        <img src={ava02} className="w-25 h-25 rounded-2" alt=" "/>
        <div>
            <h6 className="mb-0 mt-3">Sumithra</h6>
            <p>Customer</p>
        </div>
    </div>
    </div>  
  
 <div className="testimonial py-4 px-3">
    <p> I really enjoyed the trip, All the facilities were available. Wings of Wanderlust team really made us feel WOW!! </p>
    <div className="d-flex align-items-center gap-4 mt-3">
        <img src={ava03} className="w-25 h-25 rounded-2" alt=" "/>
        <div>
            <h6 className="mb-0 mt-3">Saniya</h6>
            <p>Customer</p>
        </div>
    </div>
    </div>  
    <div className="testimonial py-4 px-3">
    <p> I really enjoyed the trip, All the facilities were available. Wings of Wanderlust team really made us feel WOW!! </p>
    <div className="d-flex align-items-center gap-4 mt-3">
        <img src={ava03} className="w-25 h-25 rounded-2" alt=" "/>
        <div>
            <h6 className="mb-0 mt-3">Saniya</h6>
            <p>Customer</p>
        </div>
    </div>
    </div>  
    <div className="testimonial py-4 px-3">
    <p> I really enjoyed the trip, All the facilities were available. Wings of Wanderlust team really made us feel WOW!! </p>
    <div className="d-flex align-items-center gap-4 mt-3">
        <img src={ava03} className="w-25 h-25 rounded-2" alt=" "/>
        <div>
            <h6 className="mb-0 mt-3">Saniya</h6>
            <p>Customer</p>
        </div>
    </div>
    </div>  
    <div className="testimonial py-4 px-3">
    <p> I really enjoyed the trip, All the facilities were available. Wings of Wanderlust team really made us feel WOW!! </p>
    <div className="d-flex align-items-center gap-4 mt-3">
        <img src={ava03} className="w-25 h-25 rounded-2" alt=" "/>
        <div>
            <h6 className="mb-0 mt-3">Saniya</h6>
            <p>Customer</p>
        </div>
    </div>
    </div>  




</Slider>)
};
export default Testimonials;