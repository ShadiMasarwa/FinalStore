import React from "react";
import GlobalContext from "../Hooks/GlobalContext";
import { useContext } from "react";
import Layout from "../Components/Layout";

const Login = () => {
  const { loggedIn, setLoggedIn } = useContext(GlobalContext);

  return (
    <div>
      <Layout>
        <div
          className={`container ${!loggedIn ? "w-25 mt-5" : ""}`}
          style={{ minHeight: "73vh" }}
        >
          {!loggedIn ? (
            <form
              style={{
                backgroundColor: "lightgray",
                padding: "30px 10px",
                borderRadius: "10px",
              }}
            >
              <h3>Log In Form</h3>
              <div className="my-3">
                <label htmlFor="email" className="form-label">
                  <strong>Email address</strong>
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  aria-describedby="emailHelp"
                />
                <div id="emailHelp" className="form-text">
                  We'll never share your email with anyone else.
                </div>
              </div>
              <div className="mb-3">
                <label htmlFor="password" className="form-label">
                  <strong>Password</strong>
                </label>
                <input type="password" className="form-control" id="password" />
              </div>
              <div className="text-end">
                <button
                  type="submit"
                  className="btn btn-primary mt-3"
                  onClick={() => setLoggedIn(true)}
                >
                  Log In
                </button>
              </div>
              <div>
                <div>Not Registered Yet?{"  "}</div>
                <button className="btn btn-outline-primary mb-5">
                  Register
                </button>
              </div>
              <div className="text-danger">
                * For educational purposses any email and password will log you
                in
              </div>
            </form>
          ) : (
            <div className=" d-flex flex-column align-items-center pt-5">
              <h3>You Are Logged In</h3>
              <button
                className="btn btn-outline-primary mt-5"
                onClick={() => setLoggedIn(false)}
              >
                Log Out
              </button>
            </div>
          )}
        </div>
      </Layout>
    </div>
  );
};

export default Login;
