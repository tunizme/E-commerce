import React from "react";
import { Link } from "react-router-dom";
import Marquee from "react-fast-marquee";
import BlogCard from "../components/BlogCard";
import { BsCaretLeft, BsCaretRight } from "react-icons/bs";
import ProductCard from "../components/ProductCard";
import SpecialProduct from "../components/SpecialProduct";
import Meta from "../components/Meta";
function Home() {
  return (
    <>
      <Meta title={"ECommerce"} />
      <section className="home-wrapper-1 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-6">
              <div className="main-banner position-relative">
                <img
                  className="img-fluid rounded-3"
                  src="../images/main-banner-1.jpg"
                  alt="main banner"
                />
                <div className="main-banner-content position-absolute">
                  <h4>SUPPERCHARGED FOR PROS</h4>
                  <h5>iPad S13+ Pro.</h5>
                  <p>
                    From $999.00 or $41.462/mo. <br />
                    for 24 mo. Footnode*
                  </p>
                  <Link className="button">BUY NOW</Link>
                </div>
              </div>
            </div>
            <div className="col-6">
              <div className=" d-flex flex-wrap justify-content-between align-items-center gap-10">
                <div className="small-banner position-relative">
                  <img
                    className="img-fluid rounded-3"
                    src="../images/catbanner-01.jpg"
                    alt="small banner"
                  />
                  <div className="small-banner-content position-absolute">
                    <h4>BEST SALE</h4>
                    <h5>Laptop Max</h5>
                    <p>
                      From $1699.00 or <br /> $64.62/mo.
                    </p>
                  </div>
                </div>
                <div className="small-banner position-relative">
                  <img
                    className="img-fluid rounded-3"
                    src="../images/catbanner-03.jpg"
                    alt="small banner"
                  />
                  <div className="small-banner-content position-absolute">
                    <h4>NEW ARRIAL</h4>
                    <h5>Buy IPad Air</h5>
                    <p>
                      From $599 or <br /> $49.91/mo. for 12 mo. *
                    </p>
                  </div>
                </div>
                <div className="small-banner position-relative">
                  <img
                    className="img-fluid rounded-3"
                    src="../images/catbanner-02.jpg"
                    alt="small banner"
                  />
                  <div className="small-banner-content position-absolute">
                    <h4>15% OFF</h4>
                    <h5>Smartwatch 7</h5>
                    <p>
                      Shop the lastest band <br /> styles and colors.
                    </p>
                  </div>
                </div>
                <div className="small-banner position-relative">
                  <img
                    className="img-fluid rounded-3"
                    src="../images/catbanner-04.jpg"
                    alt="small banner"
                  />
                  <div className="small-banner-content position-absolute">
                    <h4>FREE ENGRAVING</h4>
                    <h5>AirPods Max</h5>
                    <p>
                      High-fidelity playback & <br />
                      ultra-low distortion
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="services d-flex align-items-center justify-content-between">
                <div className="d-flex align-items-center gap-10">
                  <img src="../images/service.png" alt="shipping" />.
                  <div className="services-content ">
                    <h6>Free Shipping</h6>
                    <p className="mb-0">From all orders over $5</p>
                  </div>
                </div>
                <div className="d-flex align-items-center gap-10">
                  <img src="../images/service-02.png" alt="shipping" />.
                  <div className="services-content ">
                    <h6>Daily Surpise Offers</h6>
                    <p className="mb-0">Save up to 25% off</p>
                  </div>
                </div>
                <div className="d-flex align-items-center gap-10">
                  <img src="../images/service-03.png" alt="shipping" />.
                  <div className="services-content ">
                    <h6>Support 24/7</h6>
                    <p className="mb-0">Shop with an expert</p>
                  </div>
                </div>
                <div className="d-flex align-items-center gap-10">
                  <img src="../images/service-04.png" alt="shipping" />.
                  <div className="services-content ">
                    <h6>Affordable Prices</h6>
                    <p className="mb-0">Get Factory direct price</p>
                  </div>
                </div>
                <div className="d-flex align-items-center gap-10">
                  <img src="../images/service-05.png" alt="shipping" />.
                  <div className="services-content ">
                    <h6>Secure Payments</h6>
                    <p className="mb-0">100% Protected Payments</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="categories d-flex flex-wrap align-items-center justify-content-between px-4">
                <div className="categories-item d-flex align-items-center justify-content-between">
                  <div className="categories-content">
                    <h6>Computers & Laptop</h6>
                    <p>8 items</p>
                  </div>
                  <img src="../images/laptop.jpg" alt="camera" />
                </div>
                <div className="categories-item d-flex align-items-center justify-content-between">
                  <div className="categories-content">
                    <h6>Cameras & Videos</h6>
                    <p>10 Items</p>
                  </div>
                  <img src="../images/camera.jpg" alt="camera" />
                </div>
                <div className="categories-item d-flex align-items-center justify-content-between">
                  <div className="categories-content">
                    <h6>Smart Televison</h6>
                    <p>12 Items</p>
                  </div>
                  <img src="../images/tv.jpg" alt="camera" />
                </div>
                <div className="categories-item d-flex align-items-center justify-content-between">
                  <div className="categories-content">
                    <h6>Smartwatches</h6>
                    <p>13 Items</p>
                  </div>
                  <img src="../images/watch.jpg" alt="camera" />
                </div>
                <div className="categories-item d-flex align-items-center justify-content-between">
                  <div className="categories-content">
                    <h6>Cameras</h6>
                    <p>10 Items</p>
                  </div>
                  <img src="../images/camera.jpg" alt="camera" />
                </div>
                <div className="categories-item d-flex align-items-center justify-content-between">
                  <div className="categories-content">
                    <h6>Headphones</h6>
                    <p>10 Items</p>
                  </div>
                  <img src="../images/headphone.jpg" alt="camera" />
                </div>
                <div className="categories-item d-flex align-items-center justify-content-between">
                  <div className="categories-content">
                    <h6>Cameras</h6>
                    <p>10 Items</p>
                  </div>
                  <img src="../images/acc.jpg" alt="camera" />
                </div>
                <div className="categories-item d-flex align-items-center justify-content-between">
                  <div className="categories-content">
                    <h6>Cameras</h6>
                    <p>10 Items</p>
                  </div>
                  <img src="../images/camera.jpg" alt="camera" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="marquee-wrapper home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="marquee-inner card-wrapper">
                <Marquee className="d-flex">
                  <div className="mx-4 w-25">
                    <img src="../images/brand-01.png" alt="brand" />
                  </div>
                  <div className="mx-4 w-25">
                    <img src="../images/brand-02.png" alt="brand" />
                  </div>
                  <div className="mx-4 w-25">
                    <img src="../images/brand-03.png" alt="brand" />
                  </div>
                  <div className="mx-4 w-25">
                    <img src="../images/brand-04.png" alt="brand" />
                  </div>
                  <div className="mx-4 w-25">
                    <img src="../images/brand-05.png" alt="brand" />
                  </div>
                  <div className="mx-4 w-25">
                    <img src="../images/brand-06.png" alt="brand" />
                  </div>
                  <div className="mx-4 w-25">
                    <img src="../images/brand-07.png" alt="brand" />
                  </div>
                  <div className="mx-4 w-25">
                    <img src="../images/brand-08.png" alt="brand" />
                  </div>
                </Marquee>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="featured-wrapper home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="d-flex align-items-center justify-content-between">
              <h5 className="section-heading">Featured Collection</h5>
              <div className="section-control">
                <BsCaretLeft />
                <BsCaretRight />
              </div>
            </div>
            <ProductCard
              brand="Havells"
              srcFirst="../images/tab.jpg"
              srcSecond="../images/tab1.jpg"
              productTitle="Kids headphones buld 10 pack multi colored for students"
              price="100.00"
              grid="2"
            />
            <ProductCard
              brand="Havells"
              srcFirst="../images/tab.jpg"
              srcSecond="../images/tab1.jpg"
              productTitle="Kids headphones buld 10 pack multi colored for students"
              price="100.00"
              grid="2"
            />
            <ProductCard
              brand="Havells"
              srcFirst="../images/tab.jpg"
              srcSecond="../images/tab1.jpg"
              productTitle="Kids headphones buld 10 pack multi colored for students"
              price="100.00"
              grid="2"
            />
            <ProductCard
              brand="Havells"
              srcFirst="../images/tab.jpg"
              srcSecond="../images/tab1.jpg"
              productTitle="Kids headphones buld 10 pack multi colored for students"
              price="100.00"
              grid="2"
            />
            <ProductCard
              brand="Havells"
              srcFirst="../images/tab.jpg"
              srcSecond="../images/tab1.jpg"
              productTitle="Kids headphones buld 10 pack multi colored for students"
              price="100.00"
              grid="2"
            />
            <ProductCard
              brand="Havells"
              srcFirst="../images/tab.jpg"
              srcSecond="../images/tab1.jpg"
              productTitle="Kids headphones buld 10 pack multi colored for students"
              price="100.00"
              grid="2"
            />
          </div>
        </div>
      </section>
      <section className="famous-wrapper home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-3">
              <div className="famous-card bg-dark position-relative">
                <img
                  className="img-fluid"
                  src="../images/famous-1.webp"
                  alt="famous-img"
                />
                <div className="famous-content text-white position-absolute">
                  <h6>Big Screen</h6>
                  <h5>Smart Watch Series 7</h5>
                  <p>From $399 or $16.62/mo. for 24 mo.*</p>
                </div>
              </div>
            </div>
            <div className="col-3">
              <div className="famous-card bg-dark position-relative">
                <img
                  className="img-fluid"
                  src="../images/famous-2.webp"
                  alt="famous-img"
                />
                <div className="famous-content text-dark position-absolute">
                  <h6>Studio Display</h6>
                  <h5>600 nits of brightness</h5>
                  <p>27-inch 5K Retina Display</p>
                </div>
              </div>
            </div>
            <div className="col-3">
              <div className="famous-card bg-dark position-relative">
                <img
                  className="img-fluid"
                  src="../images/famous-3.webp"
                  alt="famous-img"
                />
                <div className="famous-content text-dark position-absolute">
                  <h6>SmartPhones</h6>
                  <h5>Smartphone 13 Pro</h5>
                  <p>
                    Now in Green. From $999.00 or $41.62/mo. for 24 mo.
                    Footnote*
                  </p>
                </div>
              </div>
            </div>
            <div className="col-3">
              <div className="famous-card bg-dark position-relative">
                <img
                  className="img-fluid"
                  src="../images/famous-4.webp"
                  alt="famous-img"
                />
                <div className="famous-content text-dark position-absolute">
                  <h6>Home Speackers</h6>
                  <h5>Room-filling Sound</h5>
                  <p>From $699 or $116.58/mo. for 12 mo.*</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="special-wrapper home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="d-flex align-items-center justify-content-between">
              <h5 className="section-heading">Spectial Products</h5>
              <div className="section-control">
                <BsCaretLeft />
                <BsCaretRight />
              </div>
            </div>
          </div>
          <div className="row">
            <SpecialProduct
              brand="Havells"
              src="../images/tab.jpg"
              productTitle="Kids headphones buld 10 pack multi colored for students"
              discount="100.00"
              price="200.00"
            />
            <SpecialProduct
              brand="Havells"
              src="../images/tab.jpg"
              productTitle="Kids headphones buld 10 pack multi colored for students"
              discount="100.00"
              price="200.00"
            />
            <SpecialProduct
              brand="Havells"
              src="../images/tab.jpg"
              productTitle="Kids headphones buld 10 pack multi colored for students"
              discount="100.00"
              price="200.00"
            />
            <SpecialProduct
              brand="Havells"
              src="../images/tab.jpg"
              productTitle="Kids headphones buld 10 pack multi colored for students"
              discount="100.00"
              price="200.00"
            />
            <SpecialProduct
              brand="Havells"
              src="../images/tab.jpg"
              productTitle="Kids headphones buld 10 pack multi colored for students"
              discount="100.00"
              price="200.00"
            />
            <SpecialProduct
              brand="Havells"
              src="../images/tab.jpg"
              productTitle="Kids headphones buld 10 pack multi colored for students"
              discount="100.00"
              price="200.00"
            />
          </div>
        </div>
      </section>
      <section className="blog-wrapper home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="d-flex align-items-center justify-content-between">
              <h5 className="section-heading">Our Lastest News</h5>
              <div className="section-control">
                <BsCaretLeft />
                <BsCaretRight />
              </div>
            </div>
            <div className="col-3">
              <BlogCard />
            </div>
            <div className="col-3">
              <BlogCard />
            </div>
            <div className="col-3">
              <BlogCard />
            </div>
            <div className="col-3">
              <BlogCard />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
