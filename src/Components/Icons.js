import React from "react";

const Icons = ({ icon }) => {
  switch (icon) {
    case "cart":
      return <i className="bi bi-cart3" />;
    case "fav":
      return <i style={{ color: "red" }} className="bi bi-bookmark-heart" />;
    case "x":
      return <i style={{ color: "red" }} className="bi bi-x-circle" />;
    default:
      return null;
  }
};

export default Icons;
