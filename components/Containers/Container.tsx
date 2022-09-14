import React from "react";
import { ContainerStyles } from "./Container.styled";
import { ContainerInterface } from "./ContainerInterafce";

export default function Container({ children }: ContainerInterface) {
    return <ContainerStyles>{children}</ContainerStyles>;
}
