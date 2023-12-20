import styled from "styled-components";

export const PolaroidPhotoContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100%;
    scroll-snap-align: center;
`;

export const PolaroidImage = styled.div`
    aspect-ratio: 1/1;
    height: 250px;
    border: 8px solid white;
    border-bottom: 80px solid white;
    background-image: url(${props => props.$img});
    background-size: cover;
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.5);
    transition: all .2s ease;

    &.true {
        z-index: 998;
        transform: scale(1.5) rotateZ(${props => props.$angle}deg);
    }

    @media (max-width: 768px) {
        height: 180px;
        border: 6px solid white;
        border-bottom: 60px solid white;
    }
`;
