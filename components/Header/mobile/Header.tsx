import React, { useState } from "react";
import Container from "../../Containers/Container";
import Logo from "../../Logo/Logo";
import Navigation from "./Navigation/Navigation";
import {
    HeaderBottomStyles,
    HeaderInnerWrapperStyles,
    HeaderTopStyles,
    HeaderWrapperStyles,
} from "./Header.styled";

import Hamburger from "./Hamburger/Hamburger";

export default function HeaderMobile() {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleOpen = () => {
        setMenuOpen((current) => !current);
    };
    return (
        <HeaderWrapperStyles open={menuOpen}>
            <Container>
                <HeaderInnerWrapperStyles open={menuOpen}>
                    <HeaderTopStyles>
                        <Hamburger onClick={toggleOpen} />
                        <Logo width={84} height={37} />
                    </HeaderTopStyles>
                    <HeaderBottomStyles open={menuOpen}>
                        <Navigation open={menuOpen} />
                    </HeaderBottomStyles>
                </HeaderInnerWrapperStyles>
            </Container>
        </HeaderWrapperStyles>
    );
}
