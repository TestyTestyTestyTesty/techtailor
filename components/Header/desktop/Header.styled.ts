import styled from "styled-components";

export const HeaderWrapperStyles = styled.div`
    background: ${({ theme }) => theme.bgColor};
    padding: 27px 0;
    z-index: 2;
    position: sticky;
    top: 0;
`;
export const HeaderInnerStyles = styled.div`
    display: flex;
    justify-content: space-between;
`;
