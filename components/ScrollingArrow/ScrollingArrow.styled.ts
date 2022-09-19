import Image from "next/image";
import styled, { keyframes } from "styled-components";

const rotate = keyframes`
  0% {
    transform: translateY(0);
  }

  50% {
    transform: translateY(10px)
  }

  100% {
    transform: translateY(0);
  }
`;
export const ScrollingArrowStyles = styled.div`
    display: flex;
    align-self: center;
    cursor: pointer;
    animation: ${rotate} 2s linear infinite;
    text-align: center;
    width: 36px;
    height: 39px;
`;

export const HeroBannerArrowStyles = styled(ScrollingArrowStyles)`
    position: absolute;
    bottom: 5%;
    right: 0;
    left: 0;
    margin: auto;
`;
