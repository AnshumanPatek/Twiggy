import { FaPlus, FaMinus } from "react-icons/fa";
import { useState } from "react";
// import { useDispatch } from "react-redux";
// import { addItem, removeItem } from "../utils/cartSlice";



const Quantity = () => {
  const [quantity, setQuantity] = useState(1);
  // const IncreaseItem = () => {
  //   setQuantity(quantity + 1);
  //   // 0
  // };

  const IncreaseItem = () => {
    setQuantity(quantity + 1);
    // 0
  };

  const DecreaseItem = () => {
    quantity > 1 ? setQuantity(quantity - 1) : setQuantity(1);
  };

  // const dispatch = useDispatch();
  //  const handleAddItem = (item) => {
  //    dispatch(addItem(item));
  //  };

  // const handlRemoveItem = (item) => {
  //   dispatch(removeItem(item));
  // };

  return (
    <div className="flex text-green-500 bg-white border-2 border-gray-300 rounded justify-around items-center w-20">
      <span className=" cursor-pointer" onClick={() => IncreaseItem()}>
        <FaPlus />
      </span>

      <span className="font-extrabold"> {quantity}</span>

      <span className=" cursor-pointer" onClick={() => DecreaseItem()}>
        <FaMinus />
      </span>
    </div>
  );
};
export default Quantity;
