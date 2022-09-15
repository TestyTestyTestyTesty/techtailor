import { mediaQueries } from "./../../styles/mediaQueries";
import styled from "styled-components";

export const ContainerStyles = styled.div`
    max-width: 1320px;
    margin: 0 auto;
    padding: 0 20px;
    height: 100%; //check what will happen
`;
export const ContainerSmallStyles = styled(ContainerStyles)`
    max-width: 1096px;
`;
