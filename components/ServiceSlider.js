import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import { FreeMode, Pagination } from "swiper";

import { RxFigmaLogo, RxGlobe, RxCode, RxReader, RxLaptop, RxArrowTopRight } from "react-icons/rx";


const serviceData = [
  {
    icon: <RxFigmaLogo />,
    title: 'Design',
    description: 'Designing interfaces for remarkable user experiences.',
  },
  {
    icon: <RxGlobe />,
    title: 'Frontend',
    description: 'Building dynamic, fast, responsive, and scalable websites and apps.',
  },
  {
    icon: <RxCode />,
    title: 'Backend',
    description: 'Building web systems with a focus on security and performance.',
  },
  {
    icon: <RxReader />,
    title: 'Solidity',
    description: 'Integrating more faster and secured methods with blockchain.',
  },
  {
    icon: <RxLaptop />,
    title: 'Hardware',
    description: 'Repairing PCs for peak performance and reliability.',
  },
];

const ServiceSlider = () => {
  return (
    <Swiper
      breakpoints={{
        320: {
          slidesPerView: 1,
          spaceBetween: 15,
        },
        640: {
          slidesPerView: 3,
          spaceBetween: 15,
        },
      }}
      freeMode={true}
      pagination={{
        clickable: true
      }}
      modules={[FreeMode, Pagination]}
      className="h-[240px] sm:h-[340px]"
    >
      {serviceData.map(( item, index ) => {
        return (
          <SwiperSlide key={ index }>
            <div className="bg-[rgba(60,59,63,0.15)] h-max rounded-lg px-6 py-8 flex sm:flex-col gap-x-6 sm:gap-x-0 group cursor-pointer hover:bg-[rgba(97,97,98,0.15)] transition-all duration-300">
              <div className="text-4xl text-accent mb-4">{item.icon}</div>
              <div className="mb-8">
                <div className="mb-2 text-lg">{item.title}</div>
              <p className="max-w-[350px] leading-normal]">{item.description}</p>
              </div>
              <div className="text-3xl">
                <RxArrowTopRight
                className="group-hover:rotate-45 group-hover:text-accent transition-all duration-300" />
              </div>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default ServiceSlider;
