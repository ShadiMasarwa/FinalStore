import React from "react";
import { NavLink } from "react-router-dom";
import "./product.css";

const Category = ({ cat, index }) => {
  return (
    <div className="">
      <NavLink
        to={{
          pathname: `/category/${index}`,
        }}
        className={"text-decoration-none"}
      >
        <div className="card w-20 m-2">
          <img
            src={cat.thumbnail}
            className="card-img-top p-2 productImageResize "
            alt={cat.name}
            style={{ height: 200, borderRadius: 20 }}
          />
          <div className="card-body text-center ">
            <h5 className="card-title ">
              {cat.name.charAt(0).toUpperCase() + cat.name.slice(1)}
            </h5>
          </div>
        </div>
      </NavLink>
    </div>
  );
};

export default Category;
