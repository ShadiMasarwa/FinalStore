import React from "react";
import GlobalContext from "../Hooks/GlobalContext";
import { useContext } from "react";
import Product from "./Product";
import { NavLink } from "react-router-dom";

const Fav = () => {
  const { itemsInFav, storeProducts, setShowSidebar } =
    useContext(GlobalContext);

  return (
    <div>
      <div className="row">
        {itemsInFav.length > 0 ? (
          <NavLink
            to={{
              pathname: `/favorites`,
            }}
            className={"text-decoration-none bg-warning"}
          >
            <button
              className="btn btn-warning w-100"
              onClick={() => setShowSidebar(false)}
            >
              Go To Favorites Page
            </button>
          </NavLink>
        ) : (
          <button className="btn btn-danger disabled">
            No Items In Favorites
          </button>
        )}
      </div>

      <div className="row">
        {itemsInFav.map((id, index) => {
          const product = storeProducts.filter((el) => el.id === id)[0];
          return <Product {...product} sender="fav" key={index} />;
        })}
      </div>
    </div>
  );
};

export default Fav;
