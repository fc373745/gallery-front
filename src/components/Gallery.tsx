import axios from "axios";
import * as React from "react";
interface Props {}

export const Gallery: React.FC<Props> = () => {
    const [images, setImages] = React.useState<any>([]);
    let offset = 0;
    const [listenerSet, setListenerSet] = React.useState<boolean>(false);
    React.useEffect(() => {
        if (!listenerSet) {
            window.addEventListener("scroll", () => {
                let d = document.documentElement;

                if (d.scrollTop + window.innerHeight === d.offsetHeight) {
                    console.log(offset);
                    getImages();
                }
            });
            getImages();
            setListenerSet(true);
        }
    });

    async function getImages() {
        let response = await axios.get(
            `http://127.0.0.1:5000/images?offset=${offset}`
        );
        setImages((previous: any) => {
            return [...previous, ...response.data.images];
        });
        offset += 12;
    }

    return (
        <div>
            {images.map((image: any) => (
                <img key={image.id} src={image.url} />
            ))}
        </div>
    );
};
