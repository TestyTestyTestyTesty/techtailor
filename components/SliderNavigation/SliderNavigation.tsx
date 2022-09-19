import React from "react";
import SliderPagination from "../SliderPagination/SliderPagination";
import {
    ArrowLeftStyles,
    ArrowRightStyles,
    SliderNavigationWrapperStyles,
} from "./SliderNavigation.styled";
import { SliderNavigationInterface } from "./SliderNavigationInterafce";

export default function SliderNavigation({
    slidesNum,
    onPrevClick,
    onNextClick
}: SliderNavigationInterface) {
    return (
        <SliderNavigationWrapperStyles>
            <ArrowLeftStyles onClick={onPrevClick}/>
            <SliderPagination slidesNum={slidesNum} />
            <ArrowRightStyles onClick={onNextClick}/>
        </SliderNavigationWrapperStyles>
    );
}
