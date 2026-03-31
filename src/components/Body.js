import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurant] = useState([]);

  const [allrestaurant, setallrestaurant] = useState([]);

  const [searchText, setsearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://corsproxy.io/?url=https%3A%2F%2Fwww.swiggy.com%2Fdapi%2Frestaurants%2Flist%2Fv5%3Flat%3D22.79296%26lng%3D86.1790513%26is-seo-homepage-enabled%3Dtrue%26page_type%3DDESKTOP_WEB_LISTING",
    );
    const jsonData = await data.json();

    const restaurants =
  jsonData?.data?.cards?.find(
    (card) => card?.card?.card?.gridElements?.infoWithStyle?.restaurants
  )?.card?.card?.gridElements?.infoWithStyle?.restaurants || [];
    setListOfRestaurant(restaurants);
    setallrestaurant(restaurants);
  };

  return listOfRestaurants?.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="search">
        <input
          type="text"
          className="search-box"
          placeholder="Cafe..."
          value={searchText}
          onChange={(e) => {
            setsearchText(e.target.value);
          }}
        ></input>
        <button
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
          className="filter-btn"
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

      <div className="res-container">
        {Array.isArray(allrestaurant) &&
          allrestaurant.map((restaurant) => (
            <RestaurantCard
              key={restaurant?.info?.id}
              resData={restaurant?.info}
            />
          ))}
      </div>
    </div>
  );
};

export default Body;
