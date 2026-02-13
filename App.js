// const heading = React.createElement("h1", {}, "Hello world from React");

// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(heading);


{/* <div id="parent">
    <div id="child">
        <h1> I'm a h1 tag</h1>
        <h2> I'm a h2 tag</h2>
    </div>
</div> */}


const parent = React.createElement("div", {id : "parent"}, 
    React.createElement("div", {id: "child"}, 
        [React.createElement("h1", {}, "Iam a h1 tag"), 
            React.createElement("h2", {}, "Iam a h2 tag")
        ]
    )
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);