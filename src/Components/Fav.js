import React from "react";
import GlobalContext from "../Hooks/GlobalContext";
import { useContext } from "react";
import { NavLink } from "react-router-dom";
import FavItem from "./FavItem";

const Fav = () => {
  const { itemsInFav, storeProducts, setShowSidebar } =
    useContext(GlobalContext);

  return (
    <div>
      <div
        className="row mb-1"
        style={{
          borderRadius: "5px",
          textAlign: "center",
          backgroundColor: "rgba(0, 94, 184, 0.9)",
        }}
      >
        {itemsInFav.length > 0 ? (
          <NavLink
            to={{
              pathname: `/favorites`,
            }}
            className={"text-decoration-none "}
          >
            <button
              className="btn text-white"
              onClick={() => setShowSidebar(false)}
            >
              Goto Fav Page
            </button>
          </NavLink>
        ) : (
          <button
            className="btn btn-warning disabled"
            //
          >
            No Items In Fav
          </button>
        )}
      </div>
      {itemsInFav.map((itemInFav, index) => {
        const product = storeProducts.filter((el) => el.id === itemInFav)[0];
        return (
          <div
            className="row mb-1 p-2"
            style={{
              backgroundColor: "rgba(0, 94, 184, 0.9)",
              borderRadius: "5px",
            }}
            key={index}
          >
            <FavItem {...product} sender="fav" key={index} />
          </div>
        );
      })}
    </div>
  );
};

export default Fav;
