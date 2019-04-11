import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Add } from "./components/Add";
import { Gallery } from "./components/Gallery";
import * as serviceWorker from "./serviceWorker";

const Index = (
    <Router>
        <Route path="/" exact component={Gallery} />
        <Route path="/add" component={Add} />
    </Router>
);

ReactDOM.render(Index, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
