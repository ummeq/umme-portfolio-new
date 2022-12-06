import React from 'react'
import './testimonials.css';
import dhivakar from '../../assets/testimonials/dhivakar.png';
import hardik from '../../assets/testimonials/hardik.png';
import shashidhar from '../../assets/testimonials/shashidhar.png';
import pooja from '../../assets/testimonials/pooja.png';
import ranjita from '../../assets/testimonials/ranjita.png';
import sreegowri from '../../assets/testimonials/sreegowri.png';

import {  Pagination, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const data = [
  {
      avatar: dhivakar,
      name: 'Dhivakar K',
      id:1,
      review: 'Umme is a Proficient MEAN stack Developer and a Team Player, who extended her expertise by helping her co-workers in developing the application and understanding the business requirements. She has in-depth knowledge on frontend technologies like HTML5, CSS3, JavaScript and frameworks like Angular, Node, Bootstrap, etc. Especially she is good in maintaining the delivery quality by writing unit test cases and resolving the SonarQube issues. Upon which she made it as a practice to her trainees in adopting the best coding practices.',
  },
  {
    id:2,
    avatar: sreegowri,
    name: 'sreegowri N',
    review: 'I had the pleasure of working with Umme for 1.2 years at the Entropik Technologies.She is one of the most dedicated professionals I’ve worked with and is willing to put that extra help whenever you need it. Her expertise as a developer is considerable, and it helped our team come up with more efficient solutions on projects.Her contribution is valuable to the side,and I highly recommend Umme and would love to work with her again.',
  },
  {
    id:2,
    avatar: hardik,
    name: 'Hardik Thakor',
    review: 'I know Umme habiba as a hard working and very serious team player.Umme is a great networker, Great employee with a very strong problem solving skills.Umme is an asset to any company.',
  },
  {
      id:3,
      avatar: pooja,
      name: 'Pooja Rawade',
      review: 'Umme habiba is one of the most valuable people I have ever met. Both smart and professional.Experienced, deadline oriented and intelligent person. She is good at software development and also  has lot of deep technical background..',
  },
  {
    id:4,
    avatar: shashidhar,
    name: 'Shashidhar Naik',
    review: 'Ummehabiba is a fantastic person to work with, and is not only a multi-skilled and insightful colleague, but also an inspiring strategist. Very good person.she is good at software Development and also has lot of deep technical background. Great employee with a very strong problem solving skills. Ummehabiba is an asset to any company.',
  },
  {
    id:5,
    avatar: ranjita,
    name: 'Ranjita Naik',
    review: 'I know Umme Habiba Qadri from past 1 and half years. She is really good at team work and solving problems with patience. She mingle with everybody and build connection. She is good at solving problem, thinks of many ways. She is independent, daring girl I have met. She has interest in learning new things, she do not care is it a big or small. She respect everyone and follow her own path. She is model for me to stay positive. I am glad to work with her as a colleague.',
  },
]

const Testimonials = () => {
  return (
    // <section id='testimonials'>
    <div
    name="testimonials"
    className="bg-gradient-to-b from-gray-800 to-black w-ful  l h-screen"
  >
    <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-9/12 h-full text-white">
      <div>
        <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">
        Testimonials
        </p>
        <p className="py-6">I love to work with these peopele ❤️</p>
      </div>

      <div className="w-9/12 grid place-content-center text-center py-8 px-12 sm:px-0 ">
      <Swiper className="container testimonials__container"
                modules={[Pagination]}
                spaceBetween={40}
                slidesPerView={1}
                pagination={{ clickable: true }}
                >
                  {
                    data.map(({avatar, name, review},index) => {
                      return (
                        <SwiperSlide  key={index} className='text-white from-cyan-500 to-blue-500 testimonials'>
                          <div className="client__avatar">
                            <img src={avatar} alt="Avatar One"/>
                          </div>
                            <h5 className='client__name'>{name}</h5>
                            <small className='client__review'>{review}</small>
                          </SwiperSlide>
                      )
                    })
                  }
                </Swiper> 
      </div>
    </div>
  </div>
  )
}

export default Testimonials