import resList from "../utils/mockData";
import { useState } from "react";
import Shimmer from "../components/Shimmer";
// import { useEffect } from "react";
import RestaurantCard from "./ReataurantCard";

const Body = () => {
  const [listOfRes, setListOfRes] = useState(resList);
  const [SearchText, setSearchText] = useState("");
  // const [filteredRes, setFilteredRes] = useState([]);

  //   useEffect(() => {
  //     fetchData();
  //   }, []);

  //   const fetchData = async () => {
  //     const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=25.6113642&lng=85.0770042&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING
  // "
  //     );

  //     const json = await data.json();
  //     console.log(json);
  //   };
  // setListOfRes(json?.data?.cards[2]?.data?.data?.cards);
  // setFilteredRes(json?.data?.cards[2]?.data?.data?.cards);

  return listOfRes.length === 0 ? (
    <Shimmer />
  ) : (
    <div className=" body m-2 ">
      {/* <div className="search-container">
        <input type="text" placeholder="Search Food or Restaurant" />
        <button>Search</button>
      </div> */}
      <div className="filter flex g-5 mx-4 my-7 justify-center bg-sky-100">
        <div className="search flex  w-[40%]">
          <input
            className="SearchBox w-[100%] box-border  text-black bg-white border-r-0 rounded-xl px-3 py-4 shadow-lg hover:shadow-red-500/40"
            type="text"
            placeholder="Seacrh Restaurant"
            value={SearchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          ></input>

          <button
            className="text-white cursor-pointer bg-pink-400 rounded-lg  mx-[4px] px-3 py-5 shadow-xl"
            onClick={() => {
              const filteredResOfList = listOfRes.filter((res) =>
                res.data.name.toLowerCase().includes(SearchText.toLowerCase())
              );
              setListOfRes(filteredResOfList);
              // console.log(filterResList);
            }}
          >
            Search
          </button>
        </div>

        <button
          className="filterBtn rounded-lg hover:bg-red-400"
          onClick={() => {
            // * Filter logic
            const filteredList = listOfRes.filter(
              (res) => res.data.avgRating > 4
            );

            setListOfRes(filteredList);
            // console.log(filteredList);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>

      <div className=" flex flex-wrap justify-around gap-[10px] mx-0 my-[20px]">
        {listOfRes.map((restaurant) => (
          <RestaurantCard key={restaurant.data.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
