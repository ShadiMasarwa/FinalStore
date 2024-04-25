import { NavLink } from "react-router-dom";
import "../Components/Navbar.css";
import { useContext } from "react";
import GlobalContext from "../Hooks/GlobalContext";

const Navbar = () => {
  const { loggedIn } = useContext(GlobalContext);

  return (
    <div className="w-75">
      <nav className="navbar navbar-expand-lg navbar-light ">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="true"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
              <li className="nav-item ">
                <NavLink to="/" className="link">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/allproducts" className="link">
                  All Products
                </NavLink>
              </li>
              <li className="nav-item">
                {
                  <NavLink to="/categories" className="link">
                    Categories
                  </NavLink>
                }
              </li>
              <li className="nav-item">
                {
                  <NavLink to="/about" className="link">
                    About Us
                  </NavLink>
                }
              </li>
              <li className="nav-item">
                {
                  <NavLink to="/rules" className="link">
                    Rules & Conditions
                  </NavLink>
                }
              </li>

              <li className="nav-item me-3">|</li>
              <li className="nav-item">
                {
                  <NavLink to="/cart" className="link">
                    Check Out
                  </NavLink>
                }
              </li>
              <li className="nav-item me-3">|</li>
              <li className="nav-item">
                {
                  <NavLink to="/login" className="link">
                    {loggedIn ? "Logout" : "Login"}
                  </NavLink>
                }
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
