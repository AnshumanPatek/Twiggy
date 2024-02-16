import logo from '../assets/logo.jpg'
const Footer = () => {
  return (
    <div className="footer">
    <div className='upper-footer flex justify-between bg-green-500'>
      <div className="logo-Container">
      <img className = "logo w-12 h-12"  src={logo} alt="logo" />
      </div>
      <div className='About us '>Fast, Fresh, Fantastic: Your Favorite Food, Right Where You Want It.</div>
      </div>

      <div className='lower-footer justify-center'>

            <p>made by Anshuman & Vicky &#169; 2024 </p>

      </div>





    </div>
  )
}

export default Footer;
