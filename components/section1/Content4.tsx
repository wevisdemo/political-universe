import React, { useState } from 'react'
import { CATEGORY_INFO, LANDING_SVG } from '../utils'
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

const CategorySlide = () => {

  // const pagination = {
  //   clickable: true,
  //   renderBullet: function (index: number, className: string) {
  //     return '<span class="' + className + ' swiper-dot">' + (index + 1) + "</span>";
  //   },

  // };

  const content = [
    {
      person: 'ศาลรัฐธรรมนูญ',
      num_event: 223,
    },
    {
      person: 'ประวิตร วงษ์สุวรรณ',
      num_event: 233,
    },
    {
      person: 'ยิ่งลักษณ์ ชินวัตร',
      num_event: 166,
    }

  ]
  // use the `useState` hook instead of `useRef`
  const [el, setEl] = useState<HTMLElement | null>(null)
  const [prevEl, setPrevEl] = useState<HTMLElement | null>(null)
  const [nextEl, setNextEl] = useState<HTMLElement | null>(null)

  return (
    <div className='mb-[15px]'>
      <div className='flex flex-row justify-center items-center gap-x-[21px] py-[15px]'>
        <div ref={(node) => setPrevEl(node)}
          className='cursor-pointer'>
          <svg width={5} height={8} viewBox="0 0 5 8" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5 0L5 8L-1.74846e-07 4L5 0Z" fill="white" />
          </svg>
        </div>
        <div ref={(node) => setEl(node)} className='!w-fit inline-flex gap-x-[8px]' />
        <div ref={(node) => setNextEl(node)}
          className='cursor-pointer'>
          <svg width={5} height={8} viewBox="0 0 5 8" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M-3.49691e-07 0L0 8L5 4L-3.49691e-07 0Z" fill="white" />
          </svg>
        </div>
      </div>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 4320,
          disableOnInteraction: false,

        }}
        pagination={{
          el, clickable: true, renderBullet: function (index: number, className: string) {
            return '<span class="' + className + ' swiper-dot">' + (index + 1) + "</span>";
          }
        }}
        navigation={{ prevEl, nextEl }
        }
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {
          CATEGORY_INFO.map((data, index) => (
            <SwiperSlide key={`sw-${index}`}>
              <div className={`inline-flex justify-center items-center 
            w-[280px] desktop:w-full py-[8px] ${data.bgcolor}
            rounded-[4px] mb-[6px]
            text-neutral-super-black`}>
                <div className='w-[37px] h-[37px]'>{data.icon}</div>
                <div className='wv-kondolar wv-bold wv-h9'>{data.title}</div>
              </div>
              <div className='flex flex-col gap-y-[6px]'>
                {content.map((data, index) => (
                  <div key={`${data.person}`}
                    className='border-[1px] border-solid border-neutral-super-white p-[10px] rounded-[4px]
                flex flex-row items-center gap-[8px]'>
                    <div className='w-[24px] h-[24px] 
                  wv-ibmplex wv-bold wv-b6 leading-[24px] align-middle
                  text-neutral-super-black text-center bg-neutral-super-white'>{index + 1}</div>
                    <div className='w-[64px] h-[64px] border-party-01 rounded-full border-[4px]' />
                    <div className='wv-ibmplex text-left'>
                      <div className='wv-bold wv-b5 leading-[150%]'>{data.person}</div>
                      <div className='wv-b6 leading-[150%]'>{data.num_event} เหตุการณ์</div>
                      <div className='mt-[7px] p-[4px] inline-flex items-center gap-[4px]'>
                        <div className='wv-u4 wv-semibold'>ดูเหตุการณ์</div>
                        <svg width={5} height={8} viewBox="0 0 5 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M-3.49691e-07 0L0 8L5 4L-3.49691e-07 0Z" fill="white" />
                        </svg>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </SwiperSlide>
          ))
        }
      </Swiper>
    </div>
  )
}

const Content4 = () => {
  const CONTENT = [
    {
      title: "เข้าใจภาพรวม",
      description: <div>ดูภาพรวมของการเมืองไทย 10<br />กว่าปีที่ผ่านมา ว่าเป็นอย่างไรบ้าง ?</div>,
      content:
        <div>
          <LANDING_SVG />
          <div className='border-dashed border-t-[1px] border-t-white w-full
            py-[10px] inline-flex justify-center items-center gap-x-[8px]'>
            <span>เข้าใจภาพรวมของเหตุการณ์</span>
            <svg width={5} height={9} viewBox="0 0 5 9" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M-3.49691e-07 0.5L0 8.5L5 4.5L-3.49691e-07 0.5Z" fill="white" />
            </svg>
          </div>
        </div>,
    },
    {
      title: "ดูรายบุคคล",
      description: <div>ผู้มีบทบาททางการเมืองไทยว่า 10<br />กว่าปีที่ผ่านมาทำอะไรไว้บ้าง ?</div>,
      content:
        <div className='relative'>
          <CategorySlide />
          <div className='border-dashed border-t-[1px] border-t-white w-full
        py-[10px] inline-flex justify-center items-center gap-x-[8px]'>
            <span>เข้าใจภาพรวมของเหตุการณ์</span>
            <svg width={5} height={9} viewBox="0 0 5 9" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M-3.49691e-07 0.5L0 8.5L5 4.5L-3.49691e-07 0.5Z" fill="white" />
            </svg>
          </div>
        </div>,
    },
  ]
  return (
    <div className='flex flex-col items-center text-center
    max-w-[890px] mx-auto mb-[140px]'>
      <div className='flex flex-col gap-y-[30px] w-full'>
        <div className='wv-kondolar wv-h4 wv-black leading-[125%]'>
          เลือกสำรวจ
        </div>
        <div className='flex flex-row gap-[20px] text-neutral-super-black'>
          {CONTENT.map((data, index) => (
            <div key={`desc-${index}`}
              className='bg-neutral-super-black rounded-[10px] border-[1px] border-neutral-super-white
            px-[40px] py-[25px] text-neutral-super-white
            flex flex-col items-center desktop:w-1/2'>
              <div className='wv-kondolar wv-h6 wv-bold
                 !mb-[10px] text-center'>
                {data.title}
              </div>
              <div className='wv-kondolar wv-h8 leading-[150%] text-center !mb-[27px]'>
                {data.description}
              </div>
              <div className='flex-grow-0 w-full'>
                {data.content}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Content4