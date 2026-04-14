import { LOGO_URL } from "../utils/constant";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus"
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {

  const [btnName, setbtnName] = useState("Login")
  const onlineStatus = useOnlineStatus();
  const {loggedInUser} = useContext(UserContext);

  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems);

  return (
    <div className="flex justify-between bg-pink-50 shadow-md m-2">
      <div className="logo-container">
        <img
          className="w-19"
          src={LOGO_URL}
        ></img>
      </div>

      <div className="nav-items">
        <ul className="flex p-5 m-2" >

          <li className="px-5" >
           Online Status : {(onlineStatus) ? "✅ ": "🛑"}
          </li>

          <li className="px-3" >
            <Link to="/"> Home </Link>
           
            </li>

          <li className="px-3" > <Link to="/about"> About Us </Link></li>

          <li className="px-3 font-bold text-lg" > <Link to="/cart"> Cart -{cartItems.length}  </Link></li>

          <li className="px-3" > <Link to="/contact"> Contact Us </Link></li>

          <li className="px-3" > <Link to="/grocery"> Grocery </Link></li>
          <button className="login"  
          onClick={() => {
             btnName == "Login"?setbtnName("logout"):setbtnName("Login");
          }} >
            {btnName}
          </button>

          
          <li className="px-3 font-bold cursor-pointer" > {loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;