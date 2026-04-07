import RestaurantCard, { IsOpenLabel } from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import useOnlineStatus from "../utils/useOnlineStatus";



const Body = () => {
  const [listOfRestaurants, setListOfRestaurant] = useState([]);

  const [allrestaurant, setallrestaurant] = useState([]);

  const [searchText, setsearchText] = useState("");

const IsOpenCard = IsOpenLabel(RestaurantCard);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const data = await fetch(
        "https://corsproxy.io/?url=https%3A%2F%2Fwww.swiggy.com%2Fdapi%2Frestaurants%2Flist%2Fv5%3Flat%3D22.79296%26lng%3D86.1790513%26is-seo-homepage-enabled%3Dtrue%26page_type%3DDESKTOP_WEB_LISTING"
      );

      const jsonData = await data.json();

      const restaurants =
        jsonData?.data?.cards?.find(
          (card) => card?.card?.card?.gridElements?.infoWithStyle?.restaurants
        )?.card?.card?.gridElements?.infoWithStyle?.restaurants || [];

      setListOfRestaurant(restaurants);
      setallrestaurant(restaurants);
    } catch (error) {
      console.error("Fetch failed:", error);
    }
  };

  const OnlineStatus = useOnlineStatus();

  if (OnlineStatus == false) {
    return <h1>OOps Check your Internet Connection</h1>
  }


  return listOfRestaurants?.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="flex justify-center-safe items-center gap-4  search p-3 m-2 ">
        <input
          type="text"
          className=" cursor-pointer border border-solid border-black"
          placeholder="Cafe..."
          value={searchText}
          onChange={(e) => {
            setsearchText(e.target.value);
          }}
        ></input>
        <button
          className="px-4 py-1 bg-pink-100 cursor-pointer rounded-lg "
          onClick={() => {
            const filteredRestaurant = listOfRestaurants.filter((res) =>
              res?.info?.name?.toLowerCase().includes(searchText.toLowerCase()),
            );

            setallrestaurant(filteredRestaurant);
          }}
        >
          Search
        </button>

        <button
          className="px-4 py-1 bg-pink-100 cursor-pointer rounded-lg"
          onClick={() => {
            const filteredRestaurant = listOfRestaurants.filter(
              (res) => res?.info?.avgRating > 4,
            );
            setallrestaurant(filteredRestaurant);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 p-4">
        {Array.isArray(allrestaurant) &&
          allrestaurant.map((restaurant) =>
            restaurant?.info?.isOpen ? (
              <IsOpenCard
                key={restaurant?.info?.id}
                resData={restaurant?.info}
              />
            ) : (
              <RestaurantCard
                key={restaurant?.info?.id}
                resData={restaurant?.info}
              />
            )
          )}
      </div>

    </div>
  );
};

export default Body;
