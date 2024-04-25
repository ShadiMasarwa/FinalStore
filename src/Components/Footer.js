import React from "react";

const Footer = () => {
  return (
    <div
      className="container-fluid bg-dark text-white d-flex justify-content-center align-items-center mt-5 "
      style={{ height: 100 }}
    >
      All Rights Reserved -{" "}
      <span style={{ fontWeight: "bold", color: "green" }}>iSale &copy;</span> -
      {" ("}
      {Date().split` `[3]}
      {")"}
    </div>
  );
};

export default Footer;
