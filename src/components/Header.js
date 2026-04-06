import { LOGO_URL } from "../utils/constant";
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus"

const Header = () => {

  const [btnName, setbtnName] = useState("Login")
  const onlineStatus = useOnlineStatus();

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
          <li className="px-3" > <Link to="/cart"> Cart </Link></li>
          <li className="px-3" > <Link to="/contact"> Contact Us </Link></li>
          <li className="px-3" > <Link to="/grocery"> Grocery </Link></li>
          <button className="login"  
          onClick={() => {
             btnName == "Login"?setbtnName("logout"):setbtnName("Login");
          }} >
            {btnName}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;