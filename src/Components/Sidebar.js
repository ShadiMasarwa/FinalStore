import React from "react";
import GlobalContext from "../Hooks/GlobalContext";
import { useContext } from "react";
import Cart from "./Cart";
import Fav from "./Fav";

const Sidebar = () => {
  const { whatToShowInSidebar } = useContext(GlobalContext);

  return (
    <div
      className="position-absolute top-0 end-0 z-2 "
      style={{ width: "15vw" }}
    >
      <div className="row">
        <div className="bg-secondary">
          <div
            className="d-flex flex-column gap-2"
            style={{ minHeight: "80vh" }}
          >
            <div className="d-flex justify-content-between">
              {whatToShowInSidebar === "cart" ? (
                <p style={{ fontSize: 30 }}>🛒</p>
              ) : (
                <p style={{ fontSize: 30 }}>❤️</p>
              )}
            </div>
            {whatToShowInSidebar === "cart" ? <Cart /> : <Fav />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
