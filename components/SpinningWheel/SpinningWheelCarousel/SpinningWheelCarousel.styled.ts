import { mediaQueries } from "./../../../styles/mediaQueries";
import { Swiper, SwiperSlide } from "swiper/react";
import styled from "styled-components";

export const SwiperStyles = styled(Swiper)`
    width: 100%;
    height: 100%;
    max-height: 300px;
    ${mediaQueries.md} {
        margin: 60px 0;
        max-height: 450px;
    }
`;

export const SwiperSlideStyles = styled(SwiperSlide)`
    font-family: "Space Grotesk";
    font-style: normal;
    font-weight: 500;
    font-size: 23px;
    line-height: 30px;
    color: ${({ theme }) => theme.textColor};
    border-top: 1px solid ${({ theme }) => theme.bgColorInverted};
    border-bottom: 1px solid ${({ theme }) => theme.bgColorInverted};
    text-align: right;
    display: flex;
    justify-content: flex-start;
    padding: 16px 0;
    align-items: center;
    ${mediaQueries.md} {
        font-size: 40px;
        line-height: 44px;
        padding: 24px 0;
        justify-content: flex-end;
    }
`;
