import Image from "next/image";
import Link from "next/link";
import React from "react";
import { LogoInterface } from "./LogoInterafce";

export default function Logo({ width = 104, height = 32 }: LogoInterface) {
    return (
        <Link href="/" passHref>
            <a>
                <Image
                    src="/assets/logo.svg"
                    alt="Techtailor logo"
                    objectFit="contain"
                    height={height}
                    width={width}
                    priority
                />
            </a>
        </Link>
    );
}
