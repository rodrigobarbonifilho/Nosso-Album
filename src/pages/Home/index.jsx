import { HomeStyled, StyledCarrousel, CarrouselItem } from "./style";
import PolaroidPhoto from "../../components/PolaroidPhoto";
import json from "../../images.json";
import { useState } from "react";

export default function Home() {
    const [imageSelected, setImageSelected] = useState(0);

    return (
        <HomeStyled>
            <StyledCarrousel
                id="CarrouselJs"
                onScroll={() => {
                    const photoWidth = window.innerWidth > 768 ? 266 : 192;
                    const offSet =
                        document.getElementById("CarrouselJs").scrollLeft;
                    setImageSelected(Math.round(offSet / photoWidth));
                }}
            >
                {json.images.map((image, index) => {
                    return (
                        <CarrouselItem id={index} key={index}>
                            <PolaroidPhoto
                                img={image}
                                selected={index === imageSelected}
                            />
                        </CarrouselItem>
                    );
                })}
            </StyledCarrousel>
        </HomeStyled>
    );
}
