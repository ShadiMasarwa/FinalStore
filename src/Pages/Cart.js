import { useContext } from "react";
import GlobalContext from "../Hooks/GlobalContext";
import { NavLink } from "react-router-dom";
import Layout from "../Components/Layout";
import Quantity from "../Components/Quantity";
import Modal from "../Components/Modal";

const Cart = () => {
  const { itemsInCart, setItemsInCart, storeProducts, RemoveFromCart } =
    useContext(GlobalContext);

  const handleQuantityChange = (id, value) => {
    const temp = itemsInCart.map((el) =>
      el.id === id ? { ...el, Qty: value } : el
    );
    setItemsInCart([...temp]);
  };

  let total = 0;
  let orgTotal = 0;
  return (
    <div>
      <Modal />
      <Layout>
        <div style={{ minHeight: "72vh" }}>
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
                      <th style={{ textAlign: "center" }}>QTY</th>
                      <th>Price</th>
                      <th>Remove</th>
                    </tr>
                  </thead>
                  <tbody>
                    {itemsInCart.map((Item) => {
                      const product = storeProducts.find(
                        (el) => el.id === Item.id
                      );

                      total +=
                        (product.price -
                          (product.discountPercentage * product.price) / 100) *
                        Item.Qty;
                      orgTotal += product.price * Item.Qty;
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
                          <td className="align-middle text-center">
                            <Quantity
                              onQuantityChange={handleQuantityChange}
                              id={product.id}
                              Qty={Item.Qty}
                            />
                          </td>
                          <td
                            className="align-middle"
                            style={{ width: "150px" }}
                          >
                            <b>
                              {(
                                (parseFloat(product.price) -
                                  (parseFloat(product.discountPercentage) *
                                    parseFloat(product.price)) /
                                    100) *
                                Item.Qty
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
                    <tr className="align-middle text-end table-info">
                      <td className="" colSpan={6}>
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
                  <button
                    type="button"
                    className="btn btn-primary"
                    data-bs-toggle="modal"
                    data-bs-target="#MyModal"
                  >
                    Procced To Payment
                  </button>
                ) : null}
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default Cart;
