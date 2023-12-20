import { PolaroidPhotoContainer, PolaroidImage } from "./style";
import { useEffect } from "react";

export default function PolaroidPhoto({ img, selected, imageIndex }) {
    useEffect(() => {
        let slider = document.getElementById("slider");
        let container = slider.querySelector("#slider > *");
        slider.scroll({
            left: imageIndex * container.clientWidth + 10,
            behavior: "smooth",
        });
    }, [imageIndex]);

    let angle = selected ? Math.random() * 11 : 0;
    let isNegative = Math.random() % 2 === 0 ? true : false;
    angle = isNegative ? -angle : angle;

    return (
        <PolaroidPhotoContainer>
            <PolaroidImage $img={img} $angle={angle} className={selected} />
        </PolaroidPhotoContainer>
    );
}
