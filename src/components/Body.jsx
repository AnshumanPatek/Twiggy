import { SwiggyResList } from "../utils/swiggyMockData";
import { useState, useEffect } from "react";
// import { SWIGGY_URL } from "../utils/constants";
import Shimmer from "../components/Shimmer";
import RestaurantCard from "./RestaurantCard";
import useOnlineStatus from "../utils/useOnlineStatus";
import { Link } from "react-router-dom";

const Body = () => {
  const [listOfRes, setListOfRes] = useState([]);
  const [filteredRes, setFilteredRes] = useState([]);
  const [SearchText, setSearchText] = useState("");
  const onlineStatus = useOnlineStatus();

  if (onlineStatus === false)
    return <h1>You are Offline! Plz check your Internet Connection</h1>;

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    setListOfRes(
      SwiggyResList[0]?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
    setFilteredRes(
      SwiggyResList[0]?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
  };

  console.log(listOfRes);

  if (onlineStatus === false)
    return (
      <h1 style={{ textAlign: "center", marginTop: "100px" }}>
        You are offline! Please check your internet connection.
      </h1>
    );

  return listOfRes.length === 0 ? (
    <Shimmer />
  ) : (
    <div className=" body">
      {/* <div className="search-container">
        <input type="text" placeholder="Search Food or Restaurant" />
        <button>Search</button>
      </div> */}
      <div className="filter mt-[120px] flex">
        <div className="search m-4 p-4">
          <input
            className="searchBox ml-[-4px] outline-none text-lg font-bold shadow-lg pt-[8px] pr-[15px] pb-[11px] pl-[12px] rounded-tl-lg rounded-bl-lg box-border text-text-color bg-white border-r-0 border border-solid border-black"
            type="text"
            placeholder="Seacrh a restaurant ......"
            value={SearchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          ></input>

          <button
            className="text-white cursor-pointer border-none rounded-tr-lg rounded-br-lg outline-none ml-[-4px] py-[13px] px-[22px] shadow-2xl bg-green-500 hover:bg-green-800 "
            onClick={() => {
              const filteredResOfList = listOfRes.filter((res) =>
                res.info.name.toLowerCase().includes(SearchText.toLowerCase())
              );
              setFilteredRes(filteredResOfList);
              console.log(filteredResOfList);
            }}
          >
            Search
          </button>
        </div>

        <button
          className="search outline-none p-2 w-auto h-13 m-8 text-lg font-bold shadow-2xl  rounded-lg box-border text-white bg-green-500 hover:bg-green-800 border border-solid border-black"
          onClick={() => {
            // * Filter logic
            const filteredList = listOfRes.filter(
              (res) => parseFloat(res.info.avgRating) > 4
            );

            setFilteredRes(filteredList);
            console.log(filteredList);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>

      <div className=" flex flex-wrap ">
        {filteredRes.map((restaurant) => (
          <Link
            style={{
              textDecoration: "none",
              color: "#000",
            }}
            key={restaurant.info.id}
            to={"/restaurants/" + restaurant.info.id}
          >
            {" "}
            <RestaurantCard resData={restaurant} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
