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
  console.log(items);

  // const handleRemoveItem = (item) => {
  //   dispatch(removeFromCartItem(item));
  // };

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
      <div>
        <div className="sm:grid hidden grid-cols-12 m-3">
          <div className="p-2 grid shadow-md rounded-xl bg-gray-100 grid-flow-col gap-2  col-start-2 col-end-12 justify-between items-center border-b-2 border-gray-400">
            <div className=" text-gray-600 font-bold text-lg col-span-6 w-[40vw]">
              Item Name
            </div>
            <div className=" grid grid-flow-col  text-gray-600 font-bold text-lg col-span-6">
              <h3 className=" w-[12vw] col-span-2  flex justify-center text-gray-600 font-bold text-lg  items-center   ">
                Price
              </h3>
              <h3 className=" w-[12vw] col-span-2 flex justify-center text-gray-600 font-bold text-lg ">
                Quantity
              </h3>
              <h3 className=" w-[12vw] col-span-2 flex  justify-center text-gray-600 font-bold text-lg">
                Total
              </h3>
            </div>
          </div>
        </div>
        {/* gugj */}
        <div className="">
          {items.map((item) => (
            <div className="sm:grid  sm:grid-cols-12 m-3">
              <div
                className="p-2 grid shadow-sm rounded-xl bg-gray-50 sm:grid-flow-col  col-start-2 col-end-12 justify-between items-center border-b-2 border-gray-400"
                key={item.card.info.id}
              >
                <div className=" text-gray-600 flex justify-center sm:justify-normal font-bold text-lg col-span-6 sm:w-[40vw]">
                  {/* <img
                  src={CDN_URL + item?.card?.info?.imageId}
                  alt={item.card.info.name}
                /> */}
                  <div className="flex items-center ">
                    {item.card.info.itemAttribute.vegClassifier == "VEG" ? (
                      <span className=" text-green-600">
                        <PiSquareLogoFill />
                      </span>
                    ) : (
                      <span className="font-extrabold text-red-500">
                        <PiSquareLogoFill />
                      </span>
                    )}
                    <div className="mx-2 text-gray-600 font-semibold ">
                      <h3>{item.card.info.name}</h3>
                    </div>
                  </div>
                </div>

                <div className=" sm:grid mt-2 sm:m-0 sm:grid-flow-col flex justify-around  text-gray-600 font-bold text-lg col-span-6">
                  <div className=" sm:w-[12vw] col-span-2  flex justify-center text-gray-600 font-bold text-lg  items-center  ">
                    ₹
                    {parseFloat(
                      item.card.info.defaultPrice / 100 ||
                        item.card.info.price / 100
                    ).toFixed(2)}
                  </div>

                  <div className=" sm:w-[12vw] w-20 col-span-2 flex justify-center text-gray-600 font-bold text-lg">
                    <div className=" flex text-green-500 bg-white border-2 border-gray-300 rounded justify-around items-center w-full sm:w-20">
                      <span onClick={() => handelDecreaseCart(item)}>
                        <FaMinus />
                      </span>
                      <span className="font-bold text-gray-500">
                        {item.cartQuantity}
                      </span>
                      <span onClick={() => handelIncreaseCart(item)}>
                        <FaPlus />
                      </span>
                    </div>
                  </div>

                  <div className=" sm:w-[12vw] col-span-2 flex  justify-center text-gray-600 font-bold text-lg">
                    ₹
                    {parseFloat(
                      (item.card.info.defaultPrice / 100 ||
                        item.card.info.price / 100) * item.cartQuantity
                    ).toFixed(2)}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Billing Details */}
        <div className="grid sm:grid-cols-12  ">
          <div className="p-2 grid sm:grid-flow-col col-start-2 col-end-12 m-3 bg-white justify-between items-center border-b-2 border-gray-400">
            <div className="border-2 p-2 shadow-xl rounded-lg sm:col-span-9 col-span-12 ">
              <div className="">
                <div className="flex font-bold text-xl">Bill Details</div>
                <div className="flex font-semibold justify-between items-center text-gray-600">
                  <span>Item Total</span>
                  <span className="">₹{item.cartTotalAmount}</span>
                </div>
                <div className="flex font-semibold  text-gray-600 justify-between items-center">
                  <span>GST and Restaurant Charges @ 5%</span>
                  <span>₹ {(item.cartTotalAmount * 1) / 20}</span>
                </div>

                <div className="flex font-bold  justify-between">
                  <button>To Pay Amount</button>
                  <span>
                    ₹ {(item.cartTotalAmount * 1) / 20 + item.cartTotalAmount}
                  </span>
                </div>
              </div>
            </div>

            <div className="flex m-2 justify-between items-center col-span-12 md:col-span-3">
              <div>
                <Link to="/">
                  <span className="block shadow-xl  font-bold text-xl text-white bg-blue-500 rounded-md p-2 m-2">
                    To Pay
                  </span>
                </Link>
              </div>
              <div>
                <button
                  className="font-bold shadow-xl  text-xl text-white bg-red-500 rounded-md p-2 m-2"
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
