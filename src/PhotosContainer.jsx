/* eslint-disable react/prop-types */
import {
    StyledContainer,
    BackArrow,
    NextArrow,
} from "./PhotosContainerStyle.js";
import Polaroid from "./Polaroid.jsx";
import images from "./images.json";

export default function Container(props) {
    return (
        <StyledContainer>
            {props.imageIndex === 0 ? null : (
                <BackArrow
                    onClick={() => {
                        window.scroll({
                            left: window.screen.width * (props.imageIndex - 1),
                            behavior: "smooth",
                        });
                    }}
                >
                    <ion-icon name="caret-back-sharp"></ion-icon>
                </BackArrow>
            )}

            <Polaroid image={props.image} />

            {props.imageIndex === images.Imagens.length - 1 ? null : (
                <NextArrow
                    onClick={() => {
                        window.scroll({
                            left: window.screen.width * (props.imageIndex + 1),
                            behavior: "smooth",
                        });
                    }}
                >
                    <ion-icon name="caret-forward-sharp"></ion-icon>
                </NextArrow>
            )}
        </StyledContainer>
    );
}
