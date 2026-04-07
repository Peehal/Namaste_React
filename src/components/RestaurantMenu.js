import MenuShimmerShimmer from "./MenuShimmer";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import { useParams } from "react-router";
import RestaurantCategory from "./RestaurantCategroy.js";


const RestaurantMenu = () => {

    const { resId } = useParams();

    const resInfo = useRestaurantMenu(resId);

    if (resInfo === null) return <MenuShimmerShimmer />

    const { name, cuisines, costForTwoMessage, avgRating } =
        resInfo?.cards[1]?.card?.card?.info || {};

    const categories =
        resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards || [];

    const validCategories = categories.filter(
        (category) => category?.card?.card?.itemCards
    );

    const { title, itemCards } = validCategories[0]?.card?.card || {};

    const categoriesFilter = categories.filter(
        (c) =>
            c?.card?.card?.["@type"] ===
            "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

    console.log(categoriesFilter)

    return (
        <div className="text-center m-5 p-2">

            <h1 className="font-bold text-2xl p-1 m-1">{name}</h1>
            <p className="text-lg p-1 m-1">
                {cuisines?.join(", ")} • {costForTwoMessage}
            </p>

            {/* Categories accordians */}
            {
                categoriesFilter.map((category) => (
                    <RestaurantCategory c
                        key={category?.card?.card?.title}
                        data={category?.card?.card}
                    />
                ))
            }

        </div>
    );
};

export default RestaurantMenu;