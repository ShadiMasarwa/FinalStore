import React from "react";
import GlobalContext from "../Hooks/GlobalContext";
import { useContext } from "react";
import Cart from "./Cart";
import Fav from "./Fav";
import "../Components/Sidebar.css";
import Icons from "./Icons";

const Sidebar = () => {
  const { whatToShowInSidebar, setShowSidebar } = useContext(GlobalContext);

  return (
    <div
      className="fade-style position-absolute z-2 pt-1 d-flex flex-column "
      style={{ width: "15vw", top: "90px", right: "15px" }}
    >
      <div className="row">
        <div
          className="d-flex justify-content-between align-items-center mb-1"
          style={{
            height: "70px",
            backgroundColor: "rgba(0, 94, 184, 0.9)",
            borderRadius: "5px",
          }}
        >
          {whatToShowInSidebar === "cart" ? (
            <div
              style={{
                fontSize: 30,
                color: "red",
              }}
            >
              <Icons icon={"cart"} />
            </div>
          ) : (
            <div
              style={{
                fontSize: 30,
              }}
            >
              <Icons icon={"fav"} />
            </div>
          )}
          <div className="text-warning">
            {whatToShowInSidebar === "cart" ? (
              <h4>Cart</h4>
            ) : (
              <h4>Favorites</h4>
            )}
          </div>
          <button
            style={{
              background: "none",
              fontSize: "30px",
              border: "none",
            }}
            onClick={() => setShowSidebar(false)}
          >
            <Icons icon={"x"} />
          </button>
        </div>
        {whatToShowInSidebar === "cart" ? <Cart /> : <Fav />}
      </div>
    </div>
  );
};

export default Sidebar;
