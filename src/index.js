import React from "react";
import ReactDom from "react-dom";
import Myform from "./App";
import "./style.css"

const DemoComponent = ()=>{
    return (
        <Myform/>
    )
}

ReactDom.render(<DemoComponent/>, document.getElementById("root"));