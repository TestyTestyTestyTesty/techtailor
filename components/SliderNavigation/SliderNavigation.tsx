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
}: SliderNavigationInterface) {
    return (
        <SliderNavigationWrapperStyles>
            <ArrowLeftStyles />
            <SliderPagination slidesNum={slidesNum} />
            <ArrowRightStyles />
        </SliderNavigationWrapperStyles>
    );
}
