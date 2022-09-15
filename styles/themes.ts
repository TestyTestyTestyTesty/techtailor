import "styled-components";
import { DefaultTheme } from "styled-components";
declare module "styled-components" {
    export interface DefaultTheme {
        textColor: string;
        textColorInverted: string;
        bgColor: string;
        bgColorInverted: string;
        accentColor1: string;
        accentColor2: string;
    }
}

export const themeDefault: DefaultTheme = {
    textColor: "#fff",
    textColorInverted: "#08070F",
    bgColor: "#08070F",
    bgColorInverted: "#fff",
    accentColor1: "#FF3C2E",
    accentColor2: "#694EF3",
};
export const themeInvert = {
    textColor: "#08070F",
    textColorInverted: "#fff",
    bgColor: "#fff",
    bgColorInverted: "#08070F",
    accentColor1: "#FF3C2E",
    accentColor2: "#694EF3",
};
