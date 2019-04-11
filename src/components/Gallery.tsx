import axios from "axios";
import * as React from "react";

interface Props {}

export const Gallery: React.FC<Props> = () => {
    const [images, setImages] = React.useState<any>([]);
    React.useEffect(() => {
        if (images.length === 0) {
            getImages();
        }
    });

    async function getImages() {
        let response = await axios.get("http://127.0.0.1:5000/images?offset=0");
        setImages(response.data.images);
    }

    return (
        <div>
            {images.map((image: any) => (
                <img key={image.id} src={image.url} />
            ))}
        </div>
    );
};
