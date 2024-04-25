import React from "react";
import { useContext } from "react";
import GlobalContext from "../Hooks/GlobalContext";
import { NavLink } from "react-router-dom";

const Modal = () => {
  const { loggedIn } = useContext(GlobalContext);
  return (
    <div
      class="modal fade"
      id="MyModal"
      tabindex="-1"
      aria-labelledby="MyModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h1 className="modal-title fs-5" id="MyModalLabel">
              {!loggedIn ? "Not Logged" : "Proceed..."}
            </h1>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            {!loggedIn ? (
              <div>
                <h6>You have not logged in...</h6>
                <h6>Click the log in button to proceed</h6>
              </div>
            ) : (
              <h6>Proceed For Payment</h6>
            )}
          </div>
          <div className="modal-footer">
            {loggedIn ? (
              <button type="button" className="btn btn-success">
                Payment
              </button>
            ) : (
              <NavLink
                to={{
                  pathname: `/login`,
                }}
              >
                <button
                  type="button"
                  data-bs-dismiss="modal"
                  className="btn btn-warning"
                >
                  Log In
                </button>
              </NavLink>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
