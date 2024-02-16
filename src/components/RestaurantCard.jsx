import { CDN_URL } from "../utils/constants";
import { AiOutlineStar } from "react-icons/ai";
import { FiClock } from "react-icons/fi";

const RestaurantCard = (props) => {
  const { resData } = props;

  const { cloudinaryImageId, name, cuisines, avgRating, costForTwo } =
    resData?.info;

  // console.log(resData?.info);

  return (
    <div className="m-[20px] p-[10px] w-[250px]  shadow-2xl bg-gray-100 rounded-lg transition-all hover:-translate-y-1 hover:scale-110 hover: duration-300 border-[2px] border-solid hover:2xl hover:cursor-pointer">
      <img
        className="logo rounded-xl box-content overflow-clip h-[160px] w-[100%] "
        src={CDN_URL + cloudinaryImageId}
        alt="Pizza"
      />
      <div>
        <h2 className="block font-bold pt-4 text-xl text-light-text-color	">
          {name}
        </h2>
        {/* cuisines is like array sojoin() */}
        <div className=" max-w-min break-words ">
          <h3 className="">{cuisines.join(",")}</h3>
        </div>

        <span
          className="avgRating mt-2 items-center
         flex justify-start gap-8"
        >
          <h4 className="flex items-center justify-evenly w-14 h-8 bg-green-500 text-white rounded-lg">
            <i>
              <AiOutlineStar />
            </i>
            <span className="font-bold"> {avgRating}</span>
          </h4>

          <h4 className="itemPrice">
            <span className="font-bold">{costForTwo}</span>
          </h4>
        </span>

        <h4 className="time flex justify-start mt-1 gap-3 items-center">
          <span className="icons">
            <FiClock />
          </span>
          <span className="font-bold">
            {resData?.info?.sla?.deliveryTime} Minutes
          </span>
        </h4>
      </div>
    </div>
  );
};

export default RestaurantCard;
