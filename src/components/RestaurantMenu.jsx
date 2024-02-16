// Load Dynamic Content here
// import resList from "../utils/mockData";
import { CDN_URL } from "../utils/constants";
import Shimmer from "./Shimmer";
import { FiClock } from "react-icons/fi";
import { AiOutlineStar } from "react-icons/ai";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";

const RestaurantMenu = () => {
  // how to read resId in our component
  const { resId } = useParams();
  // console.log(resId);

  const resInfo = useRestaurantMenu(resId);

  // for showitem one at a time(default 1st item show)
  const [showIndex, setShowIndex] = useState(null);

  if (resInfo === null) return <Shimmer />;

  const {
    name,
    cuisines,
    costForTwo,
    deliveryTime,
    cloudinaryImageId,
    avgRating,
  } = resInfo?.cards[0]?.card?.card?.info;

  const { itemCards } =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;
  // console.log(itemCards);
  // console.log(resInfo);
  const Categories =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
  // console.log(Categories);

  // const { itemCards } =
  //   resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;

  return (
    <div className="menu grid grid-cols-4 m-3">
      <header className="flex col-start-2 col-end-4 mt-40 shadow-2xl  bg-gray-100 justify-between items-center menu-header">
        <div className=" menu-header-left">
          <img
            className="rounded-xl box-content overflow-clip w-[100%]"
            src={CDN_URL + cloudinaryImageId}
            alt="Restaurent Info"
          />
        </div>
        <div className="p-3 m-4 menu-header-right text-left">
          <div className="top">
            <h1 className="font-bold pt-4 text-xl text-light-text-color">
              {name}
            </h1>
            <h3 className="max-w-min break-words">{cuisines.join(",")}</h3>
          </div>

          <span
            className="avgRating mt-2 items-center
         flex justify-start gap-8"
          >
            <h4 className="flex items-center justify-evenly w-20 h-10 bg-green-500 text-white rounded-lg">
              <i>
                <AiOutlineStar />
              </i>
              <span className="font-bold"> {avgRating}</span>
            </h4>

            <h4 className="itemPrice">
              <span className="w-14 block font-bold">₹ {costForTwo / 100}</span>
            
            </h4>
          </span>

          <h4 className="time flex justify-start mt-1 gap-3 items-center">
            <span className="icons">
              <FiClock />
            </span>
            <span className="font-bold">
              {resInfo?.cards[0]?.card?.card?.info?.sla?.deliveryTime} Minutes
            </span>
          </h4>
        </div>
      </header>
      {/*=================Categories Accordions=============== */}

      {/* here Controlled component Now bcz of showItems(items hide/unhide) */}
      {Categories.map((category, index) => (
        <RestaurantCategory
          key={category?.card?.card?.title}
          data={category?.card?.card}
          // logic write here HW
          showItems={index === showIndex ? true : false}
          setShowIndex={() => setShowIndex(index)}
        />
      ))}
    </div>
  );
};
export default RestaurantMenu;
