import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper";
import {
    SwiperSlideStyles,
    SwiperStyles,
} from "./SpinningWheelCarousel.styled";
export default function SpiningWheelCarousel() {
    return (
        <SwiperStyles
            direction={"vertical"}
            slidesPerView={5}
            loop={false}
            spaceBetween={0}
            grabCursor={true}
            autoplay={{
                delay: 1,
                disableOnInteraction: false,
            }}
            freeMode={true}
            speed={3000}
            modules={[Autoplay]}
        >
            <SwiperSlideStyles>Highly motivated individuals</SwiperSlideStyles>
            <SwiperSlideStyles>Over 150 IT specialities</SwiperSlideStyles>
            <SwiperSlideStyles>Veryfied, top-class talents</SwiperSlideStyles>
            <SwiperSlideStyles>Individual Approach</SwiperSlideStyles>
            <SwiperSlideStyles>Global community</SwiperSlideStyles>
            <SwiperSlideStyles>Veryfied, top-class talents</SwiperSlideStyles>
        </SwiperStyles>
    );
}
