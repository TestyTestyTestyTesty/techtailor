import React, { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";
import HeaderDesktop from "./desktop/Header";
import HeaderMobile from "./mobile/Header";

export default function Header() {
    const [isDesktop, setDesktop] = useState<boolean | null>(null);

    const updateMedia = () => {
        setDesktop(window.innerWidth > 992);
    };

    useEffect(() => {
        updateMedia();
        window.addEventListener("resize", updateMedia);
        return () => window.removeEventListener("resize", updateMedia);
    });
    return <>{isDesktop ? <HeaderDesktop /> : <HeaderMobile />}</>;
}
