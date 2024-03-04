import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import ItemList from "./ItemList";

const RestaurantCategory = ({ data, showItems, setShowIndex }) => {
  // const [showItems, setShowItems] = useState();
  // console.log(data);
  //   console.log(data?.itemCards[0]?.card?.info?.name);

  const handleClick = () => {
    setShowIndex();
    // console.log(showItems);
    // Toggle features
    // setShowItems(!showItems);
  };

  return (
    <div className="col-start-2 bg-green-300 col-end-4">
      {/* Accordion Header */}

      <div className="p-4 rounded-sm mx-auto my-4 shadow-xl bg-white ">
        <div
          className="flex cursor-pointer justify-between items-center"
          onClick={handleClick}
        >
          <span className="font-extrabold text-lg">
            {data.title} ({data.itemCards.length})
          </span>
          <span>
            <IoIosArrowDown />
          </span>
        </div>

        {showItems && <ItemList items={data?.itemCards} />}
      </div>
      {/* <span>
        <IoIosArrowUp />
      </span> */}

      {/* Accordion Body */}
    </div>
  );
};

export default RestaurantCategory;
