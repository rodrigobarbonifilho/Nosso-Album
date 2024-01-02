import styled from "styled-components";

export const PolaroidImage = styled.div`
    aspect-ratio: 1/1;
    height: 250px;
    border: 8px solid white;
    border-bottom: 80px solid white;
    background-image: url(${props => props.$img});
    background-size: cover;
    box-shadow: 0 0 16px rgba(0, 0, 0, 0.2);
    transition: all .2s ease;
    filter: brightness(0.6);

    &.selected {
        z-index: 998;
        transform: scale(1.5) rotateZ(${props => props.$angle}deg);
        filter: brightness(1);
    }

    @media (max-width: 768px) {
        height: 180px;
        border: 6px solid white;
        border-bottom: 60px solid white;
    }
`;
