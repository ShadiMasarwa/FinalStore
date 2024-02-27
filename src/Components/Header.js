import React from "react";
import logo from "../images/logo.png";
import Navbar from "./Navbar";
import { useContext } from "react";
import GlobalContext from "../Hooks/GlobalContext";

const Header = () => {
  const {
    setWhatToShowInSidebar,
    whatToShowInSidebar,
    setShowSidebar,
    itemsInCart,
    itemsInFav,
  } = useContext(GlobalContext);

  const btnClicked = (btn) => {
    setWhatToShowInSidebar(btn);
    switch (btn) {
      case "":
        setShowSidebar(false);
        break;
      default:
        setShowSidebar(true);
    }
  };

  return (
    <div className="container-fluid bg-warning p-4 mb-1 d-flex align-items-center justify-content-between sticky-top">
      <img src={logo} style={{ width: 100 }} alt="Logo" />
      <Navbar />
      <div>
        <button
          className="btn btn-light"
          onClick={() =>
            whatToShowInSidebar === "cart" ? btnClicked("") : btnClicked("cart")
          }
        >
          🛒 <span className="badge bg-secondary">{itemsInCart.length}</span>
        </button>{" "}
        <button
          className="btn btn-light"
          onClick={() =>
            whatToShowInSidebar === "fav" ? btnClicked("") : btnClicked("fav")
          }
        >
          ❤️ <span className="badge bg-secondary">{itemsInFav.length}</span>
        </button>
      </div>
    </div>
  );
};

export default Header;
