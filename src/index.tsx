import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { createGlobalStyle } from "styled-components";
import { Add } from "./components/Add";
import { Gallery } from "./components/Gallery";
import * as serviceWorker from "./serviceWorker";

const Global = createGlobalStyle`
    *{
        padding: 0;
        margin: 0;
        overflow-x: hidden;
    }
    img {
        z-index:0;
    }

    @keyframes animateIn{
        0%{
            opacity:0;
        }
        100%{
            opacity:1;
        }
    }
`;
const Index = (
    <>
        <Global />
        <Router>
            <Route path="/" exact component={Gallery} />
            <Route path="/add" component={Add} />
        </Router>
    </>
);

ReactDOM.render(Index, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
