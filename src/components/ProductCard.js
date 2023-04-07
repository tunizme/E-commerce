import React from "react";
import ReactStars from "react-stars";
import { Link, useLocation } from "react-router-dom";
const ProductCard = ({
  srcFirst,
  srcSecond,
  productTitle,
  brand,
  price,
  description,
  grid,
}) => {
  let location = useLocation();
  return (
    <div
      className={`${location.pathname === "/store" ? `grd-${grid}` : "col-2"}`}
    >
      <Link className="featured-product-card product-card position-relative">
        <div className="wishlist-icon position-absolute">
          <Link>
            <img src="../images/wish.svg" alt="heart" />
          </Link>
        </div>
        <div className="card-image">
          <img className="img-fluid" src={srcFirst} alt="product-img" />
          <img className="img-fluid" src={srcSecond} alt="product-img" />
        </div>
        <div className="product-details ">
          <h6 className="brand">{brand}</h6>
          <h5 className="product-title">{productTitle}</h5>
          <ReactStars
            count={5}
            value={3}
            edit={false}
            size={24}
            color2={"#ffd700"}
          />
          {grid === 12 && <p className="description d-block">{description}</p>}
          {price && <p className="price">${price}</p>}
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
      </Link>
    </div>
  );
};

export default ProductCard;
