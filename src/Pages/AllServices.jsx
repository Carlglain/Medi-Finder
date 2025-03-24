import React from 'react'
import  "./App.css"
import ServiceOffered from "../Components/ServiceOffered";
import drugs from "../Images/drugs.jpg"
import drug1 from "../Images/pharmcy1.jpeg"
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import {Navigation,Pagination,Autoplay,Scrollbar,A11y} from "swiper/modules"
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"
import "swiper/css/scrollbar"
import "swiper/css/autoplay"
function AllServices() {
  
  return (
    <Swiper
    
    modules={[Pagination, Scrollbar, A11y,Autoplay]}
    spaceBetween={50}
    
    autoplay
    pagination={{ clickable: true }}
    scrollbar={{ draggable: true }}
    onSwiper={(swiper) => console.log(swiper)}
    onSlideChange={() => console.log('slide change')}
    breakpoints={{
        640: {
          slidesPerView: 1, // 1 slide for small screens
        },
        768: {
          slidesPerView: 2, // 2 slides for medium screens
        },
        1024: {
          slidesPerView: 2, // 3 slides for larger screens
        },
      }
    }
  > 
      
   <SwiperSlide> <ServiceOffered link="#" image={drugs} title="Convinience" content="Discover the power of convenience with MediFinder! 🌟" /></SwiperSlide>
   <SwiperSlide> <ServiceOffered link="/search" image={drugs} title="Easy Search" content="Explore active pharmacies, view available medications, and unlock a
        world of healthcare resources—all at your fingertips! " /></SwiperSlide>
    <SwiperSlide><ServiceOffered link="/medics" image={drug1} title="View Medications" content="You can view medications in each pharmacy and amazingly the prices." /></SwiperSlide> 
    <SwiperSlide> <ServiceOffered link="/emergency" image={drug1} title="Emergency" content="Save and Call in case of Emergency the Emergency contacts of the pharmacy" /></SwiperSlide> 

 
</Swiper>
  )
}

export default AllServices
