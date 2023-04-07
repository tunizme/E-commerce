import React from "react";
import ReactStars from "react-stars";
import { Link } from "react-router-dom";
const SpecialProduct = ({ src, productTitle, brand, price, discount }) => {
  return (
    <>
      <div className="col-4 px-2 py-2">
        <div className="special-product-card product-card d-flex align-items-center ">
          <div className="col-6 position-relative">
            <div className="special-product">
              <div className="wishlist-icon position-absolute">
                <Link>
                  <img src="../images/wish.svg" alt="heart" />
                </Link>
              </div>
              <div className="card-image">
                <img className="img-fluid" src={src} alt="product-img" />
              </div>
              <div className="action-bar position-absolute">
                <div className="d-flex flex-column">
                  <Link>
                    <img src="../images/prodcompare.svg" alt="compare" />
                  </Link>
                  <Link>
                    <img src="../images/view.svg" alt="view" />
                  </Link>
                  <Link>
                    <img src="../images/add-cart.svg" alt="addcart" />
                  </Link>
                </div>
              </div>
            </div>
            <div className="d-flex mt-4 gap-10 justify-content-center">
              <div className="col-5 image-preview">
                <img
                  className="img-fluid"
                  src="../images/tab1.jpg"
                  alt="preview"
                />
              </div>
              <div className="col-5 image-preview">
                <img
                  className="img-fluid"
                  src="../images/tab2.jpg"
                  alt="preview"
                />
              </div>
            </div>
          </div>
          <div className="col-6 product-details-wrapper">
            <div className="product-details">
              <h6 className="brand">{brand}</h6>
              <h5 className="product-title">{productTitle}</h5>
              <ReactStars
                count={5}
                value={3}
                edit={false}
                size={24}
                color2={"#ffd700"}
              />
              <p className="price">
                {discount && (
                  <span className="text-danger discount">${discount}</span>
                )}
                {price && (
                  <span className="text-danger real-price">${price}</span>
                )}
              </p>
              <div className="discount-time d-flex align-items-center">
                <p className="m-0">
                  <b>700</b> Days
                </p>
                <div className="d-flex align-items-center">
                  <span className="mx-1 badge rounded-circle p-2 bg-danger">
                    <div className="discount-count">0</div>
                  </span>
                  :
                  <span className="mx-1 badge rounded-circle p-2 bg-danger">
                    <div className="discount-count">0</div>
                  </span>
                  :
                  <span className="mx-1 badge rounded-circle p-2 bg-danger">
                    <div className="discount-count">0</div>
                  </span>
                </div>
              </div>
              <div className="prod-count mt-3">
                <p>Product: 5</p>
                <div className="progress " style={{ height: "5px" }}>
                  <div
                    className="progress-bar"
                    role="progressbar"
                    style={{ width: "25%" }}
                    aria-valuenow="25"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
              </div>
              <Link className="button mt-4">Add To Cart</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SpecialProduct;
