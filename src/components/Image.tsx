import React from "react";
import { animated, useSpring } from "react-spring";
import styled from "styled-components";

interface Props {
    image: RType;
}

export const Image: React.FC<Props> = ({ image }) => {
    const [mouseIn, setMouseIn] = React.useState<boolean>(false);

    const animateInfo = useSpring({
        height: "100px",
        transform: mouseIn ? "translateY(0px)" : "translateY(100px)",
        overflow: "hidden",
        position: "absolute",
        bottom: "0px",
        left: "0px",
        width: "100%",
        backgroundColor: "#131923",
        opacity: 0.8,
        fontSize: "28px",
        color: "#dee3ed",
        display: "flex",
        alignItems: "center"
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
        overflow: hidden;
    `;
    return (
        <Container onMouseEnter={setMouseOver} onMouseOut={setMouseOut}>
            <img width="100%" src={image.url} />

            <animated.div style={animateInfo}>
                {image.name.toUpperCase()}
            </animated.div>
        </Container>
    );
};
