import { useRouter } from "next/router";
import React, { useId } from "react";
import { LinksStyles } from "./Links.styled";
import NavLink from "./NavLink/NavLink";

export default function Links() {
    const data = [
        { text: "Home", link: "/" },
        { text: "About", link: "/about" },
        { text: "Career", link: "/career" },
    ];
    const id = useId();

    return (
        <LinksStyles>
            {data.map((link, index) => {
                return (
                    <NavLink key={`${id}-${index}`} linkHref={link.link}>
                        {link.text}
                    </NavLink>
                );
            })}
        </LinksStyles>
    );
}
