import styled from "styled-components";

export const SliderStyled = styled.div`
    display: flex;
    flex-wrap: nowrap;
    min-width: 500px;
    width: 70vw;
    height: 90vh;
    padding: 0 40%;
    scroll-snap-type: x mandatory;
    overflow-x: scroll;
    overflow-y: hidden;
    box-sizing: border-box;
`;
