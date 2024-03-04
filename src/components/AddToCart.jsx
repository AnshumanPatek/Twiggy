import { useDispatch, useSelector } from "react-redux";
// import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";
import { FaArrowLeft } from "react-icons/fa";
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
          <div className="start-shopping">
            <Link to="/">
              <span>Continue Shopping</span>
              <FaArrowLeft />
            </Link>
          </div>
        </div>
      ) : (
          <Cart items={cartItems} />
          
      )}
    </div>
  );
};

export default AddToCart;
