import React from "react";
import Buttons from "./Buttons/Buttons";
import Links from "./Links/Links";
import { NavigationStyles } from "./Navigation.styled";

export default function Navigation() {
    return (
        <NavigationStyles>
            <Links />
            <Buttons />
        </NavigationStyles>
    );
}
