import React from "react";
import Meta from "../components/Meta";
import BreadCrumb from "../components/BreadCrumb";
import { Link } from "react-router-dom";
const ForgotPassword = () => {
  return (
    <>
      <Meta title={"Login"} />
      <BreadCrumb title="Login" />
      <div className="login-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="auth-card">
                <h3 className="reset-title text-center mb-0">
                  Reset Your Password
                </h3>
                <p className="description-reset-title my-3 text-center">
                  We will send you an email to reset your password
                </p>
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
                  <div>
                    <div className="mt-3 d-flex flex-column align-items-center justify-content-center">
                      <button
                        type="submit"
                        className="px-4 border-0 button signup"
                      >
                        Submit
                      </button>
                      <Link to="/login" className="cancel-title mb-0 mt-3">
                        Cancel
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

export default ForgotPassword;
