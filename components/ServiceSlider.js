import {Swiper , SwiperSlide} from 'swiper/react';
import { useRouter } from 'next/router';

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

import { DiAndroid , DiApple } from "react-icons/di";
import { FaLaptopCode , FaDatabase } from "react-icons/fa";

import {
  RxPencil2, RxReader, RxArrowTopRight} from "react-icons/rx";

import SwiperCore ,{ FreeMode , Pagination } from 'swiper';

SwiperCore.use([FreeMode, Pagination]);

//services data
const serviceData = [
  {
    icon: <DiApple />,
    title: 'IOS apks',
    description: 'Your Ideas into a elegant application which will work on IOS devices',
  },
  {
    icon: <RxPencil2 />,
    title: 'Design',
    description: 'Design will adapt to various devices, providing an optimal user experience',
  },
  {
    icon: <FaLaptopCode />,
    title: 'Development',
    description: 'Prioritizing user experience (UX) and user interface (UI) devlopment',
  },
  {
    icon: <RxReader />,
    title: 'Copywriting',
    description: 'It includes caption,data-entry,script writing using AI tool and excels',
  },
  {
    icon: <DiAndroid />,
    title: 'Android apks',
    description: 'Can design scalabe android apps which will increase your e-buisness',
  },
  {
    icon: <FaDatabase />,
    title: 'Database',
    description: 'Ensuring a effecient backend system using Firebase, NodeJS',
  },
];


const ServiceSlider = () => {
  
  const history = useRouter();
  const handleClick = () => {
    history.push('/contact');
  }

  return( 
  <Swiper
  freeMode={true}
  pagination={{ clickable: true }} 
  
  modules={{FreeMode, Pagination}}

  breakpoints={{
    320: {
      slidesPerView: 1,
      spaceBetween: 15,
    },
    640: {
      slidesPerView: 3,
      spaceBetween: 15,
    }
  }}
  className='h-[240px] sm:h-[340px]'
  >
    {
      serviceData.map((item,index) => {
        return (
          <SwiperSlide key={index}>
            <div className='bg-[rgba(65,47,123,0.15)] h-max rounded-lg px-6 py-8 flex sm:flex-col gap-x-6 sm:gap-x-0 group cursor-pointer hover:border-2 hover:border-accent hover:bg-[rgba(89,65,169,0.15)] transition-all duration-300'>
              <div className='text-4xl text-accent mb-4'>{item.icon}</div>
            <div className='mb-8'>
            <div className='mb-2 text-lg'>{item.title}</div>
            <p className='max-w-[350px] leading-normal'>{item.description}</p>
            </div>
            <div className='text-3xl'>
              <RxArrowTopRight className='group-hover:rotate-45 group-hover:text-accent transition-all duration-300' onClick={handleClick}/>
            </div>
            </div>
          </SwiperSlide>
        )
        })
    }
  </Swiper>
  )
};

export default ServiceSlider;
