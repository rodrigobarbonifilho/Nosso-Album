/* eslint-disable react/prop-types */
import { PolaroidImage, Image } from "./PolaroidStyle";

export default function Polaroid({ image }) {
    let angle = Math.random() * 11;
    let isNegative = Math.floor(Math.random() * 10) % 2;

    angle = isNegative ? -angle : angle;

    return (
        <PolaroidImage $angle={`${angle}deg`}>
            <Image $imageurl={image} />
        </PolaroidImage>
    );
}
