import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;

  const {
    cloudinaryImageId,
    name,
    cuisines,
    avgRating,
    costForTwo,
    deliveryTime,
  } = resData?.data;

  console.log(name);

  return (
    <div className=" rounded-lg bg-[#f0f0f0] hover:-translate-y-1 hover:scale-110 hover: duration-300 ... w-[250px] p-[5px] border-[5px] border-solid hover:2xl hover:cursor-pointer ">
      <img
        className="logo rounded-xl "
        src={CDN_URL + cloudinaryImageId}
        alt="Pizza"
      />
      <div className=" pt-3	">
        <h2>{name}</h2>
        <h3 className="break-all text-md">{cuisines.join(",")} </h3>
        <h4>{avgRating} Stars</h4>
        <h4>Rs. {costForTwo / 100} FOR TWO</h4>
        <h4>{deliveryTime} Minutes</h4>
      </div>
    </div>
  );
};

export default RestaurantCard;
