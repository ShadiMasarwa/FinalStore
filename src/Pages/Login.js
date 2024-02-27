import React from "react";
import "./Login.css";
import logo from "../images/logo.png";
import GlobalContext from "../Hooks/GlobalContext";
import { useContext } from "react";
import Sidebar from "../Components/Sidebar";
import Layout from "../Components/Layout";

const Login = () => {
  const { showSidebar } = useContext(GlobalContext);

  return (
    <div>
      <Layout>
        <div className="position-relative">
          <section
            className="h-100 gradient-form"
            style={{ backgroundColor: `#eee` }}
          >
            <div className="container py-1 h-100">
              <div className="row d-flex justify-content-center align-items-center h-100">
                <div className="col-xl-10">
                  <div className="card rounded-3 text-black">
                    <div className="row g-0">
                      <div className="col-lg-6">
                        <div className="card-body p-md-5 mx-md-4">
                          <div className="text-center">
                            <img src={logo} style={{ width: 100 }} alt="Logo" />
                            <h4 className="mt-1 mb-5 pb-1">Allways In Sale</h4>
                          </div>

                          <form>
                            <p>Please login to your account</p>

                            <div className="form-outline mb-4">
                              <input
                                type="email"
                                id="form2Example11"
                                className="form-control"
                                placeholder="Phone number or email address"
                              />
                              <label
                                className="form-label"
                                htmlFor="form2Example11"
                              >
                                Username
                              </label>
                            </div>

                            <div className="form-outline mb-4">
                              <input
                                type="password"
                                id="form2Example22"
                                className="form-control"
                              />
                              <label
                                className="form-label"
                                htmlFor="form2Example22"
                              >
                                Password
                              </label>
                            </div>

                            <div className="text-center pt-1 mb-5 pb-1">
                              <button
                                className="btn btn-primary btn-block fa-lg gradient-custom-2 mb-3"
                                type="button"
                              >
                                Log in
                              </button>
                              <p>
                                <a className="text-muted" href="#!">
                                  Forgot password?
                                </a>
                              </p>
                            </div>

                            <div className="d-flex align-items-center justify-content-center pb-4">
                              <p className="mb-0 me-2">
                                Don't have an account?
                              </p>
                              <button
                                type="button"
                                className="btn btn-outline-danger"
                              >
                                Create new
                              </button>
                            </div>
                          </form>
                        </div>
                      </div>
                      <div className="col-lg-6 d-flex align-items-center gradient-custom-2">
                        <div className="text-white px-3 py-4 p-md-5 mx-md-4">
                          <h4 className="mb-4">
                            We are more than just a website
                          </h4>
                          <p className="small mb-0">
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad minim veniam, quis
                            nostrud exercitation ullamco laboris nisi ut aliquip
                            ex ea commodo consequat.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {showSidebar ? <Sidebar /> : ""}
        </div>
      </Layout>
    </div>
  );
};

export default Login;
