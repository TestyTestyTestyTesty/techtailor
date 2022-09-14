import React from "react";
import { ButtonInterface } from "./ButtonInterafce";
import { ButtonStyles } from "./Button.styled";
export default function Button({
    children,
    bgColor,
    textColor,
}: ButtonInterface) {
    return (
        <ButtonStyles type="button" bgColor={bgColor} textColor={textColor}>
            {children}
        </ButtonStyles>
    );
}
