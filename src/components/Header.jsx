const Header = () => {
  return (
    <div className="header flex justify-between flex-wrap">
      <div className="logo">
        <img
          src="C:\Users\ksing\Desktop\Swiggy Project\my-project\src\assets\logo.jpg"
          alt="App_Logo"
          className="logo"
        />
      </div>

      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};
export default Header;
