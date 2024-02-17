import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart} from "../utils/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems);

  const dispatch = useDispatch();

  const handelClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div className="mt-[200px] text-center m-4 p-4">
      <h1 className="font-bold text-2xl">Cart</h1>
      <button
        className="font-bold text-2xl bg-red-500 text-white rounded-md p-2 m-2"
        onClick={handelClearCart}
      >
        Clear Cart
      </button>

      {cartItems.length===0 && (<h1>Cart is Empty.Plz Add some Items to the Cart</h1>)}

      <div className="w-6/12 m-auto">
        <ItemList items={cartItems} />
      </div>
    </div>
  );
};

export default Cart;
