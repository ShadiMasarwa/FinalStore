import React from "react";
import Product from "../Components/Product";
import { useContext } from "react";
import GlobalContext from "../Hooks/GlobalContext";
import Layout from "../Components/Layout";

const Favorites = () => {
  const { itemsInFav, storeProducts } = useContext(GlobalContext);

  return (
    <div>
      <Layout>
        <div style={{ minHeight: "72vh" }}>
          <div className="container">
            <div className="row justify-content-center">
              {itemsInFav.length === 0 ? (
                <div className="text-center mt-5">
                  <h4>No Items In Favorites</h4>
                </div>
              ) : (
                itemsInFav.map((id, index) => {
                  const product = storeProducts.filter((el) => el.id === id)[0];
                  return (
                    <div className="col-lg-3 col-md-6 col-sm-12" key={index}>
                      <Product {...product} sender="fav" key={index} />
                    </div>
                  );
                })
              )}
            </div>
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default Favorites;
