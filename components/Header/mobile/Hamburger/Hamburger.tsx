import Image from "next/image";
import React from "react";
import { HamburgerWrapperStyles } from "./Hamburger.styled";
import { HamburgerInterface } from "./HamburgerInterafce";

export default function Hamburger({ onClick }: HamburgerInterface) {
    return (
        <HamburgerWrapperStyles>
            <Image
                src="/assets/hamburger-closed.svg"
                alt="open menu"
                objectFit="contain"
                height={30}
                width={30}
                priority
                onClick={onClick}
            />
        </HamburgerWrapperStyles>
    );
}
