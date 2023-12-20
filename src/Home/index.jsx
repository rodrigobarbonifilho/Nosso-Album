import { HomeStyled, PreviousButtonStyled, NextButtonStyled } from "./style";
import Slider from "./components/Slider";
import PolaroidPhoto from "./components/PolaroidPhoto";
import json from "../images.json";
import { useState } from "react";

export default function Home() {
    let images = json.images;
    let [imageIndexSelected, setImageIndexSelected] = useState(0);

    return (
        <HomeStyled>
            <PreviousButtonStyled
                onClick={() =>
                    setImageIndexSelected(
                        imageIndexSelected > 0 ? imageIndexSelected-- : 0
                    )
                }
            >
                <ion-icon name="caret-back-outline"></ion-icon>
            </PreviousButtonStyled>

            <Slider>
                {images.map((image, imageIndex) => {
                    return (
                        <PolaroidPhoto
                            img={image}
                            selected={imageIndexSelected === imageIndex}
                            key={imageIndex}
                            imageIndex={imageIndexSelected}
                        />
                    );
                })}
            </Slider>
            <NextButtonStyled
                onClick={() =>
                    setImageIndexSelected(
                        imageIndexSelected < images.length - 1
                            ? imageIndexSelected++
                            : images.length - 1
                    )
                }
            >
                <ion-icon name="caret-forward-outline"></ion-icon>
            </NextButtonStyled>
        </HomeStyled>
    );
}
