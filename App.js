import React from "react";
import ReactDOM from "react-dom/client";

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://png.pngtree.com/png-vector/20220623/ourmid/pngtree-food-logo-png-image_5296974.png"
        ></img>
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
  );
};



const RestaurantCard = (props) => {

    const {resData} = props; 

    const {imageId,name, cuisines, avg_rating, delivery_time_minutes, cost_for_two} = resData;
  return (
    <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
      <img
        className="res-logo"
        src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + imageId}
      ></img>
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4 className="rating">{avg_rating}⭐</h4>
      <h4> {delivery_time_minutes} minutes </h4>
      <h4> ₹{cost_for_two} for two </h4>
    </div>
  );
};

const resList = [
  {
    restaurant_id: "KFC_JMS_101",
    name: "KFC",
    imageId: "RX_THUMBNAIL/IMAGES/VENDOR/2026/1/8/b134c1ec-594b-4811-a32b-1063c6eae6a2_113948.JPG",
    brand: "KFC India",
    city: "Jamshedpur",
    locality: "Bistupur",
    address: "Main Road, Bistupur, Jamshedpur",
    geo: { lat: 22.8055, lng: 86.2029 },
    cuisines: ["American", "Fast Food", "Burgers", "Fried Chicken"],
    avg_rating: 4.3,
    total_ratings: "12K+",
    cost_for_two: 500,
    cost_for_two_message: "₹500 for two",
    delivery_time_minutes: 28,
    delivery_time_range: "25-30 mins",
    distance_km: 3.2,
    is_pure_veg: false,
    is_promoted: true,
    promoted_text: "Ad • Sponsored",
    availability: { is_open: true, opens_at: "10:00 AM", closes_at: "11:00 PM" },
    offers: [{ offer_id: "OFFER50", title: "50% OFF up to ₹100" }],
    delivery_fee: 35,
    surge_fee: 0,
    platform_fee: 5,
    badges: ["Best Seller"],
    serviceability: { delivery_available: true, self_pickup_available: true }
  },

  {
    restaurant_id: "MOCHA_JMS_102",
    name: "Mocha",
    imageId:"RX_THUMBNAIL/IMAGES/VENDOR/2025/10/11/d1b270b6-1292-4263-bafa-7d28081484f1_1227407.JPG",
    brand: "Mocha Cafe",
    city: "Jamshedpur",
    locality: "Bistupur",
    address: "Bistupur Main Road, Jamshedpur",
    geo: { lat: 22.8048, lng: 86.2035 },
    cuisines: ["Cafe", "Italian", "Desserts"],
    avg_rating: 4.4,
    total_ratings: "3K+",
    cost_for_two: 1200,
    cost_for_two_message: "₹1200 for two",
    delivery_time_minutes: 32,
    delivery_time_range: "30-35 mins",
    distance_km: 2.5,
    is_pure_veg: false,
    is_promoted: false,
    availability: { is_open: true, opens_at: "11:00 AM", closes_at: "11:30 PM" },
    offers: [],
    delivery_fee: 40,
    surge_fee: 0,
    platform_fee: 5,
    badges: ["Premium"],
    serviceability: { delivery_available: true, self_pickup_available: true }
  },

  {
    restaurant_id: "CHAI_JMS_103",
    name: "Chai Break",
    imageId: "abcjnqkifuyuwbkidpws",
    brand: "Chai Break",
    city: "Jamshedpur",
    locality: "Sakchi",
    address: "Sakchi Market Area, Jamshedpur",
    geo: { lat: 22.8065, lng: 86.2021 },
    cuisines: ["Cafe", "Snacks", "Beverages"],
    avg_rating: 4.2,
    total_ratings: "2K+",
    cost_for_two: 300,
    cost_for_two_message: "₹300 for two",
    delivery_time_minutes: 22,
    delivery_time_range: "20-25 mins",
    distance_km: 1.8,
    is_pure_veg: true,
    is_promoted: false,
    availability: { is_open: true, opens_at: "9:00 AM", closes_at: "10:00 PM" },
    offers: [],
    delivery_fee: 25,
    surge_fee: 0,
    platform_fee: 5,
    badges: ["Pocket Friendly"],
    serviceability: { delivery_available: true, self_pickup_available: true }
  },

  {
    restaurant_id: "KAIDI_JMS_104",
    name: "Kaidi Kitchen",
    imageId: "c583ca6ce40b426797a78ae2ac91f2ec.jpg",
    brand: "Kaidi Kitchen",
    city: "Jamshedpur",
    locality: "Bistupur",
    address: "Bistupur Plaza, Jamshedpur",
    geo: { lat: 22.8059, lng: 86.2042 },
    cuisines: ["North Indian", "Chinese"],
    avg_rating: 4.1,
    total_ratings: "4K+",
    cost_for_two: 900,
    cost_for_two_message: "₹900 for two",
    delivery_time_minutes: 35,
    delivery_time_range: "30-40 mins",
    distance_km: 3.1,
    is_pure_veg: false,
    is_promoted: true,
    promoted_text: "Ad • Sponsored",
    availability: { is_open: true, opens_at: "12:00 PM", closes_at: "11:00 PM" },
    offers: [{ offer_id: "KK20", title: "20% OFF up to ₹150" }],
    delivery_fee: 35,
    surge_fee: 0,
    platform_fee: 5,
    badges: ["Best Seller"],
    serviceability: { delivery_available: true, self_pickup_available: true }
  },

  {
    restaurant_id: "GUILD_JMS_105",
    name: "The Guild",
    imageId:"9d8787e421c7eb82a4b611b0921f3c59",
    brand: "The Guild",
    city: "Jamshedpur",
    locality: "Sakchi",
    address: "Sakchi Main Road, Jamshedpur",
    geo: { lat: 22.8071, lng: 86.2015 },
    cuisines: ["Continental", "Asian"],
    avg_rating: 4.5,
    total_ratings: "1.5K+",
    cost_for_two: 1500,
    cost_for_two_message: "₹1500 for two",
    delivery_time_minutes: 38,
    delivery_time_range: "35-40 mins",
    distance_km: 2.9,
    is_pure_veg: false,
    is_promoted: false,
    availability: { is_open: true, opens_at: "1:00 PM", closes_at: "12:00 AM" },
    offers: [],
    delivery_fee: 45,
    surge_fee: 0,
    platform_fee: 5,
    badges: ["Premium", "Top Rated"],
    serviceability: { delivery_available: true, self_pickup_available: true }
  },

  {
    restaurant_id: "DOM_JMS_106",
    name: "Domino's Pizza",
    imageId: "RX_THUMBNAIL/IMAGES/VENDOR/2025/5/29/0bac30a3-6751-4433-b66c-5c784c2e48a4_522706.jpg",
    brand: "Domino's",
    city: "Jamshedpur",
    locality: "Bistupur",
    address: "Bistupur Circle, Jamshedpur",
    geo: { lat: 22.8050, lng: 86.2010 },
    cuisines: ["Pizza", "Fast Food"],
    avg_rating: 4.2,
    total_ratings: "8K+",
    cost_for_two: 600,
    cost_for_two_message: "₹600 for two",
    delivery_time_minutes: 24,
    delivery_time_range: "20-25 mins",
    distance_km: 2.2,
    is_pure_veg: false,
    is_promoted: false,
    availability: { is_open: true, opens_at: "10:00 AM", closes_at: "11:00 PM" },
    offers: [],
    delivery_fee: 30,
    surge_fee: 0,
    platform_fee: 5,
    badges: ["Fast Delivery"],
    serviceability: { delivery_available: true, self_pickup_available: true }
  },

  {
    restaurant_id: "BBQ_JMS_107",
    name: "Barbeque Nation",
    imageId:"RX_THUMBNAIL/IMAGES/VENDOR/2024/9/3/ce983a83-0032-4dfd-a07c-0c57d6fe5808_522704.jpg",
    brand: "Barbeque Nation",
    city: "Jamshedpur",
    locality: "Bistupur",
    address: "Bistupur Mall Road",
    geo: { lat: 22.8042, lng: 86.2045 },
    cuisines: ["BBQ", "North Indian"],
    avg_rating: 4.6,
    total_ratings: "5K+",
    cost_for_two: 1800,
    cost_for_two_message: "₹1800 for two",
    delivery_time_minutes: 40,
    delivery_time_range: "35-45 mins",
    distance_km: 3.4,
    is_pure_veg: false,
    is_promoted: false,
    availability: { is_open: true, opens_at: "12:00 PM", closes_at: "11:30 PM" },
    offers: [],
    delivery_fee: 50,
    surge_fee: 0,
    platform_fee: 5,
    badges: ["Premium"],
    serviceability: { delivery_available: true, self_pickup_available: false }
  },

  {
    restaurant_id: "UDUPI_JMS_108",
    name: "Udupi Sri Krishna",
    imageId: "hbtf39v85rmf0hitnrqk",
    brand: "Udupi",
    city: "Jamshedpur",
    locality: "Sakchi",
    address: "Sakchi Bazaar",
    geo: { lat: 22.8069, lng: 86.2030 },
    cuisines: ["South Indian", "Pure Veg"],
    avg_rating: 4.0,
    total_ratings: "3K+",
    cost_for_two: 250,
    cost_for_two_message: "₹250 for two",
    delivery_time_minutes: 20,
    delivery_time_range: "15-20 mins",
    distance_km: 1.5,
    is_pure_veg: true,
    is_promoted: false,
    availability: { is_open: true, opens_at: "8:00 AM", closes_at: "10:00 PM" },
    offers: [],
    delivery_fee: 20,
    surge_fee: 0,
    platform_fee: 5,
    badges: ["Budget Friendly"],
    serviceability: { delivery_available: true, self_pickup_available: true }
  }

];

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

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
