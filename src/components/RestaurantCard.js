import { CON_URL } from "../utils/constant";

const RestaurantCard = ({ resData }) => {

  const {
    cloudinaryImageId,
    name,
    cuisines,
    avgRating,
    sla,
    costForTwo
  } = resData;

  return (
    <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
      <img
        className="res-logo"
        src={CON_URL + cloudinaryImageId}
        alt="restaurant"
      />

      <h3>{name}</h3>

      <h4>{cuisines?.join(", ")}</h4>

      <h4 className="rating">{avgRating} ⭐</h4>

      <h4>{sla?.deliveryTime} minutes</h4>

      <h4>{costForTwo}</h4>
    </div>
  );
};

export default RestaurantCard;
