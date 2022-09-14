import Link from "next/link";
import React from "react";
import {
    TopBarLinkStyles,
    TopBarParagraphStyles,
    TopBarWrapperStyles,
} from "./TopBar.styled";
import { TopBarInterface } from "./TopBarInterafce";

export default function TopBar({ text, linkText, linkHref }: TopBarInterface) {
    return (
        <TopBarWrapperStyles>
            <TopBarParagraphStyles>{text}</TopBarParagraphStyles>
            {linkText && linkHref && (
                <Link href={linkHref} passHref>
                    <TopBarLinkStyles>{linkText}</TopBarLinkStyles>
                </Link>
            )}
        </TopBarWrapperStyles>
    );
}
