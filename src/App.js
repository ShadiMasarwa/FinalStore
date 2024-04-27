import React from "react";
import GlobalContext from "../src/Hooks/GlobalContext";
import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

//Pages
import Home from "../src/Pages/Home";
import AllProducts from "../src/Pages/AllProducts";
import Login from "../src/Pages/Login";
import Categories from "../src/Pages/Categories";
import Category from "../src/Pages/Category";
import Product from "../src/Pages/Product";
import About from "../src/Pages/About";
import NotFound from "../src/Pages/NotFound";
import Rules from "../src/Pages/Conditions";
import Cart from "../src/Pages/Cart";
import Favorites from "../src/Pages/Favorites";

function App() {
  const [storeProducts, setStoreProducts] = useState([]);
  const [showSidebar, setShowSidebar] = useState(false);
  const [whatToShowInSidebar, setWhatToShowInSidebar] = useState("");
  const [categories, setCategories] = useState([]);
  const [randomProducts, setRandomProducts] = useState([]);

  // Local Storage for Cart and Favorite Items & Login
  const [itemsInCart, setItemsInCart] = useState(
    JSON.parse(localStorage.getItem("cartItems"))
      ? JSON.parse(localStorage.getItem("cartItems"))
      : []
  );
  const [itemsInFav, setItemsInFav] = useState(
    JSON.parse(localStorage.getItem("favItems"))
      ? JSON.parse(localStorage.getItem("favItems"))
      : []
  );

  const [loggedIn, setLoggedIn] = useState(
    JSON.parse(localStorage.getItem("loggedin"))
      ? JSON.parse(localStorage.getItem("loggedin"))
      : false
  );

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(itemsInCart));
  }, [itemsInCart]);

  useEffect(() => {
    localStorage.setItem("favItems", JSON.stringify(itemsInFav));
  }, [itemsInFav]);

  useEffect(() => {
    localStorage.setItem("loggedin", JSON.stringify(loggedIn));
  }, [loggedIn]);
  //------------------------------------------------------------------

  //  Functions for adding and deleting items to and from cart and favorites
  const addToCart = (id) => {
    !itemsInCart.some((el) => el.id === id) &&
      setItemsInCart([...itemsInCart, { id, Qty: 1 }]);
  };
  const addToFav = (id) => {
    !itemsInFav.includes(id) && setItemsInFav([...itemsInFav, id]);
  };
  const RemoveFromCart = (id) =>
    setItemsInCart(itemsInCart.filter((el) => el.id !== id));
  const RemoveFromFav = (id) =>
    setItemsInFav(itemsInFav.filter((el) => el !== id));
  //-------------------------------------------------------------------

  //Read Products data to storeProducts array
  useEffect(() => {
    fetch("https://dummyjson.com/products?limit=1000")
      .then((res) => res.json())
      .then((data) => setStoreProducts(data.products));
  }, []);

  //Fill Carousel arrays
  useEffect(() => {
    if (storeProducts.length > 0) {
      // set random 20 products for carousel
      const tempRandomProducts = GetRandomProducts();
      setRandomProducts(tempRandomProducts);

      //set categories for carousel and category pages
      const categoriesArray = storeProducts.map((el) => ({
        name: el.category,
        thumbnail: el.thumbnail,
      }));

      const uniqueArray = categoriesArray.filter((obj, index) => {
        return index === categoriesArray.findIndex((o) => obj.name === o.name);
      });

      setCategories([...uniqueArray]);
    }
  }, [storeProducts]);

  const GetRandomProducts = () => {
    const newRandomProducts = [];
    for (let i = 0; i < 20; i++) {
      newRandomProducts.push(
        storeProducts[
          parseInt(Math.random(storeProducts.length) * storeProducts.length)
        ]
      );
    }
    return newRandomProducts;
  };

  return (
    <div>
      <GlobalContext.Provider
        value={{
          storeProducts,
          setStoreProducts,
          addToCart,
          addToFav,
          showSidebar,
          setShowSidebar,
          whatToShowInSidebar,
          setWhatToShowInSidebar,
          itemsInCart,
          setItemsInCart,
          itemsInFav,
          RemoveFromCart,
          RemoveFromFav,
          categories,
          randomProducts,
          loggedIn,
          setLoggedIn,
        }}
      >
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="allproducts" element={<AllProducts />} />
            <Route path="/product/:id" element={<Product />} />
            <Route path="/login" element={<Login />} />
            <Route path="/rules" element={<Rules />} />
            <Route path="/category/:id" element={<Category />} />
            <Route path="/categories" element={<Categories />} />
            <Route path="/about" element={<About />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/favorites" element={<Favorites />} />

            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </GlobalContext.Provider>
    </div>
  );
}

export default App;
