import React from "react";
import Buttons from "./Buttons/Buttons";
import Links from "./Links/Links";
import { NavigationStyles } from "./Navigation.styled";
import { NavigationInterface } from "./NavigationInterafce";

export default function Navigation({ open }: NavigationInterface) {
    return (
        <NavigationStyles open={open}>
            <Links />
            <Buttons />
        </NavigationStyles>
    );
}
