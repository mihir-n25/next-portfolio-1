// data
const workSlides = {
  slides: [
    {
      images: [
        {
          title: '3D Iphone',
          path: '/rim3.png',
        },
        {
          title: 'KBC FullStack',
          path: '/rim4.png',
        },
        {
          title: '3D HomePage',
          path: '/rim2.png',
        },
        {
          title: 'VideoHub ChakraUI',
          path: '/rim7.png',
        },
      ],
    },
    {
      images: [
        {
          title: 'MirTube FullStack',
          path: '/rim9.png',
        },
        {
          title: 'FrontEnd Canva',
          path: '/rim1.png',
        },
        {
          title: 'React ChakraUI',
          path: '/rim5.png',
        },
        {
          title: 'Netflix Frontend',
          path: '/rim6.png',
        },
      ],
    },
  ],
};

import {Swiper , SwiperSlide} from 'swiper/react';
import Image from 'next/image';
import 'swiper/css';
import 'swiper/css/pagination';

import SwiperCore ,{ FreeMode , Pagination } from 'swiper';
SwiperCore.use([Pagination]);

import {BsArrowRight} from 'react-icons/bs'

const WorkSlider = () => {
  return( 
  <Swiper
  pagination={{ clickable: true }} 
  spaceBetween={10}
  modules={{FreeMode, Pagination}}
  className='h-[280px] sm:h-[480px]'
  >
    {
      workSlides.slides.map((slide,index) => {
        return (
          <SwiperSlide key={index}>
            <div className='grid grid-cols-2 grid-rows-2 gap-4 cursor-pointer'>
              {slide.images.map((image,index) => {
                return (
                  <div className='relative rounded-lg overflow-hidden flex items-center justify-center group'
                  key={index}
                  >
                    <div className='flex items-center justify-center relative overflow-hidden group'>
                      <Image src={image.path} width={500} height={300} />
                      <div className='absolute inset-0 bg-gradient-to-l from-transparent via-[#e838cc] to-[#4a22bd] opacity-0 group-hover:opacity-80 transition-all duration-700'></div>
                      <div className='absolute bottom-0 translate-y-full group-hover:-translate-y-10  group-hover:xl:-translate-y-20 transition-all duration-300'>
                        <div className='flex items-center gap-x-2 text-[13px] tracking-[0.2em]'>
                          <div className='delay-00'>
                          {image.title}
                          </div>
                          <div className='translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-150'>Project</div>
                          <div className='text-xl translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 elay-100'><BsArrowRight/></div>
                        </div>
                      </div>
                      </div>
                  </div>
                )
              })}
            </div>
          </SwiperSlide>
        )
        })
    }
  </Swiper>
  )
};

export default WorkSlider;
