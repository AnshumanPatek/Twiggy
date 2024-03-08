import { SwiggyResList } from "../utils/swiggyStaticData";
import { GoSearch } from "react-icons/go";
// import MenuResList from "../utils/menuSwiggyData";
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
  // const [searchState, setSearchState] = useState("");

  //  {const filteredResOfList.length === 0
  //   ? setFilteredRes(listOfRes)
  //   : setFilteredRes(filteredRes)}

  // if (onlineStatus === false)
  //   return <h1>You are Offline! Plz check your Internet Connection</h1>;

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

  console.log(SwiggyResList);
  console.log(filteredRes);

  // console.log(SwiggyResList);

  if (onlineStatus === false)
    return (
      <h1 style={{ textAlign: "center", marginTop: "100px" }}>
        You are offline! Please check your internet connection.
      </h1>
    );

  return listOfRes.length === 0 ? (
    <Shimmer />
  ) : (
    <>
      <div className=" body grid  grid-flow-col sm:grid-cols-12">
        {/* <div className="search-container">
        <input type="text" placeholder="Search Food or Restaurant" />
        <button>Search</button>
      </div> */}
        <div className="filter lg:flex justify-start sm:col-start-3 sm:col-span-8  sm:h-14 mt-[20px]">
          <div className="search lg:w-[60%]  justify-center flex items-center lg:h-full h-10 ">
            <input
              className="searchBox sm:w-full h-full  outline-none text-lg font-bold shadow-lg pt-[8px] pr-[15px] pb-[11px] pl-[12px] rounded-tl-lg rounded-bl-lg box-border text-text-color bg-white border-r-0 b border border-gray-500"
              type="text"
              placeholder="Seacrh a restaurant ......"
              value={SearchText}
              onChange={(e) => {
                setSearchText(e.target.value);
              }}
            ></input>

            <button
              className="text-white h-full  cursor-pointer  rounded-tr-lg rounded-br-lg outline-none ml-[-4px] py-[14px] px-[22px] shadow-2xl bg-gray-500 hover:bg-green-500 "
              onClick={() => {
                const filteredResOfList = listOfRes.filter((res) =>
                  res.info.name.toLowerCase().includes(SearchText.toLowerCase())
                );
                setFilteredRes(filteredResOfList);
                // filteredResOfList.length === 0
                //   ? setFilteredRes(listOfRes)
                //   : setFilteredRes(filteredRes);
                console.log(filteredResOfList);
              }}
            >
              <GoSearch className="text-xl text-white" />
            </button>
          </div>
          {/*========= Filter Button ============ */}

          <div className="p-2 flex sm:w-full items-center sm:justify-start justify-center sm:h-full m-2 sm:m-0 h-10  ">
            <button
              className="search sm:h-full bg-gray-100 border-gray-400 flex items-center text-sm outline-none p-1 h-8 sm:text-lg  shadow-xl  rounded-xl box-border text-gray-700 hover:text-white  hover:bg-gray-500"
              onClick={() => {
                // * Filter logic
                const filteredList = listOfRes.filter(
                  (res) => parseFloat(res.info.avgRating) > 4
                );

                setFilteredRes(filteredList);
                // console.log(filteredList);
              }}
            >
              Rating 4.0+
            </button>

            <button
              className="search flex sm:h-full items-center outline-none m-4 p-1 h-8 text-sm sm:text-lg  shadow-xl  rounded-xl box-border text-gray-700 bg-gray-100 hover:text-white  hover:bg-gray-500"
              onClick={() => {
                // * Filter logic
                const filteredList = listOfRes.filter(
                  (res) => parseFloat(res.info.costForTwo.slice(1, 5)) < 300
                );

                setFilteredRes(filteredList);
                // console.log(filteredList);
              }}
            >
              Less than Rs. 300
            </button>

            <button
              className="search flex sm:h-full items-center text-sm  outline-none p-1  h-8 sm:text-lg  shadow-xl  rounded-xl box-border text-gray-700 bg-gray-100 hover:text-white  hover:bg-gray-500 "
              onClick={() => {
                // * Filter logic
                const filteredList = listOfRes.filter(
                  (res) => parseFloat(res.info.costForTwo.slice(1, 5)) > 300
                );

                setFilteredRes(filteredList);
                // console.log(filteredList);
              }}
            >
              Rs. 300-Rs.600
            </button>
          </div>
        </div>

        {/* <div className=" flex flex-wrap ">
        {filteredRes.map((restaurant) => (
          <Link
            style={{
              textDecoration: "none",
              color: "#000",
            }}
            key={restaurant.info.id}
            to={"/restaurants/" + restaurant.info.id}
          >
            <RestaurantCard resData={restaurant} />
          </Link>
        ))}
      </div> */}
      </div>

      <div className="sm:grid sm:grid-cols-12 mt-2  sm:mt-20 lg:mt-4">
        <div className=" flex justify-center items-center sm:col-start-2 sm:col-span-10 flex-wrap">
          {filteredRes.map((restaurant) => (
            <Link
              style={{
                textDecoration: "none",
                color: "#000",
              }}
              key={restaurant.info.id}
              to={"/restaurants/" + restaurant.info.id}
            >
              <RestaurantCard resData={restaurant} />
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default Body;
