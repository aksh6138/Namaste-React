//const heading = React.createElement("h1", { id: "heading", xyz: "abc" }, "Hello World from React!");

const heading = React.createElement("div", { id: "parent", xyz: "abc" }, 
[
    React.createElement("h1",{id : "child1"},"I am child1"),
    React.createElement("h2",{id : "child2"},"I am child2!")
]);





const root = ReactDOM.createRoot(document.getElementById("root"));




root.render(heading);