import React, { useId, useRef, useState } from "react";
import { Autoplay, Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import type SwiperCore from 'swiper';
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Step from "../../Step/Step";
import { prefixZeroBeforeNumber } from "../../../utils/indexNumber";
import ArrowLeft from "../../IconsComponents/ArrowLeft";
import SliderNavigation  from "../../SliderNavigation/SliderNavigation";

export default function StepsCarousel({ steps }: any) {
    const swiperRef = useRef<SwiperCore>()
    const id = useId();
    const [activeSlide, setActiveSlide] = useState(0);
    return (
        <Swiper
            slidesPerView={4}
            spaceBetween={70}
            centeredSlides={true}
            pagination={false}
            modules={[Navigation, Pagination, Autoplay]}
            autoplay={{
                delay: 2500,
                disableOnInteraction: true,
            }}
            onBeforeInit={(swiper) => {
                swiperRef.current = swiper
              }}         
            onSlideChange={(props) => 
                {
                    console.log(swiperRef.current);
                    
                    setActiveSlide(props.activeIndex)
                }
            }
        >
            <SliderNavigation onPrevClick={() => swiperRef.current?.slidePrev()} onNextClick={() => swiperRef.current?.slideNext()}/>
            {steps.map((step: any, index: number) => {
                return (
                    <SwiperSlide key={`${id}-${index}`}>
                        <Step
                            index={index}
                            number={prefixZeroBeforeNumber(index + 1)}
                            title={step.title}
                            text={step.text}
                            link={step.link}
                            activeSlide={activeSlide}
                        />
                    </SwiperSlide>
                );
            })}
        </Swiper>
    );
}
