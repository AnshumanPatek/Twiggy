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
      <div className=" body grid grid-flow-col grid-cols-12">
        {/* <div className="search-container">
        <input type="text" placeholder="Search Food or Restaurant" />
        <button>Search</button>
      </div> */}
        <div className="filter lg:flex justify-start grid col-start-3 col-span-10  mt-[120px]">
          <div className="search flex  items-center h-15 ">
            <input
              className="searchBox  outline-none text-lg font-bold shadow-lg pt-[8px] pr-[15px] pb-[11px] pl-[12px] rounded-tl-lg rounded-bl-lg box-border text-text-color bg-white border-r-0 b border border-gray-500"
              type="text"
              placeholder="Seacrh a restaurant ......"
              value={SearchText}
              onChange={(e) => {
                setSearchText(e.target.value);
              }}
            ></input>

            <button
              className="text-white  cursor-pointer  rounded-tr-lg rounded-br-lg outline-none ml-[-4px] py-[14px] px-[22px] shadow-2xl bg-gray-500 hover:bg-green-500 "
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
          <div className="  ">
            <div className="p-2 flex  items-center justify-center h-20  ">
              <button
                className="search flex border-gray-400 items-center outline-none p-1 m-1 h-10 text-lg  shadow-lg  rounded-2xl box-border text-gray-700 bg-white hover:text-white  hover:bg-gray-500  border-2"
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
                className="search flex items-center outline-none p-1 m-2 h-10 text-lg  shadow-2xl  rounded-2xl box-border text-gray-700 bg-white hover:text-white  hover:bg-gray-500 border-2 border-solid border-gray-400"
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
                className="search flex items-center  outline-none p-1 m-2 h-10 text-lg  shadow-2xl  rounded-2xl box-border text-gray-700 bg-white hover:text-white  hover:bg-gray-500 border-2 border-solid border-gray-600"
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

      <div className="sm:grid sm:grid-cols-12">
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
