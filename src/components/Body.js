import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";

const Body = () => {
  return (
    <div className="body">
      <div className="search">
        <input type="text" placeholder="Search for restaurants..." />
        <button>Search</button>
      </div>

      <div className="res-container">
        {
            resList.map((restaurant) => (
                <RestaurantCard
                key={restaurant.restaurant_id}
                resData={restaurant}
                />
            ))
        }

      </div>
    </div>
  );
};

export default Body;