import React from "react";
import Meta from "../components/Meta";
import BreadCrumb from "../components/BreadCrumb";
import { Link } from "react-router-dom";
const Login = () => {
  return (
    <>
      <Meta title={"Login"} />
      <BreadCrumb title="Login" />
      <div className="login-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="auth-card">
                <h3 className="login-title text-center mb-3">Login</h3>
                <form action="" className="d-flex flex-column">
                  <div>
                    <input
                      type="email"
                      name="email"
                      className="form-control"
                      placeholder="Email"
                      required
                    />
                  </div>
                  <div className="mt-3 mb-1">
                    <input
                      type="password"
                      name="password"
                      className="form-control"
                      placeholder="Password"
                      required
                    />
                  </div>
                  <div>
                    <Link
                      className="mb-0 forgot-password"
                      to="/forgot-password"
                    >
                      Forgot your password?
                    </Link>
                    <div className="my-3 d-flex align-items-center gap-10 justify-content-center">
                      <button
                        type="submit"
                        className="px-4 login button border-0"
                      >
                        Login
                      </button>
                      <Link to="/signup" className="button signup">
                        Sign Up
                      </Link>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
