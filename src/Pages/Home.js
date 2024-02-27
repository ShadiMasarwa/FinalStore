import Carousel from "react-grid-carousel";
import GlobalContext from "../Hooks/GlobalContext";
import { useContext } from "react";
import Category from "../Components/Category";
import Sidebar from "../Components/Sidebar";
import CarouselProduct from "../Components/CarouselProduct";
import Layout from "../Components/Layout";

const Home = () => {
  const { showSidebar, randomProducts, categories } = useContext(GlobalContext);

  return (
    <div>
      <Layout>
        <div className="w-100 position-relative">
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
          </div>
          {showSidebar ? <Sidebar /> : ""}
        </div>
      </Layout>
    </div>
  );
};

export default Home;
