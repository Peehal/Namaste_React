import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";


const Body = () => {

    const [listOfRestaurants, setListOfRestaurant] = useState([]);

    const[allrestaurant, setallrestaurant] = useState([]);

    const [searchText, setsearchText] = useState("");

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const data = await fetch("http://localhost:3001/restaurants");
        const jsonData = await data.json();

        console.log(jsonData);

        setListOfRestaurant(jsonData);
        setallrestaurant(jsonData)
    };

  return listOfRestaurants.length == 0 ? <Shimmer /> : (

    <div className="body">
      <div className="search">

        <input type="text" className="search-box" placeholder="Cafe..." value={searchText} onChange={(e) => {
          setsearchText(e.target.value);
        }}></input>
        <button  
        
        onClick={() => {
          const filteredRestaurant = listOfRestaurants.filter((res) => res.name.toLowerCase().includes(searchText.toLowerCase()) );

          setallrestaurant(filteredRestaurant);

        }}>Search
        </button>
        
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
            allrestaurant.map((restaurant) => (
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