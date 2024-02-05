import { useState } from "react";
const Header = () => {
  const [value, setvalue] = useState("Login");
  return (
    <div id="header">
      <div id="logo">
        <img
          src="https://upload.wikimedia.org/wikipedia/en/7/7d/Logo_of_Zepto.png"
          alt="logo"
        />
      </div>
      <div id="navbar">
        <ul id="navlist">
          <li>Home</li>
          <li>About</li>
          <li>Join us</li>
          <li>Customer care</li>
          <li>Cart</li>
          <li>
            <button
              id="log"
              onClick={() => {
                value === "Login" ? setvalue("Logout") : setvalue("Login");
              }}
            >
              {value}
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
