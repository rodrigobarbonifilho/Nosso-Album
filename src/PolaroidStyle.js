import styled from "styled-components"

export const PolaroidImage = styled.div`
    display: flex;
    justify-content: center;
    width: 500px;
    height: 550px;
    background-color: white;
    box-shadow: 0 6px 16px rgba(0, 0, 0, 0.6);
    transform-origin: center;
    transform: rotateZ(${props => props.$angle});

    @media (max-width: 768px) {
        width: 300px;
        height: 350px;
    }
`

export const Image = styled.div`
    width: 470px;
    height: 380px;
    margin-top: 15px;
    background-image: url(${(props) => props.$imageurl});
    background-size: cover;
    background-position: center center;

    @media (max-width: 768px) {
        width: 280px;
        height: 266px;
        margin-top: 10px;
    }
`
