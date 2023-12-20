import styled from "styled-components";

const ButtonStyled = styled.div`
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 3.5em;
    top: 0;
    width: fit-content;
    height: 100%;
    z-index: 999;
    background-color: transparent;
    cursor: pointer;
`;

export const PreviousButtonStyled = styled(ButtonStyled)`
    left: 0%;
`

export const NextButtonStyled = styled(ButtonStyled)`
    right: 0%;
`

export const HomeStyled = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100vh;
`;
