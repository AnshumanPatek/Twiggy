import ReactDOM from "react-dom/client";
import Header from "./components/Header";

const AppLayout = () => {
  // console.log("vicky");
  return (
    <>
      <div className="App">
        <Header />
      </div>
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
