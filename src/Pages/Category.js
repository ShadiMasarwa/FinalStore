import React from "react";
import Product from "../Components/Product";
import Sidebar from "../Components/Sidebar";

import { useParams } from "react-router-dom";
import { useContext } from "react";
import GlobalContext from "../Hooks/GlobalContext";
import Layout from "../Components/Layout";

const Category = () => {
  const { id } = useParams();
  const { categories, storeProducts, showSidebar } = useContext(GlobalContext);

  return (
    <div>
      <Layout>
        <div className="d-flex flex-row position-relative">
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
          {showSidebar ? <Sidebar /> : ""}
        </div>
      </Layout>
    </div>
  );
};

export default Category;
