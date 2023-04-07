import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
const CompareProduct = () => {
  return (
    <>
      <Meta title={"Compare Products"} />
      <BreadCrumb title="Compare Products" />
      <div className="compare-product-wrapper home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-3">
              <div className="compare-product-card">
                <div className="product-card-image position-relative">
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
                <div className="product-card-details">
                  <h6 className="main-detail mt-2">
                    Milanese Loop Watch Band For 42mm/44mm Apple Watch
                  </h6>
                  <h6 className="price py-2 mb-0">$10.00</h6>
                  <div className="py-2 product-infor d-flex align-items-center justify-content-between brand">
                    <h6 className="mb-0">Brand</h6>
                    <p className="mb-0">Apple</p>
                  </div>
                  <div className="py-2 product-infor d-flex align-items-center justify-content-between type">
                    <h6 className="mb-0">Type</h6>
                    <p className="mb-0">Watches</p>
                  </div>
                  <div className="py-2 product-infor d-flex align-items-center justify-content-between sku">
                    <h6 className="mb-0">SKU</h6>
                    <p className="mb-0">SKU007</p>
                  </div>
                  <div className="py-2 product-infor d-flex align-items-center justify-content-between availability">
                    <h6 className="mb-0">Availability</h6>
                    <p className="mb-0">In Stock</p>
                  </div>
                  <div className="py-2 product-infor d-flex align-items-center justify-content-between color">
                    <h6 className="mb-0">Color</h6>
                    <p className="mb-0">
                      <ul className="mb-0 colors ps-0">
                        <li></li>
                        <li></li>
                      </ul>
                    </p>
                  </div>
                  <div className="py-2 product-infor d-flex align-items-center justify-content-between size">
                    <h6 className="mb-0">Size</h6>
                    <p className="mb-0">M XL XXL </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-3">
              <div className="compare-product-card">
                <div className="product-card-image position-relative">
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
                <div className="product-card-details">
                  <h6 className="main-detail mt-2">
                    Milanese Loop Watch Band For 42mm/44mm Apple Watch
                  </h6>
                  <h6 className="price py-2 mb-0">$10.00</h6>
                  <div className="py-2 product-infor d-flex align-items-center justify-content-between brand">
                    <h6 className="mb-0">Brand</h6>
                    <p className="mb-0">Apple</p>
                  </div>
                  <div className="py-2 product-infor d-flex align-items-center justify-content-between type">
                    <h6 className="mb-0">Type</h6>
                    <p className="mb-0">Watches</p>
                  </div>
                  <div className="py-2 product-infor d-flex align-items-center justify-content-between sku">
                    <h6 className="mb-0">SKU</h6>
                    <p className="mb-0">SKU007</p>
                  </div>
                  <div className="py-2 product-infor d-flex align-items-center justify-content-between availability">
                    <h6 className="mb-0">Availability</h6>
                    <p className="mb-0">In Stock</p>
                  </div>
                  <div className="py-2 product-infor d-flex align-items-center justify-content-between color">
                    <h6 className="mb-0">Color</h6>
                    <p className="mb-0">
                      <ul className="mb-0 colors ps-0">
                        <li></li>
                        <li></li>
                      </ul>
                    </p>
                  </div>
                  <div className="py-2 product-infor d-flex align-items-center justify-content-between size">
                    <h6 className="mb-0">Size</h6>
                    <p className="mb-0">M XL XXL </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CompareProduct;
