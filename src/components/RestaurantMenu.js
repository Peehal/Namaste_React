// import { useState, useEffect } from "react";


// const RestaurantMenu = () => {

//     const [resInfo, setresInfo] = useState(null);

//     useEffect(() => {
//         fetchMenu();
//     }, [])

//     const fetchMenu = async () => {

//         const data = await fetch("http://localhost:3001/menu");

//         const json = await data.json();
//         console.log(json);
//         setresInfo(json.data);

//     }

//     const { name, cuisines, costForTwoMessage, avgRating } =
//         resInfo?.cards[1]?.card?.card?.info || {};

//     const categories =
//          resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards || [];

//     const validCategories = categories.filter(
//         (category) => category?.card?.card?.itemCards
//     );

//     const { title, itemCards } = validCategories[0]?.card?.card || {};

//     return (
//         <div className="menu">
//             <h1>{name}</h1>
//             <p>{cuisines?.join(", ")} - {costForTwoMessage}</p>
//             <h3>{avgRating}⭐</h3>

//             <h2>{title}</h2>
//             <ul>
//                 {itemCards?.map((item) => (
//                     <li key={item?.card?.info?.id}>
//                         {item?.card?.info?.name} -{"Rs"} {item?.card?.info?.price/100}
//                     </li>
//                 ))}
//             </ul>
//         </div>
//     );
// };

// export default RestaurantMenu;

import { useState, useEffect } from "react";
import "./RestaurantMenu.css";
import MenuShimmerShimmer from "./MenuShimmer";

const RestaurantMenu = () => {
    const [resInfo, setresInfo] = useState(null);

    useEffect(() => {
        fetchMenu();
    }, []);

    const fetchMenu = async () => {
        const data = await fetch("http://localhost:3001/menu2");
        const json = await data.json();
        console.log(json);
        setresInfo(json.data);
    };

    if(resInfo === null) return <MenuShimmerShimmer/>

    const { name, cuisines, costForTwoMessage, avgRating } =
        resInfo?.cards[1]?.card?.card?.info || {};

    const categories =
        resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards || [];

    const validCategories = categories.filter(
        (category) => category?.card?.card?.itemCards
    );

    const { title, itemCards } = validCategories[0]?.card?.card || {};

    return (
        <div className="menu-page">
            <div className="restaurant-header">
                <h1 className="restaurant-name">{name}</h1>
                <p className="restaurant-info">
                    {cuisines?.join(", ")} • {costForTwoMessage}
                </p>
                <h3 className="restaurant-rating">{avgRating} ⭐</h3>
            </div>

            <div className="menu-section">
                <div className="menu-title-row">
                    <h2>{title} ({itemCards?.length})</h2>
                    <span className="arrow">⌃</span>
                </div>

                <div className="menu-items">
                    {itemCards?.map((item) => {
                        const info = item?.card?.info;
                        return (
                            <div key={info?.id} className="menu-item-card">
                                <div className="menu-item-left">
                                    <span className="veg-icon">🟢</span>
                                    <h3 className="item-name">{info?.name}</h3>
                                    <p className="item-price">₹{info?.price / 100}</p>
                                    <p className="item-desc">{info?.description}</p>
                                </div>

                                <div className="menu-item-right">
                                    <img
                                        className="item-image"
                                        src={`https://media-assets.swiggy.com/swiggy/image/upload/${info?.imageId}`}
                                        alt={info?.name}
                                    />
                                    <button className="add-btn">ADD</button>
                                    <p className="customisable">Customisable</p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default RestaurantMenu;