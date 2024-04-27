import Layout from "../Components/Layout";
import Products from "../Components/Products";

const Home = () => {
  return (
    <div>
      <Layout>
        <div className="d-flex flex-row ">
          <Products />
        </div>
      </Layout>
    </div>
  );
};

export default Home;
