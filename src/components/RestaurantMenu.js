import MenuShimmerShimmer from "./MenuShimmer";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import { useParams } from "react-router-dom";
import RestaurantCategory from "./RestaurantCategroy";
import { useState } from "react";

const RestaurantMenu = () => {
    const { resId } = useParams();

    const [showIndex, setShowIndex] = useState(null);

    const resInfo = useRestaurantMenu(resId);

    if (resInfo === null) return <MenuShimmerShimmer />;

    const { name, cuisines, costForTwoMessage } =
        resInfo?.cards[1]?.card?.card?.info || {};

    const categories =
        resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards || [];

    const categoriesFilter = categories.filter(
        (c) =>
            c?.card?.card?.["@type"] ===
            "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

    return (
        <div className="text-center m-5 p-2">
            <h1 className="font-bold text-2xl p-1 m-1">{name}</h1>
            <p className="text-lg p-1 m-1">
                {cuisines?.join(", ")} • {costForTwoMessage}
            </p>

            {categoriesFilter.map((category, index) => (
                <RestaurantCategory
                    key={category?.card?.card?.title}
                    data={category?.card?.card}
                    showItems={index === showIndex}
                    setShowIndex={() => setShowIndex(showIndex === index ? null : index)}
                />
            ))}
        </div>
    );
};

export default RestaurantMenu;