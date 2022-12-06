import React from "react";
import {  Pagination, A11y } from 'swiper';
import AVTR1 from '../assets/testimonials/dhivakar.png';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const Testimonials = () => {
    const testimonialsData = [
        {
            avatar: AVTR1,
            name: 'Tine Snow',
            id:1,
            review: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias, debitis quo? Magnam quae facere fugiat excepturi recusandae officiis',
        },
        {
          id:2,
          avatar: AVTR1,
          name: 'Tine Snow',
          review: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias, debitis quo? Magnam quae facere fugiat excepturi recusandae officiis',
        },
        {
            id:3,
            avatar: 'k',
            name: 'Tine Snow',
            review: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias, debitis quo? Magnam quae facere fugiat excepturi recusandae officiis',
        },
        {
          id:4,
          avatar: 't1',
          name: 'Tine Snow',
          review: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias, debitis quo? Magnam quae facere fugiat excepturi recusandae officiis',
        },
        {
          id:5,
          avatar: 'v',
          name: 'Tine Snow',
          review: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias, debitis quo? Magnam quae facere fugiat excepturi recusandae officiis',
        },
        {
          avatar: 't',
          name: 'Tine Snow',
          review: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias, debitis quo? Magnam quae facere fugiat excepturi recusandae officiis',
        },
      ];
  
    return (
      <div
          name="experience"
          className="bg-gradient-to-b from-gray-800 to-black w-full h-screen"
        >
          <div>
           <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">
               Experience
             </p>
            <p className="py-6">These are the technologies I've worked with</p>
          </div>
            <Swiper
            modules={[Pagination]}
            spaceBetween={40}
            slidesPerView={1}
            pagination={{ clickable: true }}
            >
              <SwiperSlide>Slide 1</SwiperSlide>
              <SwiperSlide>Slide 2</SwiperSlide>
              <SwiperSlide>Slide 3</SwiperSlide>
              <SwiperSlide>Slide 4</SwiperSlide>
              ...
            </Swiper>
        </div>
          
    //   <div
    //     name="experience"
    //     className="bg-gradient-to-b from-gray-800 to-black w-full h-screen"
    //   >
    //     <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
    //       <div>
    //         <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">
    //           Experience
    //         </p>
    //         <p className="py-6">These are the technologies I've worked with</p>
    //       </div>
  
    //       {/* <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0"> */}
    //       <Swiper className="container testimonials__container"
    //    modules={[Pagination]}
    //    spaceBetween={40}
    //    slidesPerView={1}
    //    pagination={{ clickable: true }}
    //    >
    //     {
    //       testimonialsData.map(({avatar, name, review},index) => {
    //         return (
    //           <SwiperSlide  key={index} className='testimonials'>
    //             <div className="client__avatar">
    //               <img src={avatar} alt="Avatar One"/>
    //             </div>
    //               <h5 className='client__name'>{name}</h5>
    //               <small className='client__review'>{review}</small>
    //             </SwiperSlide>
    //         )
    //       })
    //     }
    //   </Swiper>
    //         {/* {techs.map(({ id, src, title, style, expType }) => (
    //           <div
    //             key={id}
    //             className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
    //           >
    //             <img src={src} alt="" className="w-20 mx-auto" />
    //             <p className="mt-4">{title}</p>
    //             <small>{expType}</small>
    //           </div>
    //         ))} */}
    //       {/* </div> */}
    //     </div>
    //   </div>
    );
  };

export default Testimonials;
