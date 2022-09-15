import { useRouter } from "next/router";
import React, { useId } from "react";
import Button from "../../../../Button/Button";
import { ButtonsStyles } from "./Buttons.styled";

export default function Buttons() {
    const data = [{ text: "Schedule a call", link: "/call" }];
    const id = useId();

    return (
        <ButtonsStyles>
            {data.map((link, index) => {
                return (
                    <Button key={`${id}-${index}`} linkHref={link.link}>
                        {link.text}
                    </Button>
                );
            })}
        </ButtonsStyles>
    );
}
