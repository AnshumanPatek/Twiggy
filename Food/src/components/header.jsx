import logo from '../assets/logo.jpg'

const Header =()=>{
    return(
      <div className = "Header flex justify-between px-10 bg-red-500">
      <div className = "logo-container ">
      <img className = "logo w-20 h-20"  src={logo} alt="logo" />
      </div>

      <div className="nav-items">
      <ul className='flex w-full gap-4'>
        <li>Home</li>
        <li>About Us</li>
        <li>Contact Us</li>
        <li>Login</li>
      </ul>

      </div>
      </div>
    );
    };

    export default Header;