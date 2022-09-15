import React from "react";
import Link from "next/link";
import { NavLinkInterface } from "./NavLinkInterafce";
import { NavLinkStyles } from "./NavLink.styled";
import { useRouter } from "next/router";
export default function NavLink({ children, linkHref }: NavLinkInterface) {
    const { pathname } = useRouter();
    return (
        <Link href={linkHref}>
            <NavLinkStyles active={pathname == linkHref ? true : false}>
                {children}
            </NavLinkStyles>
        </Link>
    );
}
