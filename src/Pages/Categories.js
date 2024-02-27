import React from "react";
import { useContext } from "react";
import GlobalContext from "../Hooks/GlobalContext";
import Category from "../Components/Category";
import Sidebar from "../Components/Sidebar";
import Layout from "../Components/Layout";

const Categories = () => {
  const { categories, showSidebar } = useContext(GlobalContext);
  return (
    <div>
      <Layout>
        <div className="position-relative">
          <div className="container">
            <div className="row ">
              {categories.map((cat, index) => (
                <div className="col-lg-3 col-md-6 col-sm-12">
                  <Category cat={cat} index={index} key={index} />
                </div>
              ))}
            </div>
          </div>
          {showSidebar ? <Sidebar /> : ""}
        </div>
      </Layout>
    </div>
  );
};

export default Categories;
