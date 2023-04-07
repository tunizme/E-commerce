import React from "react";
import Meta from "../components/Meta";
import BreadCrumb from "../components/BreadCrumb";
import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <>
      <Meta title={"Sign Up"} />
      <BreadCrumb title="Sign Up" />
      <div className="login-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="auth-card">
                <h3 className="login-title text-center mb-3">Create Account</h3>
                <form action="" className="d-flex flex-column">
                  <div>
                    <input
                      type="text"
                      name="firstname"
                      className="form-control"
                      placeholder="First name"
                      required
                    />
                  </div>
                  <div className="mt-3">
                    <input
                      type="text"
                      name="lastname"
                      className="form-control"
                      placeholder="Last name"
                      required
                    />
                  </div>
                  <div className="mt-3">
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
                    <div className="my-3 d-flex align-items-center gap-10 justify-content-center">
                      <button
                        type="submit"
                        className="px-4 login button border-0"
                      >
                        Create
                      </button>
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

export default SignUp;
