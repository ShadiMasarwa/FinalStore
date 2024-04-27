import React from "react";
import logo from "../images/logo.png";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import { useContext } from "react";
import GlobalContext from "../Hooks/GlobalContext";
import Icons from "./Icons";

const Header = () => {
  const {
    setWhatToShowInSidebar,
    setShowSidebar,
    showSidebar,
    itemsInCart,
    itemsInFav,
  } = useContext(GlobalContext);

  return (
    <div className="sticky-top container-fluid bg-warning p-4 mb-1 d-flex align-items-center justify-content-between ">
      <img src={logo} style={{ width: 100 }} alt="Logo" />
      <Navbar />
      <div>
        <button
          className="btn btn-light"
          onClick={() => {
            setShowSidebar(true);
            setWhatToShowInSidebar("cart");
          }}
        >
          <Icons icon={"cart"} />{" "}
          <span className="badge bg-secondary">{itemsInCart.length}</span>
        </button>{" "}
        <button
          className="btn btn-light"
          onClick={() => {
            setShowSidebar(true);
            setWhatToShowInSidebar("fav");
          }}
        >
          <Icons icon={"fav"} />{" "}
          <span className="badge bg-secondary">{itemsInFav.length}</span>
        </button>
      </div>
      {showSidebar && <Sidebar />}
    </div>
  );
};

export default Header;
