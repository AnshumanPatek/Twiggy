const Body = () => {
  return (
    <>
      <div className="body bg-slate-400 m-4">
        {/* <input type="text " placeholder="Search Restaurant"></input> */}

        <div className="flex justify-between">
          <div className="p-4 m-4 ">
            <form>
              <input
                type="text"
                placeholder="Search Restaurant"
                className=" px-4 py-2 border border-red-400 shadow-lg hover:bg-teal-300 bg-green-200 rounded-lg"
              ></input>
            </form>

            <button className=" px-4 py-3 font-medium bg-green-400 hover:bg-blue-300 rounded-lg shadow-lg">
              Search
            </button>
          </div>

          <div className="flex items-center p-4 m-4 ">
            <label htmlFor="name" className="font-medium">
              {" "}
              User Name
            </label>
            <input
              id="name"
              className="px-4 py-3 m-2 shadow-lg bg-yellow-300 focus:border-b-2"
            ></input>
          </div>
        </div>
      </div>
    </>
  );
};
export default Body;
