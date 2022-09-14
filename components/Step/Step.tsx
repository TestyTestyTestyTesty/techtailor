import Link from "next/link";
import React from "react";
import {
    StepHeadingStyles,
    StepNumberStyles,
    StepParagraphStyles,
    StepWrapperStyles,
} from "./Step.styled";
import { StepInterface } from "./StepInterafce";

export default function Step({ number, title, link, text }: StepInterface) {
    return (
        <StepWrapperStyles>
            <StepNumberStyles>{number}</StepNumberStyles>
            <StepHeadingStyles>{title}</StepHeadingStyles>
            <StepParagraphStyles>{text}</StepParagraphStyles>
            {link && (
                <Link href={link.href}>
                    <a>{link.text}</a>
                </Link>
            )}
        </StepWrapperStyles>
    );
}
