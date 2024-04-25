import React, { useEffect, useState } from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import { useParams } from "react-router-dom";
import { useContext } from "react";
import GlobalContext from "../Hooks/GlobalContext";
import Sidebar from "../Components/Sidebar";

const Product = () => {
  const { id } = useParams();

  const { storeProducts, showSidebar, addToCart, addToFav } =
    useContext(GlobalContext);

  const currProduct = storeProducts.filter(
    (el) => el.id === parseInt(id, 10)
  )[0];

  const [currImage, setCurrImage] = useState("");
  const [imageArray, setImageArray] = useState([]);

  useEffect(() => {
    const tempArray = currProduct.images.map((el, i) => el);
    setImageArray([currProduct.thumbnail, ...tempArray]);
  }, [currProduct]);

  useEffect(() => {
    setCurrImage(imageArray[0]);
  }, [imageArray]);

  return (
    <>
      <Header />
      <div className="position-relative">
        <div
          className="container d-flex justify-content-center pt-5"
          style={{ minHeight: "70vh" }}
        >
          <div className="row container-fluid">
            <div className="d-flex flex-column align-items-center col-lg-6 col-md-12 mb-md-5">
              <img
                src={currImage}
                alt={currProduct.title}
                style={{
                  width: "510px",
                  height: "300px",
                  border: "3px gray solid",
                  borderRadius: "10px",
                }}
              />
              <div className="d-flex justify-content-center mt-3">
                {imageArray.map((el, i) =>
                  i < 4 ? (
                    <button
                      style={{ border: "none", background: "none" }}
                      onClick={() => {
                        setCurrImage(el);
                      }}
                    >
                      <img
                        src={el}
                        alt={"Image" + { i }}
                        style={{
                          width: "100px",
                          height: "100px",
                          marginRight: "20px",
                          border: "3px gray solid",
                          borderRadius: "10px",
                        }}
                      />
                    </button>
                  ) : null
                )}
              </div>
            </div>
            <div className="col-lg-6 col-md-12">
              <h3>{currProduct.title}</h3>
              <p>Category: {currProduct.category}</p>
              <p>Brand: {currProduct.brand}</p>
              <h5>{currProduct.description}</h5>
              <p className="mt-5">In Stock: {currProduct.stock}</p>
              <p>Rating: {currProduct.rating}</p>
              <h6 className="mt-5">
                Price:{" "}
                <span style={{ textDecoration: "line-through", color: "red" }}>
                  {" "}
                  {currProduct.price.toFixed(2)} ILS
                </span>
              </h6>
              <h4 className="">
                Sale:{" "}
                <span style={{ color: "green" }}>
                  {(
                    currProduct.price -
                    (currProduct.discountPercentage * currProduct.price) / 100
                  ).toFixed(2)}{" "}
                  ILS
                </span>
              </h4>
              <button
                onClick={() => addToCart(currProduct.id)}
                className="btn btn-success mt-5"
                style={{ width: "35%" }}
              >
                Add To Cart 🛒
              </button>{" "}
              <button
                onClick={() => addToFav(currProduct.id)}
                className="btn btn-primary w-35 mt-5"
                style={{ width: "35%" }}
              >
                Add To Favorites ❤️
              </button>
            </div>
          </div>
          {showSidebar ? <Sidebar /> : ""}
        </div>
        <div className="container">
          <div className="accordion" id="productAccordion">
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseOne"
                  aria-expanded="false"
                  aria-controls="collapseOne"
                >
                  <strong>Delivery Fees</strong>
                </button>
              </h2>
              <div
                id="collapseOne"
                className="accordion-collapse collapse "
                data-bs-parent="#productAccordion"
              >
                <div className="accordion-body">
                  <strong>Pick up and delivery options: </strong>
                  <br />
                  <strong>Collection at store:</strong> (1-8 business days) - 0
                  ILS
                  <br />
                  <strong>Delivery to the customer's home:</strong> (10 business
                  days) - 43 ILS <br />
                  <strong>Fast delivery: </strong> (0-1 business days) - 58 ILS{" "}
                  <br />
                  <strong>
                    Delivery to a variety of collection points:
                  </strong>{" "}
                  (2-10 business days) - 25 ILS
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseTwo"
                  aria-expanded="false"
                  aria-controls="collapseTwo"
                >
                  <strong>Specification</strong>
                </button>
              </h2>
              <div
                id="collapseTwo"
                className="accordion-collapse collapse"
                data-bs-parent="#productAccordion"
              >
                <div className="accordion-body">
                  <h5>{currProduct.title}</h5>
                  <h6>{currProduct.description}</h6>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Eveniet atque quia, ex qui incidunt quidem ullam porro
                  voluptates? Veritatis aut, voluptate accusamus quod dolorem
                  corporis facere voluptas fuga quam voluptatibus mollitia optio
                  esse libero reiciendis quis culpa exercitationem cupiditate?
                  Eaque cumque quia magni, asperiores ab, nobis sint sapiente,
                  labore eveniet non facere. Reprehenderit, quos fugit?
                  Temporibus dolore vero vel. Deserunt dolores error porro
                  ratione quasi, placeat necessitatibus, eius cum excepturi qui
                  distinctio impedit nesciunt cumque odit vero quaerat nostrum
                  fugiat. Nisi voluptatem repellendus, quaerat a reprehenderit,
                  voluptates, aut ipsum sint magnam fugit nobis pariatur.
                  Asperiores temporibus aut ducimus dolore amet.
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseThree"
                  aria-expanded="false"
                  aria-controls="collapseThree"
                >
                  <strong>Notes For Product</strong>
                </button>
              </h2>
              <div
                id="collapseThree"
                className="accordion-collapse collapse"
                data-bs-parent="#productAccordion"
              >
                <div className="accordion-body">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Blanditiis aliquam repudiandae vel neque eaque, accusantium
                  ducimus culpa hic itaque natus ex eos est harum molestiae sint
                  unde quo dolore dignissimos aperiam maiores. Dolore quas, illo
                  enim autem qui illum amet quis similique harum quam nam
                  consectetur quidem error nulla voluptatem laboriosam iusto
                  itaque aut porro odit vero sapiente deleniti consequuntur. Eum
                  quisquam laborum nostrum! Architecto quisquam distinctio,
                  excepturi quo sequi doloribus error minima maxime, est autem
                  nobis iusto quaerat itaque. Sed a numquam molestiae vero et
                  facere quasi nesciunt quos blanditiis, inventore architecto
                  eum saepe recusandae excepturi culpa ea? Optio?
                </div>
              </div>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
};

export default Product;
