import Image from "next/image";
import React from "react";
import { ScrollingArrowWrapperStyles } from "./ScrollingArrow.styled";

export default function ScrollingArrow() {
    return (
        <ScrollingArrowWrapperStyles>
            <Image
                src="/assets/arrow-orange.svg"
                alt="scroll to next section"
                objectFit="contain"
                height="36"
                width="39"
                priority
            />
        </ScrollingArrowWrapperStyles>
    );
}
