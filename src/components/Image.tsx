import React from "react";
import { animated, useSpring } from "react-spring";
import styled from "styled-components";

interface Props {
    image: RType;
}

export const Image: React.FC<Props> = ({ image }) => {
    const [mouseIn, setMouseIn] = React.useState<boolean>(false);

    const animateInfo = useSpring({
        height: mouseIn ? "10%" : "0%",
        position: "absolute",
        bottom: "0px",
        left: "0px",
        width: "100%",
        backgroundColor: "white",
        fontSize: "16px"
    });

    const setMouseOver = () => {
        setMouseIn(true);
    };
    const setMouseOut = () => {
        setMouseIn(false);
    };

    const Container = styled.div`
        font-size: 0px;
        position: relative;
    `;
    return (
        <Container>
            <img
                src={image.url}
                onMouseOver={setMouseOver}
                onMouseOut={setMouseOut}
            />

            <animated.div style={animateInfo}>{image.name}</animated.div>
        </Container>
    );
};
