import { mediaQueries } from "../../styles/mediaQueries";
import styled from "styled-components";
import ArrowLeft from "../../public/assets/arrow-left.svg";
import ArrowRight from "../../public/assets/arrow-right.svg";
export const SliderNavigationWrapperStyles = styled.div`
display:flex
align-items:center
justify-content:center;
`;

export const ArrowLeftStyles = styled(ArrowLeft)`
    cursor: pointer;
    transition: all 0.3s;
    &:hover {
        path {
            stroke: ${({ theme }) => theme.accentColor1};
        }
    }
`;
export const ArrowRightStyles = styled(ArrowRight)`
    cursor: pointer;
    transition: all 0.3s;
    &:hover {
        path {
            stroke: ${({ theme }) => theme.accentColor1};
        }
    }
`;
