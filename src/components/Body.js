import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import { useState } from "react";


const Body = () => {

    let [listOfRestaurants, setListOfRestaurant] = useState(resList);


  return (

    <div className="body">
      <div className="search">
        
        <button className="filter-btn" 
        
        onClick={() => {
            const filteredRestaurant = listOfRestaurants.filter((res) => res.avg_rating > 4 );
            setListOfRestaurant(filteredRestaurant);
        }
    }

        >Top Rated Restaurants</button>

      </div>

      <div className="res-container">
        {
            listOfRestaurants.map((restaurant) => (
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