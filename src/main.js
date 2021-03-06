import "./css/base.scss";
import React from "react";
import ReactDom from 'react-dom';
import App from "./components/App.jsx";
import Store from "./Store/Store.js";

Store.subscribe(RenderDom);
function RenderDom(){
    ReactDom.render(<App store={Store.getState()} dispatch={Store.dispatch}/>, document.getElementById("root"));
}
RenderDom();
