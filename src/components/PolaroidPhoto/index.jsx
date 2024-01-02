import { PolaroidImage } from "./style";

export default function PolaroidPhoto({ img, selected }) {
    let angle = selected ? Math.random() * 11 : 0;
    let isNegative = Math.random() % 2 === 0 ? true : false;
    angle = isNegative ? -angle : angle;

    return (
        <PolaroidImage
            $img={img}
            $angle={angle}
            className={selected ? "selected" : ""}
        />
    );
}
