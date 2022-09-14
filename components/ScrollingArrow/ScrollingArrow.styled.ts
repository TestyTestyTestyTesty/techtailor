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
export const ScrollingArrowWrapperStyles = styled.div`
    display: flex;
    align-self: center;
    cursor: pointer;
    animation: ${rotate} 2s linear infinite;
    position: absolute;
    bottom: 5%;
    right: 0;
    left: 0;
    margin: auto;
    text-align: center;
    width: 36px;
`;
