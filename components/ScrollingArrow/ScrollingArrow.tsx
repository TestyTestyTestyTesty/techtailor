import Image from "next/image";
import React from "react";
import {
    HeroBannerArrowStyles,
    ScrollingArrowStyles,
} from "./ScrollingArrow.styled";

export default function ScrollingArrow({ className }: any) {
    return (
        <ScrollingArrowStyles className={className}>
            <Image
                src="/assets/arrow-orange.svg"
                alt="scroll to next section"
                objectFit="contain"
                height="36"
                width="39"
                priority
            />
        </ScrollingArrowStyles>
    );
}
