import Link from "next/link";
import React from "react";
import { NavButtonStyles } from "./NavButton.styled";
import { NavButtonInterface } from "./NavButtonInterafce";

export default function NavButton({ children, linkHref }: NavButtonInterface) {
    return (
        <Link href={linkHref}>
            <NavButtonStyles>{children}</NavButtonStyles>
        </Link>
    );
}
