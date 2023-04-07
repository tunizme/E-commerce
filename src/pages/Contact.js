import React from "react";
import Meta from "../components/Meta.js";
import BreadCrumb from "../components/BreadCrumb.js";
import { BsHouseFill, BsTelephoneFill, BsExclamationLg } from "react-icons/bs";
import { GrMail } from "react-icons/gr";
function Contact() {
  return (
    <>
      <Meta title={"Contact"} />
      <BreadCrumb title="Contact" />
      <div className="contact-wrapper home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <iframe
                title="map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1912.394858735511!2d107.55937620078294!3d16.53671040000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3141097eca8326c9%3A0xcb16c9ef3c37353f!2zVsOybmcgWHV54bq_biBUw6J5IFRow6BuaA!5e0!3m2!1svi!2s!4v1677319280185!5m2!1svi!2s"
                width="600"
                height="450"
                className="border-0 w-100"
                allowFullScreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
            <div className="col-12 mt-5">
              <div className="contact-wrapper-2 d-flex justify-content-between gap-30">
                <div className="col-6">
                  <h5 className="mb-4">Contact</h5>
                  <div className="mb-3">
                    <input
                      type="text"
                      className="form-control"
                      id="exampleFormControlInput1"
                      placeholder="Name"
                    />
                  </div>
                  <div className="mb-3">
                    <input
                      type="email"
                      className="form-control"
                      id="exampleFormControlInput1"
                      placeholder="Email *"
                    />
                  </div>
                  <div className="mb-3">
                    <input
                      type="tel"
                      className="form-control"
                      id="exampleFormControlInput1"
                      placeholder="Phone number"
                    />
                  </div>
                  <div className="mb-4">
                    <textarea
                      placeholder="Comment"
                      className="form-control"
                      id="exampleFormControlTextarea1"
                      rows="3"
                    ></textarea>
                  </div>
                  <span className="button py-2 px-4">SEND</span>
                </div>
                <div className="col-6">
                  <h5 className="mb-4">Get In Touch With Us</h5>
                  <div className="contact-inf d-flex align-items-center gap-10">
                    <BsHouseFill />
                    <p className="mb-0">
                      xom 6, thon Tay Thanh, xa Quang Thanh, tinh T.T.Hue
                    </p>
                  </div>
                  <div className="contact-inf d-flex align-items-center gap-10 mt-3">
                    <BsTelephoneFill />
                    <p className="mb-0">(+83)969721480</p>
                  </div>
                  <div className="contact-inf d-flex align-items-center gap-10 mt-3">
                    <GrMail />
                    <p className="mb-0">vuprobest@gmail.com</p>
                  </div>
                  <div className="contact-inf d-flex align-items-center gap-10 mt-3">
                    <BsExclamationLg />
                    <p className="mb-0">Monday-Sunday 7 AM - 5 PM</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
