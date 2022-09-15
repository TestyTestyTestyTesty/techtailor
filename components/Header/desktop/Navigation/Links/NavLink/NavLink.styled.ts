import styled from "styled-components";

type Props = {
    active: boolean;
};

export const NavLinkStyles = styled.a<Props>`
    font-family: "Space Grotesk";
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 16px;
    letter-spacing: 3px;
    text-transform: uppercase;
    color: ${(props) => (props.active ? "#FF3C2E" : "#FFF")};
    cursor: pointer;
    position: relative;
    white-space: nowrap;
    &:hover {
        outline: none;
        &:before {
            transform-origin: 0% 50%;
            transform: scale3d(1, 1, 1);
        }
    }
    &:before {
        transform-origin: ${(props) => (props.active ? "0% 50%" : "100% 50%")};
        transform: scale3d(0, 1, 1);
        transform: ${(props) =>
            props.active ? "scale3d(1, 1, 1);" : "scale3d(0, 1, 1)"};
        transition: transform 0.3s;
        content: "";
        position: absolute;
        width: 100%;
        height: 1px;
        background: #ff3c2e;
        bottom: -5px;
        left: 0;
        pointer-events: none;
    }
`;
