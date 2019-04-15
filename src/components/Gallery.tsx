import axios from "axios";
import * as React from "react";
import { useSpring } from "react-spring";
import styled from "styled-components";
import { Image } from "./Image";

interface Props {}

export const Gallery: React.FC<Props> = () => {
    let colsHeight = [0, 0, 0, 0];
    // const [colsHeight, setColsHeight] = React.useState<number[]>([0, 0, 0, 0]);
    const [cols, setCols] = React.useState<any>([[], [], [], []]);
    const [isHover, setHover] = React.useState<boolean>(false);
    let offset = 0;
    const [listenerSet, setListenerSet] = React.useState<boolean>(false);
    React.useEffect(() => {
        if (!listenerSet) {
            window.addEventListener("scroll", () => {
                let d = document.documentElement;

                if (d.scrollTop + window.innerHeight === d.offsetHeight) {
                    getImages();
                }
            });
            getImages();
            setListenerSet(true);
        }
    });

    const findSmallestCol = () => {
        let index = 0;
        let colHeight = colsHeight[0];
        colsHeight.forEach((col: any, i: number) => {
            if (col < colHeight) {
                colHeight = col;
                index = i;
            }
        });
        return index;
    };

    const getImages = async () => {
        let response = await axios.get(
            `http://127.0.0.1:5000/images?offset=${offset}`
        );

        let mutableCol = cols.slice();

        response.data.images.forEach((image: any) => {
            let index = findSmallestCol();

            mutableCol[index].push(image);

            colsHeight[index] = colsHeight[index] + image.height;
        });
        setCols(mutableCol);
        offset += 12;
    };

    const animateHover = useSpring({
        height: isHover ? "20%" : "0px"
    });

    const Column = styled.div`
        display: flex;
        flex-direction: column;
        width: 450px;
    `;
    const Container = styled.div`
        display: flex;
        width: 100%;
        display: flex;
        justify-content: center;
    `;

    const ImageContainer = styled.div``;

    const Info = styled.div`
        width: 100%;
    `;

    return (
        <Container>
            {cols.map((images: any, index: number) => (
                <Column key={index}>
                    {images.map((image: RType) => (
                        <Image key={image.url} image={image} />
                    ))}
                </Column>
            ))}
        </Container>
    );
};
