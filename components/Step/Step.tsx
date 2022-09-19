import Link from "next/link";
import React from "react";
import Button from "../Button/Button";
import { ButtonBorderStyles } from "../Button/Button.styled";
import {
    ButtonStyles,
    StepHeadingStyles,
    StepNumberStyles,
    StepParagraphStyles,
    StepWrapperStyles,
} from "./Step.styled";
import { StepInterface } from "./StepInterafce";

export default function Step({
    index,
    number,
    title,
    link,
    text,
    activeSlide,
}: StepInterface) {
    return (
        <StepWrapperStyles>
            <StepNumberStyles isActive={index === activeSlide}>
                {number}
            </StepNumberStyles>
            <StepHeadingStyles isActive={index === activeSlide}>
                {title}
            </StepHeadingStyles>
            <StepParagraphStyles isActive={index === activeSlide}>
                {text}
            </StepParagraphStyles>
            {link && (
                <ButtonStyles
                    isActive={index === activeSlide}
                    linkHref={link.href}
                >
                    <a>{link.text}</a>
                </ButtonStyles>
            )}
        </StepWrapperStyles>
    );
}
