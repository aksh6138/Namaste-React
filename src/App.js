import React  from "react";
import  ReactDOM  from "react-dom/client";

import Header from "./components/Header";

import Body from "./components/Body";



//Header  -- logo -- Menu items
//body -- search bar -- Cards
// Footer -- copyrights --Links -- insta/fb/twitter --licenses

// const heading = React.createElement("div", { id: "parent", xyz: "abc" }, 
// [
//     React.createElement("h1",{id : "child1"},"I am child1"),
//     React.createElement("h2",{id : "child2"},"I am child2!")
// ]);

// const heading = (
// <h1 className = "heading" tabIndex=  "5">
//     Namaste React
//     </h1>
//     );

// const HeadingComponent = ()  => {

//     return <div id = "container"> <h1 className="heading">Namaste React</h1></div>
// }
//if we are writing in single line then we dont need to keep JSX in () but if we are writing in multiple line then
//it should be enclosed within brackets

const Applayout = () => {
   return <div className="App">
       <Header/>
       <Body/>
    </div>
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Applayout/>);