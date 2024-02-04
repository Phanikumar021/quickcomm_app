const Header = () => {
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
            <button id="log">Login</button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
