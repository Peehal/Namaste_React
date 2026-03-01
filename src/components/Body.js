import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";


const Body = () => {

    let [listOfRestaurants, setListOfRestaurant] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const data = await fetch("http://localhost:3001/restaurants");
        const jsonData = await data.json();

        console.log(jsonData);

        setListOfRestaurant(jsonData)
    };

  return listOfRestaurants.length == 0 ? <Shimmer /> : (

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