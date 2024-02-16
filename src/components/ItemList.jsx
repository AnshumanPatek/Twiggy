import { CDN_URL } from "../utils/constants";
import { PiSquareLogoFill } from "react-icons/pi";

const ItemList = ({ items }) => {
  console.log(items);
  // const {imageId}=items[0]?.card?.info;



  return (
    <div>
      {items.map((item) => (
        <div
          key={item.card.info.id}
          className="p-2 flex bg-white justify-between items-center m-2 border-b-2 border-gray-400 "
        >
          <div className="p-2 w-9/12">
            <span className="font-bold">{item.card.info.name}</span>
            <br />
            <div className="flex items-center">
              <span className="font-bold ">₹{item.card.info.price / 100} </span>

              {item.card.info.itemAttribute.vegClassifier == "VEG" ? (
                <span className="px-3 text-green-600">
                  <PiSquareLogoFill />
                </span>
              ) : (
                <span className="px-3 font-extrabold text-red-600">
                  <PiSquareLogoFill />
                </span>
              )}
            </div>

            <p className="text-sm text-gray-600 m-2">
              {item.card.info.description}
            </p>
          </div>
          <div className="w-3/12">
            <div className="absolute">
              <button className="p-2 mx-16 text-white font-bold rounded-md bg-green-500">
                ADD +
              </button>
            </div>
            <img
              src={CDN_URL + item?.card?.info?.imageId}
              alt={item.card.info.name}
              className="w-full rounded-md"
            />
          </div>
        </div>
      ))}
    </div>
  );
};
export default ItemList;
