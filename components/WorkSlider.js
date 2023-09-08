import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import { Pagination } from "swiper";

import { BsArrowRight } from "react-icons/bs";
import Image from "next/image";
import Link from "next/link";


 export const workSlides = {
  slides: [
    {
      images: [
        {
          title: 'title',
          path: '/prompt.jpg',
          link: 'https://promptopia-halfdobis.vercel.app',
        },
        {
          title: 'title',
          path: '/fortuna.jpg',
          link: 'https://divinedraw.com',
        },
        {
          title: 'title',
          path: '/abound.jpg',
          link: 'https://aboundconsult.com',
        },
        {
          title: 'title',
          path: '/halfdobis.jpg',
          link: '/',
        },
      ],
    },
    {
      images: [
        {
          title: 'title',
          path: '/checkout.jpg',
          link: 'https://dribbble.com/shots/22314893-Checkout-Page',
        },
        {
          title: 'title',
          path: '/profile.jpg',
          link: 'https://dribbble.com/shots/22350497-User-Profile',
        },
        {
          title: 'title',
          path: '/calculator.jpg',
          link: 'https://dribbble.com/shots/22327947-Calculation-Element',
        },
      ],
    },
  ],
};

const WorkSlider = () => {
  return (
    <Swiper
    spaceBetween={10}
    pagination={{
      clickable: true
    }}
    modules={[Pagination]}
    className="h-[280px] sm:h-[480px]"
  >
    {workSlides.slides.map(( slide, index ) => {
      return (
        <SwiperSlide key={ index }>
         <div className="grid grid-cols-2 grid-rows-2 gap-4 cursor-pointer">
          {slide.images.map(( image, index ) => {
            return (
              <div className="relative rounded-lg overflow-hidden flex-items-center justify-center group" key={index}>
              <div className="flex items-center justify-center relative overflow-hidden group">
                <Image
                src={image.path}
                width={500}
                height={300}
                alt='work'
                priority={true}
                />
                <div className="absolute inset-0 bg-gradient-to-l from-transparent via-[#0d0d0d] to-[#050507] opacity-0 group-hover:opacity-80 transition-all duration-700"></div>
                <div className="absolute bottom-0 translate-y-full group-hover:-translate-y-10 group-hover:xl:-translate-y-20 transition-all duration-300">
                  <Link href={image.link} target="_blank">
                <div className="flex items-center gap-x-2 text=[13px] tracking-[0.2em]">
                  <div className="delay-100">LIVE</div>
                  <div className="translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-150">PROJECT</div>
                  <div className="text-xl translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-200">
                    <BsArrowRight />
                  </div>
                </div>
                  </Link>
                </div>
              </div>
            </div>
            );
          })}
         </div>
        </SwiperSlide>
      );
    })}
  </Swiper>
  );
};

export default WorkSlider;
