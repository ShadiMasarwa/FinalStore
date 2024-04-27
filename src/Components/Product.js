import React from "react";
import GlobalContext from "../Hooks/GlobalContext";
import { useContext } from "react";
import { NavLink } from "react-router-dom";
import "./product.css";
import badge from "../images/sale-badge-transperant.webp";
import Icons from "./Icons";

const Product = ({
  id,
  title,
  description,
  price,
  discountPercentage,
  sender,
  thumbnail,
}) => {
  const { addToCart, addToFav, RemoveFromCart, RemoveFromFav } =
    useContext(GlobalContext);

  const addItemToCart = (id) => {
    addToCart(id);
    RemoveFromFav(id);
  };

  return (
    <div
      className={sender === "main" ? "col-xl-3 col-md-6 col-sm-12" : "col-12"}
      key={id}
    >
      <div className="card w-20 m-2 position-relative">
        <NavLink
          to={{
            pathname: `/product/${id}`,
          }}
          className="text-decoration-none"
        >
          <div className="productImageResize">
            <img
              src={thumbnail}
              className="card-img-top p-2  "
              alt={title}
              style={{ height: 200, borderRadius: 20 }}
            />
            {discountPercentage > 0 ? (
              <>
                <img
                  src={badge}
                  alt={id}
                  className="position-absolute"
                  style={{ right: -15, top: -15, width: "100px" }}
                />
                <h5
                  className="position-absolute"
                  style={{
                    left: "10px",
                    top: "10px",
                    color: "white",
                    backgroundColor: "rgba(0, 0, 218, 0.7)",
                    padding: "5px",
                    fontSize: "1rem",
                    borderRadius: "5px",
                  }}
                >
                  {`${discountPercentage.toFixed(0)}% disc.`}
                </h5>
              </>
            ) : (
              ""
            )}
          </div>
        </NavLink>

        <div className="card-body text-center">
          <h5 className="card-title">{title}</h5>
          {sender === "main" ? (
            <p className="card-text" title={description}>
              {description.length <= 50
                ? description
                : description.slice(0, 50 - description.length) + "..."}{" "}
            </p>
          ) : (
            ""
          )}
          {sender === "main" ? (
            discountPercentage > 0 ? (
              <h6 className="card-text">
                Price:{" "}
                <span style={{ textDecoration: "line-through", color: "red" }}>
                  {price.toFixed(2)} ILS
                </span>
              </h6>
            ) : (
              <br />
            )
          ) : (
            ""
          )}
          <h5 className="card-text">
            {discountPercentage > 0 ? <span>Sale:</span> : <span>Price:</span>}{" "}
            {(price - (discountPercentage * price) / 100).toFixed(2)} ILS
          </h5>
          {sender === "main" ? (
            <div>
              <button
                onClick={() => addToCart(id)}
                className="btn btn-success w-25"
                title="Add to cart"
              >
                <Icons icon={"cart"} />
              </button>{" "}
              <button
                onClick={() => addToFav(id)}
                className="btn btn-primary w-25"
                title="Add to Favorites"
              >
                <Icons icon={"fav"} />
              </button>
            </div>
          ) : (
            ""
          )}
          {sender === "cart" ? (
            <div>
              <button
                onClick={() => RemoveFromCart(id)}
                className="btn btn-success w-50"
              >
                <Icons icon={"x"} />
              </button>
            </div>
          ) : (
            ""
          )}
          {sender === "fav" ? (
            <div>
              <button
                onClick={() => addItemToCart(id)}
                className="btn btn-success w-25"
              >
                <Icons icon={"cart"} />
              </button>{" "}
              <button
                onClick={() => RemoveFromFav(id)}
                className="btn btn-primary w-25"
              >
                <Icons icon={"x"} />
              </button>
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
};
export default Product;
