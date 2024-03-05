import { useEffect, useState } from "react";
import { MENU_URL } from "../utils/constants";
import MenuResList from "./menuSwiggyData";
// import { SwiggyResList } from "./swiggyMockData";

const useRestaurantMenu = (resId) => {
  const [resInfo, setResInfo] = useState(null);
  console.log(resInfo);

  // console.log(MenuResList1[0]?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card);
  // console.log(MenuResList1[0]);

  // ======  Dynamic Fetch  =====
  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(MENU_URL + resId);
    const json = await data.json();
    setResInfo(json?.data);
    console.log(json?.data);
  };

  // ==== Static Data  =====

  // useEffect(() => {
  //   fetchData();
  // }, []);

  // const fetchData = () => {
  //   setResInfo(MenuResList[0]);
  // };
  // console.log(resInfo);

  return resInfo;
};

export default useRestaurantMenu;
