import React, { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";
import HeaderDesktop from "./desktop/Header";
import HeaderMobile from "./mobile/Header";

export default function Header() {
    const [isClient, setIsClient] = useState(false);
    const isDesktop = useMediaQuery({ query: "(min-width: 992px)" });
    useEffect(() => {
        if (typeof window !== undefined) {
            setIsClient(true);
        }
    }, []);
    return <>{isClient && isDesktop ? <HeaderDesktop /> : <HeaderMobile />}</>;
}
