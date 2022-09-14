import Image from "next/image";
import React from "react";
import Button from "../Button/Button";
import ScrollingArrow from "../ScrollingArrow/ScrollingArrow";
import {
    HeroContentStyles,
    HeroHeadingStyles,
    HeroImageWrapperStyles,
    HeroParagraphStyles,
    HeroWrapperStyles,
} from "./HeroBanner.styled";

export default function HeroBanner() {
    return (
        <HeroWrapperStyles>
            <HeroContentStyles>
                <HeroHeadingStyles>
                    Get the Right People <br /> For Your IT Project
                </HeroHeadingStyles>
                <HeroParagraphStyles>
                    We believe a success dependents on people passionate about
                    what they do. With 5K+ specialists in our network Techtalior
                    provides IT Talents who are thrilled about working for you,
                    scaling-up your growth.
                </HeroParagraphStyles>
                <Button>Hire a team</Button>
            </HeroContentStyles>
            <HeroImageWrapperStyles>
                <Image
                    src="/assets/Globe.svg"
                    alt="Globe"
                    objectFit="contain"
                    height="630"
                    width="630"
                    priority
                />
            </HeroImageWrapperStyles>
            <ScrollingArrow />
        </HeroWrapperStyles>
    );
}
