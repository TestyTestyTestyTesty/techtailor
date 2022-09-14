import { useRouter } from "next/router";
import React, { useId } from "react";
import { ButtonsStyles } from "./Buttons.styled";
import NavButton from "./NavButton/NavButton";

export default function Buttons() {
    const data = [{ text: "Schedule a call", link: "/call" }];
    const id = useId();

    return (
        <ButtonsStyles>
            {data.map((link, index) => {
                return (
                    <NavButton key={`${id}-${index}`} linkHref={link.link}>
                        {link.text}
                    </NavButton>
                );
            })}
        </ButtonsStyles>
    );
}
