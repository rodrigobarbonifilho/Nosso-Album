import styled from "styled-components";

export const StyledContainer = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100%;
`

const Arrow = styled.button`
    position: absolute;
    font-size: 50px;
    background-color: transparent;
    cursor: pointer;

    &:active {
        background-color: transparent;
    }
`;

export const BackArrow = styled(Arrow)`
    top: 50%;
    left: 0;
`;

export const NextArrow = styled(Arrow)`
    top: 50%;
    right: 0;
`;