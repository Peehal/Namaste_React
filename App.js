import React from "react";
import ReactDOM from "react-dom/client";


const Header = () => {
    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src="https://png.pngtree.com/png-vector/20220623/ourmid/pngtree-food-logo-png-image_5296974.png"></img>
            </div>

            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Cart</li>
                    <li>Contact Us</li>
                </ul>
            </div>
            
        </div>


    )
}

const RestaurantCard = () => {
    return(
        <div className="res-card">
            <h3>Meghana Foods</h3>
        </div>
    )
}

const Body = () => {
    return (
        <div className="body">
            <div className="search">Search</div>
            <div className="res-container">
                <RestaurantCard />
            </div>
        </div>
    )
}


const AppLayout = () => {
    return (
        <div className="app">
            <Header />
            <Body />
        </div>
    )
}



const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout/>);

