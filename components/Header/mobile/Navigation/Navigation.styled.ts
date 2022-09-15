import styled from "styled-components";

type Props = {
    open: boolean;
};

export const NavigationStyles = styled.div<Props>`
    display: flex;
    flex-direction: column;
    grid-gap: 48px;
    height: ${({ open }) => (open ? "100%" : "0")};
    opacity: ${({ open }) => (open ? "1" : "0")};
    visibility: ${({ open }) => (open ? "visible" : "hidden")};
    padding: ${({ open }) => (open ? "80px 0 62px" : "0")};
    justify-content: space-between;
`;
