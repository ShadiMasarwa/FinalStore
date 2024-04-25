import Carousel from "react-grid-carousel";
import GlobalContext from "../Hooks/GlobalContext";
import { useContext } from "react";
import Category from "../Components/Category";
import Sidebar from "../Components/Sidebar";
import CarouselProduct from "../Components/CarouselProduct";
import Layout from "../Components/Layout";
import storeImage from "../images/store.jpg";
import Product from "../Components/Product";

const Home = () => {
  const { showSidebar, randomProducts, categories, storeProducts } =
    useContext(GlobalContext);

  return (
    <div>
      <Layout>
        <div className="w-100 position-relative">
          <div className="position-relative">
            <img
              src={storeImage}
              alt="store image"
              style={{
                height: "300px",
                width: "100vw",
                objectFit: "cover",
              }}
            />
            <h1
              style={{
                position: "absolute",
                top: "40%",
                left: "35%",
                color: "white",
                backgroundColor: "rgba(13,113,172,0.7)",
                borderRadius: "10px",
                padding: "10px",
              }}
            >
              Shop online with confident...
            </h1>
          </div>
          <div className="container ">
            <h3 className="pt-5">Our Categories</h3>
            <Carousel
              cols={5}
              rows={1}
              gap={2}
              showDots
              loop
              autoplay={3000}
              responsiveLayout={[
                { breakpoint: 1200, cols: 4 },
                { breakpoint: 992, cols: 3 },
                { breakpoint: 768, cols: 2 },
                { breakpoint: 576, cols: 1 },
              ]}
            >
              {categories.map((cat, index) => (
                <Carousel.Item key={index}>
                  <Category cat={cat} index={index} key={index} />
                </Carousel.Item>
              ))}
            </Carousel>
            <h3 className="pt-5">Random Products</h3>
            <Carousel
              cols={5}
              rows={1}
              gap={2}
              showDots
              loop
              autoplay={3000}
              responsiveLayout={[
                { breakpoint: 1200, cols: 4 },
                { breakpoint: 992, cols: 3 },
                { breakpoint: 768, cols: 2 },
                { breakpoint: 576, cols: 1 },
              ]}
            >
              {randomProducts.map((item) => (
                <Carousel.Item key={item.id}>
                  <CarouselProduct product={item} key={item.id} />
                </Carousel.Item>
              ))}
            </Carousel>
            <h3 className="pt-5">Featured Products</h3>
            <div className="row">
              {storeProducts.map((el) =>
                el.discountPercentage > 15 ? (
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

export default Home;
