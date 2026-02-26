import React from "react";
import ReactDOM from "react-dom/client";

const jsxHeading = <h1 className="root">"Namaste react using JSX" </h1>;

// const Title = () => {
//     return <h1 tabIndex={5}> Component Composition </h1>
// };

// React Element

const elem = <span>     +     React element</span>

const Title = (
    <h1>Hello this is react Component
        {elem}
    </h1>
    
)

const Fn = () => (
    <h1 className="fn">This is a function</h1>
)

const HeadingComponent = () => (
    <div id="container">
            {Title}
            <Fn />
            <Fn ></Fn>
            <h1>{1000+200}</h1>
            <h2>{console.log( "Namaste World")}</h2>
        
        <h1>Namaste React HeadingComponent </h1>
        
    </div>
);



const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent/>);

