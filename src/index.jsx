import { StyledIndex } from "./IndexStyle";
import images from "./images.json";
import Container from "./PhotosContainer";

export default function Index() {
    return (
        <StyledIndex>
            {images.Imagens.map((img, imageIndex) => {
                return (
                    <Container
                        imageIndex={imageIndex}
                        image={img}
                        key={imageIndex}
                        id={imageIndex}
                    />
                );
            })}
        </StyledIndex>
    );
}
