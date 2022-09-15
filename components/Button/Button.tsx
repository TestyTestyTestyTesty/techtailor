import React from "react";
import { ButtonInterface } from "./ButtonInterafce";
import { ButtonStyles } from "./Button.styled";
import Image from "next/image";
import Link from "next/link";
export default function Button({
    children,
    bgColor,
    textColor,
    chevronLeft,
    chevronRight,
    linkHref = "#",
}: ButtonInterface) {
    return (
        <Link href={linkHref}>
            <ButtonStyles type="button" bgColor={bgColor} textColor={textColor}>
                {chevronLeft && (
                    <Image
                        src="/assets/chevron-left.svg"
                        height={12}
                        width={6}
                        alt="click button"
                    />
                )}
                {children}
                {chevronRight && (
                    <Image
                        src="/assets/chevron-right.svg"
                        height={12}
                        width={6}
                        alt="click button"
                    />
                )}
            </ButtonStyles>
        </Link>
    );
}
