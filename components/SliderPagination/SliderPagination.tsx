import React from "react";
import { SliderPaginationWrapperStyles } from "./SliderPagination.styled";

export default function SliderPagination({ slidesNum }: any) {
    return (
        <SliderPaginationWrapperStyles>
            <p>asd {slidesNum}</p>
        </SliderPaginationWrapperStyles>
    );
}
