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
  console.log(resInfo);

  // for showitem one at a time(default 1st item show)
  const [showIndex, setShowIndex] = useState(null);

  if (resInfo === null) return <Shimmer />;

  const {
    name,
    cuisines,
    costForTwo,
    cloudinaryImageId,
    locality,
    avgRating,
    totalRatingsString,
  } = resInfo?.cards[0]?.card?.card?.info;

  const { itemCards } =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;
  console.log(itemCards);
  // console.log(
  //   MenuResList1[0]?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR
  //     ?.cards[2]?.card?.card
  // );

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
    <div className="menu ">
      <div className="grid grid-cols-12  m-3">
        <header className="md:flex  md:justify-around grid  col-start-3 col-span-8 mt-4 shadow-xl rounded-md  bg-gray-200 justify-center items-center menu-header">
          <div className=" menu-header-left flex justify-center md:col-start-3 md:col-end-8">
            <img
              className="rounded-xl w-[180px] h-[150px] mt-1 lg:h-[16vw] md:h-[22vw] box-content overflow-clip  md:w-full"
              src={CDN_URL + cloudinaryImageId}
              alt="Restaurent Info"
            />
          </div>
          <div className="p-3  menu-header-right">
            <div className="top">
              <h1 className="font-bold pt-4 text-xl text-light-text-color">
                {name}
              </h1>
              <h1 className="text-xl text-light-text-color">{locality}</h1>
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
                <span className="w-14 block font-bold">
                  ₹ {costForTwo / 100}
                </span>
              </h4>
            </span>

            <h4 className="time flex mt-1 gap-3 items-center">
              <span className="w-22 p-1 h-10 bg-gray-500 text-white rounded-lg">
                {totalRatingsString}
              </span>
              <span className="icons">
                <FiClock />
              </span>
              <span className="font-bold">
                {resInfo?.data?.cards[0]?.card?.card?.info?.sla?.deliveryTime}{" "}
                Minutes
              </span>
            </h4>
          </div>
        </header>

        <div className="col-start-3 col-span-8">
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
      </div>
      {/*=================Categories Accordions=============== */}

      {/* here Controlled component Now bcz of showItems(items hide/unhide) */}
    </div>
  );
};
export default RestaurantMenu;
