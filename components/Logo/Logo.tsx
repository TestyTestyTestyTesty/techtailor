import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Logo() {
    return (
        <Link href="/">
            <a>
                <Image
                    src="/assets/logo.svg"
                    alt="Techtailor logo"
                    objectFit="contain"
                    height="32"
                    width="104"
                    priority
                />
            </a>
        </Link>
    );
}
