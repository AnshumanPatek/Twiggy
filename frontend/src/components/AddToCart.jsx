import { useDispatch, useSelector } from "react-redux";
// import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import "../App.css";

// import Quantity from "./Quantity";
import Cart from "./Cart";

const AddToCart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems);

  const dispatch = useDispatch();
  const handelClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div className="mt-[200px] text-center m-4 p-4">
      <h1 className="font-bold text-2xl">Shopping Cart</h1>
      {/* <button
          className="font-bold text-2xl bg-red-500 text-white rounded-md p-2 m-2"
          onClick={handelClearCart}
        >
          Clear Cart
        </button> */}

      {cartItems.length === 0 ? (
        <div className="empty-cart pt-3">
          <h1>Cart is Empty.Plz Add some Items to the Cart</h1>
          <button className=" start-shopping font-bold shadow-xl  text-xl text-white bg-red-500 rounded-md p-2 m-2">
            <Link to="/" className="">
              <span>Continue Shopping</span>
              <span className="flex justify-between p-2 items-center">
                <FaArrowLeft />
                <FaArrowRight />
              </span>
            </Link>
          </button>
        </div>
      ) : (
        <Cart items={cartItems} />
      )}
    </div>
  );
};

export default AddToCart;
