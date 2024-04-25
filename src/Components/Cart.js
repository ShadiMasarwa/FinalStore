import React from "react";
import GlobalContext from "../Hooks/GlobalContext";
import { useContext } from "react";
import Product from "./Product";
import { NavLink } from "react-router-dom";

const Cart = () => {
  const { itemsInCart, storeProducts, setShowSidebar } =
    useContext(GlobalContext);

  return (
    <div>
      <div className="row">
        {itemsInCart.length > 0 ? (
          <NavLink
            to={{
              pathname: `/cart`,
            }}
            className={"text-decoration-none bg-success"}
          >
            <button
              className="btn btn-success w-100"
              onClick={() => setShowSidebar(false)}
            >
              Goto Check Out Page
            </button>
          </NavLink>
        ) : (
          <button
            className="btn btn-danger disabled"
            //
          >
            No Items In Cart
          </button>
        )}
      </div>
      <div className="row">
        {itemsInCart.map((itemInCart, index) => {
          const product = storeProducts.filter(
            (el) => el.id === itemInCart.id
          )[0];
          return <Product {...product} sender="cart" key={index} />;
        })}
      </div>
    </div>
  );
};

export default Cart;
