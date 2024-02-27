import React, { useState } from "react";
import { useContext } from "react";
import GlobalContext from "../Hooks/GlobalContext";
import Product from "./Product";

const Products = () => {
  const { storeProducts } = useContext(GlobalContext);
  const [showItems, setShowItems] = useState(20);

  return (
    <div className="container">
      <div className="row">
        {storeProducts.map((el, i) =>
          i + 1 <= showItems ? (
            <Product {...el} sender="main" key={el.id} />
          ) : (
            ""
          )
        )}
      </div>
      <div className="d-flex justify-content-center">
        {showItems < storeProducts.length ? (
          <button
            onClick={() => setShowItems(showItems + 20)}
            className="btn btn-success"
          >
            More...
          </button>
        ) : (
          "No more products"
        )}
      </div>
    </div>
  );
};

export default Products;
