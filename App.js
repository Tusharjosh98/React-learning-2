import React from "react";
import ReactDOM from 'react-dom';

const child1 = React.createElement("h1", { id: "child1" }, "Hello From");
const child2 = React.createElement("h2", { id: "child2" }, "React");
const parent = React.createElement("div", { id: "parent" }, [child1, child2]);
console.log(parent);

const root = ReactDOM.createRoot(document.getElementById("groot"));

root.render(parent);
