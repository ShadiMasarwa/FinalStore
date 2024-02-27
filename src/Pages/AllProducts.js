import Layout from "../Components/Layout";
import Products from "../Components/Products";
import Sidebar from "../Components/Sidebar";
import GlobalContext from "../Hooks/GlobalContext";
import { useContext } from "react";

const Home = () => {
  const { showSidebar } = useContext(GlobalContext);

  return (
    <div>
      <Layout>
        <div className="d-flex flex-row position-relative">
          <Products />
          {showSidebar ? <Sidebar /> : ""}
        </div>
      </Layout>
    </div>
  );
};

export default Home;
