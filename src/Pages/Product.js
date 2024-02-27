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

        <Footer />
      </div>
    </>
  );
};

export default Product;
