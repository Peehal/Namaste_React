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
    <div className="w-full max-w-[250] rounded-xl  shadow-md hover:scale-95 transition duration-300 p-3 cursor-pointer bg-gray-50" >
      <img
        className="w-full h-40 object-cover rounded-lg"
        src={CON_URL + cloudinaryImageId}
        alt="restaurant"
      />

      <h3 className="font-bold text-lg mt-3 py-0.5">{name}</h3>

      <h4>{cuisines?.join(", ")}</h4>

      <h4 className="rating">{avgRating} ⭐</h4>

      <h4>{sla?.deliveryTime} minutes</h4>

      <h4>{costForTwo}</h4>
    </div>
  );
};

// Higher Order Component
export const IsOpenLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <div className="relative">
        <label className="absolute bg-green-500 text-white px-2 py-1 rounded-md m-2 z-10 text-sm font-semibold">
          Open
        </label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestaurantCard;
