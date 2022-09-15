import React, { useContext } from "react";
import { ThemeProvider } from "styled-components";
import { themeDefault, themeInvert } from "../styles/themes";

interface props {
    children: React.ReactNode;
}

export default function ThemeWrapper({ children }: props) {
    return <ThemeProvider theme={themeDefault}>{children}</ThemeProvider>;
}
