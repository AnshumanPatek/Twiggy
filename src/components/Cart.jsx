import { CDN_URL } from "../utils/constants";
// import { PiSquareLogoFill } from "react-icons/pi";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";
import { PiSquareLogoFill } from "react-icons/pi";

// import "../App.css";
import {
  removeFromCartItem,
  clearCart,
  decreaseCart,
  increaseCart,
  totalAmount,
} from "../utils/cartSlice";
// import { RiDeleteBin2Line } from "react-icons/ri";
// import useRestaurantMenu from "../utils/useRestaurantMenu";
import { Link } from "react-router-dom";

const Cart = ({ items }) => {
  const item = useSelector((store) => store.cart);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(totalAmount());
  }, [item, dispatch]);

  console.log(item);

  const handleRemoveItem = (item) => {
    dispatch(removeFromCartItem(item));
  };

  const handelClearCart = () => {
    dispatch(clearCart());
  };

  const handelIncreaseCart = (item) => {
    dispatch(increaseCart(item));
  };

  const handelDecreaseCart = (item) => {
    dispatch(decreaseCart(item));
  };

  return (
    <>
      {/* ========================== Cart Item title================== */}
      <div className="">
        <div className="grid bg-red-200 grid-cols-7 m-3 gap-3">
          <div className="p-2 flex col-start-1  shadow-2xl  col-end-8 bg-white justify-between items-center m-2 border-b-2 border-gray-400">
            <h3 className="">Item Name</h3>
            <h3 className="">Price</h3>
            <h3 className="">Quantity</h3>
            <h3 className="">Total</h3>
          </div>
        </div>

        {/* ========== Cart Item ================= */}
        <div className="">
          {items.map((item) => (
            <div className="grid grid-cols-7 m-3">
              <div
                className="p-2 flex  col-start-1 col-end-8 bg-white justify-between items-center border-b-2 border-gray-400"
                key={item.card.info.id}
              >
                <div className=" ">
                  {/* <img
                  src={CDN_URL + item?.card?.info?.imageId}
                  alt={item.card.info.name}
                /> */}
                  <div className="flex justify-between items-center ">
                    {item.card.info.itemAttribute.vegClassifier == "VEG" ? (
                      <span className=" text-green-600">
                        <PiSquareLogoFill />
                      </span>
                    ) : (
                      <span className="font-extrabold text-red-500">
                        <PiSquareLogoFill />
                      </span>
                    )}
                    <div className="mx-2">
                      <h3>{item.card.info.name}</h3>
                    </div>
                  </div>
                </div>

                <div className=" bg-pink-200 ">
                  ₹
                  {parseFloat(
                    item.card.info.defaultPrice / 100 ||
                      item.card.info.price / 100
                  ).toFixed(2)}
                </div>

                <div className="">
                  <div className=" flex text-green-500 bg-white border-2 border-gray-300 rounded justify-around items-center w-20">
                    <span onClick={() => handelDecreaseCart(item)}>
                      <FaMinus />
                    </span>
                    <span className="font-bold text-gray-500"> {item.cartQuantity}</span>
                    <span onClick={() => handelIncreaseCart(item)}>
                      <FaPlus />
                    </span>
                  </div>
                </div>

                <div className="">
                  ₹
                  {parseFloat(
                    (item.card.info.defaultPrice / 100 ||
                      item.card.info.price / 100) * item.cartQuantity
                  ).toFixed(2)}
                </div>
                <div></div>
              </div>
            </div>
          ))}
        </div>

        {/* ========= Cart Summary ============  */}
        <div className="grid ">
          <div className="p-2 grid grid-flow-col grid-cols-7 m-3 bg-white justify-between items-center border-b-2 border-gray-400">
            <div className="bg-red-200 col-start-1 col-end-6 ">
              <div className="">
                <div className="flex font-bold text-xl">Bill Details</div>
                <div className="flex font-semibold justify-between items-center text-gray-500">
                  <span>Item Total</span>
                  <span className="">₹{item.cartTotalAmount}</span>
                </div>
                <div className="flex font-semibold  text-gray-500 justify-between items-center">
                  <span>GST and Restaurant Charges @ 5%</span>
                  <span>₹ {(item.cartTotalAmount)*1/20}</span>
                </div>

                <div className="flex font-semibold  justify-between">
                  <button>To Pay Amount</button>
                  <span>₹ {(item.cartTotalAmount*1/20)+(item.cartTotalAmount)}</span>
                </div>
              </div>
            </div>

            <div className="grid col-start-6 col-end-8">
              <div>
                <Link to="/">
                  <span className="block font-bold text-xl text-white bg-blue-500 rounded-md p-2 m-2">
                    To Pay
                  </span>
                </Link>
              </div>
              <div>
                <button
                  className="font-bold text-xl text-white bg-red-500 rounded-md p-2 m-2"
                  onClick={handelClearCart}
                >
                  Clear Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Cart;
