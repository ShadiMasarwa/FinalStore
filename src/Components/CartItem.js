import React from "react";
import Icons from "./Icons";
import GlobalContext from "../Hooks/GlobalContext";
import { useContext } from "react";
import { NavLink } from "react-router-dom";

const CartItem = ({ ...product }) => {
  const { RemoveFromCart } = useContext(GlobalContext);

  return (
    <div className="d-flex justify-content-between align-items-center">
      <div className="d-flex align-items-center">
        <NavLink
          to={{
            pathname: `/product/${product.id}`,
          }}
          className={"text-decoration-none"}
        >
          <img
            src={product.thumbnail}
            alt={product.title}
            key={product.id}
            style={{ width: "50px", height: "50px", borderRadius: "50%" }}
          />
        </NavLink>

        <div style={{ color: "white", padding: "0 10px" }}>{product.title}</div>
      </div>
      <button
        style={{
          background: "none",
          fontSize: "30px",
          border: "none",
          padding: 0,
        }}
        onClick={() => RemoveFromCart(product.id)}
      >
        <Icons icon={"x"} />
      </button>
    </div>
  );
};

export default CartItem;
