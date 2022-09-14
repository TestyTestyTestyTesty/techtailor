import React from "react";
import Container from "../Containers/Container";
import Logo from "../Logo/Logo";
import Navigation from "./Navigation/Navigation";
import { HeaderInnerStyles, HeaderWrapperStyles } from "./Header.styled";

export default function Header() {
    return (
        <HeaderWrapperStyles>
            <Container>
                <HeaderInnerStyles>
                    <Logo />
                    <Navigation />
                </HeaderInnerStyles>
            </Container>
        </HeaderWrapperStyles>
    );
}
