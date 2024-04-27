import React from "react";
import Product from "../Components/Product";
import { useParams } from "react-router-dom";
import { useContext } from "react";
import GlobalContext from "../Hooks/GlobalContext";
import Layout from "../Components/Layout";

const Category = () => {
  const { id } = useParams();
  const { categories, storeProducts } = useContext(GlobalContext);

  return (
    <div>
      <Layout>
        <div className="d-flex flex-row ">
          <div className="container">
            <div className="row">
              {storeProducts.map((el) =>
                el.category === categories[id].name ? (
                  <Product {...el} sender="main" key={el.id} />
                ) : (
                  ""
                )
              )}
            </div>
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default Category;
