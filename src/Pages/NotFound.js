import React from "react";
import Mlogo from "../images/Logo.mp4";
import Layout from "../Components/Layout";

const NotFound = () => {
  return (
    <>
      <Layout>
        <div className="min-vh-80 min-vw-100 d-flex flex-column  align-items-center">
          <video autoPlay muted loop src={Mlogo} width={400} height={600} />
          <h6>Page Not Found</h6>
        </div>
      </Layout>
    </>
  );
};

export default NotFound;
