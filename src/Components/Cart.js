import React from "react";
import GlobalContext from "../Hooks/GlobalContext";
import { useContext } from "react";
import { NavLink } from "react-router-dom";
import CartItem from "./CartItem";

const Cart = () => {
  const { itemsInCart, storeProducts, setShowSidebar } =
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
        {itemsInCart.length > 0 ? (
          <NavLink
            to={{
              pathname: `/cart`,
            }}
            className={"text-decoration-none "}
          >
            <button
              className="btn text-white"
              onClick={() => setShowSidebar(false)}
            >
              Goto Check Out
            </button>
          </NavLink>
        ) : (
          <button
            className="btn btn-warning disabled"
            //
          >
            No Items In Cart
          </button>
        )}
      </div>
      {itemsInCart.map((itemInCart, index) => {
        const product = storeProducts.filter(
          (el) => el.id === itemInCart.id
        )[0];
        return (
          <div
            className="row mb-1 p-2"
            style={{
              backgroundColor: "rgba(0, 94, 184, 0.9)",
              borderRadius: "5px",
            }}
          >
            <CartItem {...product} sender="cart" key={index} />
          </div>
        );
      })}
    </div>
  );
};

export default Cart;
