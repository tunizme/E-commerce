import React, { useState } from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import { BsCurrencyDollar } from "react-icons/bs";
import ReactStars from "react-stars";
import ProductCard from "../components/ProductCard";
const OurStore = () => {
  const [grid, setGrid] = useState(4);
  return (
    <>
      <Meta title={"Our store"} />
      <BreadCrumb title="Our store" />
      <div className="store-wrapper home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-3">
              <div className="filter-card mb-3">
                <h3 className="filter-title">Shop by ...</h3>
                <div>
                  <ul className="fs-0">
                    <li>Watch</li>
                    <li>Camera</li>
                    <li>Tivi</li>
                    <li>Laptop</li>
                  </ul>
                </div>
              </div>
              <div className="filter-card mb-3">
                <h3 className="filter-title">Filter By</h3>
                <div>
                  <h5 className="sub-title">Availability</h5>
                  <div>
                    <div className="form-check">
                      <input className="form-check-input" type="checkbox" />
                      <label className="form-check-label">In stock</label>
                    </div>
                    <div className="form-check">
                      <input className="form-check-input" type="checkbox" />
                      <label className="form-check-label">Out of stock</label>
                    </div>
                  </div>
                  <h5 className="sub-title">Price</h5>
                  <div>
                    <div className="d-flex align-items-center gap-15">
                      <div className="mb-2 d-flex justify-content-between align-items-center">
                        <BsCurrencyDollar className="fs-3" />
                        <form className="form-floating">
                          <input
                            type="text"
                            className="form-control"
                            style={{ height: "40px" }}
                            id="floatingInputValue"
                            placeholder="from"
                          />
                          <label htmlfor="floatingInputValue">From</label>
                        </form>
                      </div>
                      <div className="mb-2 d-flex justify-content-between align-items-center">
                        <BsCurrencyDollar className="fs-3" />
                        <form className="form-floating">
                          <input
                            type="text"
                            className="form-control"
                            style={{ height: "40px" }}
                            id="floatingInputValue"
                            placeholder="to"
                          />
                          <label htmlfor="floatingInputValue">To</label>
                        </form>
                      </div>
                    </div>
                  </div>
                  <h5 className="sub-title">Colors</h5>
                  <div className="mb-4">
                    <ul className="colors ps-0">
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                    </ul>
                  </div>
                  <h5 className="sub-title">Size</h5>
                  <div className="mb-3">
                    <div className="form-check">
                      <input className="form-check-input" type="checkbox" />
                      <label className="form-check-label">S (1)</label>
                    </div>
                    <div className="form-check">
                      <input className="form-check-input" type="checkbox" />
                      <label className="form-check-label">M (1)</label>
                    </div>
                    <div className="form-check">
                      <input className="form-check-input" type="checkbox" />
                      <label className="form-check-label">L (1)</label>
                    </div>
                    <div className="form-check">
                      <input className="form-check-input" type="checkbox" />
                      <label className="form-check-label">XL (1)</label>
                    </div>
                    <div className="form-check">
                      <input className="form-check-input" type="checkbox" />
                      <label className="form-check-label">XXL (1)</label>
                    </div>
                  </div>
                </div>
              </div>
              <div className="filter-card mb-3">
                <h3 className="filter-title">Product Tag</h3>
                <div className="mb-3">
                  <div className="product-tags d-flex flex-wrap gap-10 py-1">
                    <span className="badge bg-light text-secondary rounded-3 px-3 py-2 ">
                      Headphone
                    </span>
                    <span className="badge bg-light text-secondary rounded-3 px-3 py-2 ">
                      Laptop
                    </span>
                    <span className="badge bg-light text-secondary rounded-3 px-3 py-2 ">
                      Tablet
                    </span>
                    <span className="badge bg-light text-secondary rounded-3 px-3 py-2 ">
                      Tivi
                    </span>
                    <span className="badge bg-light text-secondary rounded-3 px-3 py-2 ">
                      Speaker
                    </span>
                    <span className="badge bg-light text-secondary rounded-3 px-3 py-2 ">
                      Mobile
                    </span>
                    <span className="badge bg-light text-secondary rounded-3 px-3 py-2 ">
                      Wire
                    </span>
                  </div>
                </div>
              </div>
              <div className="filter-card mb-3">
                <h3 className="filter-title mb-2">Random Products</h3>
                <div className="random-wrapper d-flex align-items-center">
                  <div className="card-image">
                    <img
                      className="img-fluid"
                      src="../images/watch.jpg"
                      alt="product-img"
                    />
                  </div>
                  <div className="product-details-wrapper">
                    <div className="product-details">
                      <h5 className="product-title fs-6">
                        Kids headphones buld 10 pack multi colored for students
                      </h5>
                      <ReactStars
                        count={5}
                        value={3}
                        edit={false}
                        size={24}
                        color2={"#ffd700"}
                      />
                      <p className="price">$100.00</p>
                    </div>
                  </div>
                </div>
                <div className="random-wrapper d-flex align-items-center">
                  <div className="card-image">
                    <img
                      className="img-fluid"
                      src="../images/watch.jpg"
                      alt="product-img"
                    />
                  </div>
                  <div className="product-details-wrapper">
                    <div className="product-details">
                      <h5 className="product-title fs-6">
                        Kids headphones buld 10 pack multi colored for students
                      </h5>
                      <ReactStars
                        count={5}
                        value={3}
                        edit={false}
                        size={24}
                        color2={"#ffd700"}
                      />
                      <p className="price">$100.00</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-9">
              <div className="filter-sort-grid mb-4">
                <div className="main-bg d-flex justify-content-between align-items-center">
                  <div className="d-flex align-items-center gap-10">
                    <p style={{ width: "88px" }} className="mb-0">
                      Sort by:
                    </p>
                    <select className="form-control form-select" name="" id="">
                      <option value="manual">Featured</option>
                      <option value="best-selling" selected="selected">
                        Best selling
                      </option>
                      <option value="title-ascending">
                        Alphabetically, A-Z
                      </option>
                      <option value="title-descending">
                        Alphabetically, Z-A
                      </option>
                      <option value="price-ascending">
                        Price, low to high
                      </option>
                      <option value="price-descending">
                        Price, high to low
                      </option>
                      <option value="created-ascending">
                        Date, old to new
                      </option>
                      <option value="created-descending">
                        Date, new to old
                      </option>
                    </select>
                  </div>
                  <div className="d-flex align-items-center gap-15">
                    <p className="total-products mb-0">27 Products</p>
                    <div className="d-flex align-items-center gap-10 grid">
                      <img
                        onClick={() => setGrid(3)}
                        src="../images/gr4.svg"
                        className="img-fluid d-block grid-active"
                        alt="grid"
                      />
                      <img
                        onClick={() => setGrid(4)}
                        src="../images/gr3.svg"
                        className="img-fluid d-block"
                        alt="grid"
                      />
                      <img
                        onClick={() => setGrid(6)}
                        src="../images/gr2.svg"
                        className="img-fluid d-block"
                        alt="grid"
                      />
                      <img
                        onClick={() => setGrid(12)}
                        src="../images/gr.svg"
                        className="img-fluid d-block"
                        alt="grid"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="products-list pb-5">
                <div className="d-flex gap-10 flex-wrap">
                  <ProductCard
                    grid={grid}
                    brand="Havells"
                    srcFirst="../images/tab.jpg"
                    srcSecond="../images/tab1.jpg"
                    productTitle="Kids headphones buld 10 pack multi colored for students"
                    price="100.00"
                    description="at vero eos et accusamus et iusto odio dignissimos ducsimus qui blanditiis praesentium deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt..."
                    colValue="col-2"
                  />
                  <ProductCard
                    grid={grid}
                    brand="Havells"
                    srcFirst="../images/tab.jpg"
                    srcSecond="../images/tab1.jpg"
                    productTitle="Kids headphones buld 10 pack multi colored for students"
                    price="100.00"
                    description="at vero eos et accusamus et iusto odio dignissimos ducsimus qui blanditiis praesentium deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt..."
                    colValue="col-2"
                  />
                  <ProductCard
                    grid={grid}
                    brand="Havells"
                    srcFirst="../images/tab.jpg"
                    srcSecond="../images/tab1.jpg"
                    productTitle="Kids headphones buld 10 pack multi colored for students"
                    price="100.00"
                    description="at vero eos et accusamus et iusto odio dignissimos ducsimus qui blanditiis praesentium deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt..."
                    colValue="col-2"
                  />
                  <ProductCard
                    grid={grid}
                    brand="Havells"
                    srcFirst="../images/tab.jpg"
                    srcSecond="../images/tab1.jpg"
                    productTitle="Kids headphones buld 10 pack multi colored for students"
                    price="100.00"
                    description="at vero eos et accusamus et iusto odio dignissimos ducsimus qui blanditiis praesentium deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt..."
                    colValue="col-2"
                  />
                  <ProductCard
                    grid={grid}
                    brand="Havells"
                    srcFirst="../images/tab.jpg"
                    srcSecond="../images/tab1.jpg"
                    productTitle="Kids headphones buld 10 pack multi colored for students"
                    price="100.00"
                    description="at vero eos et accusamus et iusto odio dignissimos ducsimus qui blanditiis praesentium deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt..."
                    colValue="col-2"
                  />
                  <ProductCard
                    grid={grid}
                    brand="Havells"
                    srcFirst="../images/tab.jpg"
                    srcSecond="../images/tab1.jpg"
                    productTitle="Kids headphones buld 10 pack multi colored for students"
                    price="100.00"
                    description="at vero eos et accusamus et iusto odio dignissimos ducsimus qui blanditiis praesentium deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt..."
                    colValue="col-2"
                  />
                  <ProductCard
                    grid={grid}
                    brand="Havells"
                    srcFirst="../images/tab.jpg"
                    srcSecond="../images/tab1.jpg"
                    productTitle="Kids headphones buld 10 pack multi colored for students"
                    price="100.00"
                    description="at vero eos et accusamus et iusto odio dignissimos ducsimus qui blanditiis praesentium deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt..."
                    colValue="col-2"
                  />
                  <ProductCard
                    grid={grid}
                    brand="Havells"
                    srcFirst="../images/tab.jpg"
                    srcSecond="../images/tab1.jpg"
                    productTitle="Kids headphones buld 10 pack multi colored for students"
                    price="100.00"
                    description="at vero eos et accusamus et iusto odio dignissimos ducsimus qui blanditiis praesentium deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt..."
                    colValue="col-2"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OurStore;
