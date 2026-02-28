import { CON_URL } from "../utils/constant";

const RestaurantCard = (props) => {

    const {resData} = props; 

    const {imageId,name, cuisines, avg_rating, delivery_time_minutes, cost_for_two} = resData;
  return (
    <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
      <img
        className="res-logo"
        src={CON_URL + imageId}
      ></img>
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4 className="rating">{avg_rating}⭐</h4>
      <h4> {delivery_time_minutes} minutes </h4>
      <h4> ₹{cost_for_two} for two </h4>
    </div>
  );
};

export default RestaurantCard;
