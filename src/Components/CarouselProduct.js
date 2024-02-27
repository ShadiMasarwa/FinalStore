import React from "react";
import { NavLink } from "react-router-dom";

const CarouselProduct = ({ product }) => {
  return (
    <div className="">
      <NavLink
        to={{
          pathname: `/product/${product.id}`,
        }}
        className={"text-decoration-none"}
      >
        <div className="card w-20 m-2">
          <img
            src={product.images[0]}
            className="card-img-top p-2 "
            alt={product.title}
            style={{ height: 200, borderRadius: 20 }}
          />
          <div className="card-body text-center ">
            <h5 className="card-title ">
              {product.title.charAt(0).toUpperCase() + product.title.slice(1)}
            </h5>
          </div>
        </div>
      </NavLink>
    </div>
  );
};

export default CarouselProduct;
