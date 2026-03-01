import { LOGO_URL } from "../utils/constant";
import { useState } from "react";

const Header = () => {

  const [btnName, setbtnName] = useState("Login")

  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src={LOGO_URL}
        ></img>
      </div>

      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Cart</li>
          <li>Contact Us</li>
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