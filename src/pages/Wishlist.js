import React from "react";
import Meta from "../components/Meta";
import BreadCrumb from "../components/BreadCrumb";
const Wishlist = () => {
  return (
    <>
      <Meta title={"Wishlist"} />
      <BreadCrumb title="Wishlist" />
      <div className="wishlist-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-3">
              <div className="wishlist-product-card">
                <div className="wishlist-card-image position-relative">
                  <img
                    src="../images/cross.svg"
                    alt="cross"
                    className="cross img-fluid position-absolute"
                  />
                  <img
                    className="img-fluid"
                    src="../images/watch.jpg"
                    alt="watch"
                  />
                </div>
              </div>
              <div className="product-card-details px-3">
                <h6 className="main-detail mt-2">
                  Milanese Loop Watch Band For 42mm/44mm Apple Watch
                </h6>
                <h6 className="price py-2 mb-0">$10.00</h6>
              </div>
            </div>
            <div className="col-3">
              <div className="wishlist-product-card">
                <div className="wishlist-card-image position-relative">
                  <img
                    src="../images/cross.svg"
                    alt="cross"
                    className="cross img-fluid position-absolute"
                  />
                  <img
                    className="img-fluid"
                    src="../images/watch.jpg"
                    alt="watch"
                  />
                </div>
              </div>
              <div className="product-card-details px-3">
                <h6 className="main-detail mt-2">
                  Milanese Loop Watch Band For 42mm/44mm Apple Watch
                </h6>
                <h6 className="price py-2 mb-0">$10.00</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Wishlist;
