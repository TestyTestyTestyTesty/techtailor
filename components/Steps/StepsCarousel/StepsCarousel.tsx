import React, { useId, useRef, useState } from "react";
import { Autoplay, Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Step from "../../Step/Step";
import { prefixZeroBeforeNumber } from "../../../utils/indexNumber";
import SliderNavigation from "../../SliderNavigation/SliderNavigation";
import {
    ArrowLeftStyles,
    ArrowRightStyles,
    SliderNavigationWrapperStyles,
} from "../../SliderNavigation/SliderNavigation.styled";
import SliderPagination from "../../SliderPagination/SliderPagination";
import ArrowLeft from "../../IconsComponents/ArrowLeft";

export default function StepsCarousel({ steps }: any) {
    const navigationPrev = useRef<HTMLDivElement>(null);
    const navigationNext = useRef<HTMLDivElement>(null);
    const id = useId();
    const [activeSlide, setActiveSlide] = useState(0);
    return (
        <Swiper
            slidesPerView={4}
            spaceBetween={70}
            centeredSlides={true}
            navigation={{
                prevEl: navigationPrev.current!, // Assert non-null
                nextEl: navigationNext.current!, // Assert non-null
            }}
            pagination={false}
            modules={[Navigation, Pagination, Autoplay]}
            autoplay={{
                delay: 2500,
                disableOnInteraction: true,
            }}
            onSlideChange={(props) => setActiveSlide(props.activeIndex)}
        >
            <ArrowLeft ref={navigationPrev} />

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
