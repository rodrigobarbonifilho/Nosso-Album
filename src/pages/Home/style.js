import styled from "styled-components";

export const StyledCarrousel = styled.div`
    display: flex;
    flex-direction: row;
    overflow-x: scroll;
    height: 100vh;
    width: 100vw;
    padding: 0 calc(50% - 125px);
    scroll-snap-type: x mandatory;

    @media (max-width: 768px) {
        padding: 0 calc(50% - 90px);
    }
`;

export const CarrouselItem = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    scroll-snap-align: center;
`;

export const HomeStyled = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100vh;
    background-color: #d4d4d4;

    button {
        position: absolute;
        top: 20px;
        left: 20px;
        padding: 16px 24px;
        background-color: black;
        border-radius: 12px;
        color: white;
        cursor: pointer;
        transition: opacity 100ms ease-in;

        &:active {
            opacity: .4;
        }
    }
`;
