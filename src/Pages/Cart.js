import React from "react";
import { useContext } from "react";
import GlobalContext from "../Hooks/GlobalContext";
import Sidebar from "../Components/Sidebar";
import { NavLink } from "react-router-dom";
import Layout from "../Components/Layout";

const Cart = () => {
  const { itemsInCart, storeProducts, showSidebar, RemoveFromCart } =
    useContext(GlobalContext);
  let total = 0;
  let orgTotal = 0;
  return (
    <div>
      <Layout>
        <div className="position-relative" style={{ minHeight: "72vh" }}>
          <div className="container">
            <div className="row justify-content-center">
              {itemsInCart.length === 0 ? (
                <div className="text-center mt-5">
                  <h4>No Items In Cart</h4>
                </div>
              ) : (
                <table className="table table-striped table-hover">
                  <thead>
                    <tr>
                      <th>Image</th>
                      <th>Name</th>
                      <th>Description</th>
                      <th>Price</th>
                      <th>Remove</th>
                    </tr>
                  </thead>
                  <tbody>
                    {itemsInCart.map((id, index) => {
                      const product = storeProducts.filter(
                        (el) => el.id === id
                      )[0];

                      total +=
                        product.price -
                        (product.discountPercentage * product.price) / 100;
                      orgTotal += product.price;
                      return (
                        <tr>
                          <td className="">
                            <NavLink
                              to={{
                                pathname: `/product/${product.id}`,
                              }}
                              className={"text-decoration-none"}
                            >
                              <img
                                src={product.thumbnail}
                                alt={product.title}
                                style={{ width: "100px", height: "100px" }}
                              />
                            </NavLink>
                          </td>
                          <td className="align-middle">
                            <b>{product.title}</b>
                          </td>
                          <td className="align-middle">
                            {product.description}
                          </td>
                          <td className="align-middle">
                            <b>
                              {(
                                parseFloat(product.price) -
                                (parseFloat(product.discountPercentage) *
                                  parseFloat(product.price)) /
                                  100
                              ).toFixed(2)}{" "}
                              ILS
                            </b>
                          </td>
                          <td className="align-middle">
                            <button
                              className="btn btn-outline-danger"
                              onClick={() => RemoveFromCart(product.id)}
                            >
                              {" "}
                              ❌
                            </button>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                  <tfoot>
                    <tr>
                      <td
                        className="align-middle text-end table-info"
                        colSpan={5}
                      >
                        <h4 className="">Total: {total.toFixed(2)} ILS</h4>
                        <h6>
                          {"("}You Save{" "}
                          <span className="text-danger">
                            {(orgTotal - total).toFixed(2)}
                          </span>{" "}
                          ILS On This Purchase{")"}
                        </h6>
                      </td>
                    </tr>
                  </tfoot>
                </table>
              )}
              <div className="d-flex justify-content-end">
                {itemsInCart.length > 0 ? (
                  <button className="btn btn-warning">
                    Proceed For Payment
                  </button>
                ) : null}
              </div>
            </div>
          </div>
          {showSidebar ? <Sidebar /> : ""}
        </div>
      </Layout>
    </div>
  );
};

export default Cart;
