import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/CartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);

  const dispatch = useDispatch ();

  const handleClearCart = () => {
    dispatch(clearCart())
  }

  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-2xl p-6">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-2">
          Cart
        </h1>

        <p className="text-center text-gray-500 mb-6">
          {cartItems.length} item{cartItems.length !== 1 ? "s" : ""} in your cart
        </p>

        <button 
        className="p-1 m-2 bg-pink-50 rounded-lg"
        onClick={handleClearCart}
        >
            clear Cart
        </button>

        <div className="space-y-4">
          <ItemList items={cartItems} />
        </div>
      </div>
    </div>
  );z
};

export default Cart;