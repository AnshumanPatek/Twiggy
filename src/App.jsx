import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// import "./App.css";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import RestaurantCard from "./components/ReataurantCard";

function App() {
  return (
    <div className="app mt-0 m-auto p-0  box-border">
      <Header />
      <Body />
      {/* <RestaurantCard /> */}
      <Footer />
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
