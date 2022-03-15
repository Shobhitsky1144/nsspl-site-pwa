import React from "react";
import { NavLink } from "react-router-dom";

const CaseStudy = () => {
  return (
    <>
      <div class="inner-banner">
        <div class="container">
          <div class="inner-title text-center">
            <h3 style={{ color: "white" }}> Case Study</h3>
            <ul>
              <li>
                <a href="/" style={{ color: "white" }}>
                  Home
                </a>
                <i class="bx bx-chevron-right" style={{ color: "white" }}></i>
              </li>
              <li style={{ color: "white" }}> Case Study</li>
            </ul>
          </div>
        </div>
        {/* <div class="inner-line">
          <div class="line1"></div>
          <div class="line2"></div>
        </div> */}
      </div>

      <div
        className="blog-area pt-100 pb-70 mb-2"
        style={{ background: "#f3f3f3" }}
      >
        <div className="container">
          <div className="section-title text-center">
            <span className="sp-color2">Case Study</span>
            <h2 style={{ fontSize: "35px" }}>
              We shed a light on our work and what goes behind the Development.
            </h2>
          </div>
          <div className="row pt-45 ">
            <div className="col-lg-4 col-md-6">
              <div className="blog-card">
                <NavLink to="/casestudy-details" className="text-center">
                  <img src="/images/blog/blog-img1.jpg" alt="Blog Images" />
                </NavLink>
                <div className="content">
                  {/* <ul className="text-center">
                    <li>
                      <i className="bx bx-time-five"></i> Jan 05, 2021
                    </li>
                    <li>
                      <NavLink to="/author.html">
                        <i className="bx bx-user"></i> Ruth dacus
                     </NavLink>
                    </li>
                  </ul> */}
                  <h3>
                    <NavLink to="/casestudy-details" className="text-center">
                      ECommerce App
                    </NavLink>
                  </h3>
                  <div
                    className="tech d-flex justify-content-around"
                    style={{ fontSize: "14px" }}
                  >
                    <p
                      style={{
                        background: "lightGrey",
                        borderRadius: "25px",
                        padding: "1px 9px",
                        color: "black",
                      }}
                    >
                      Android
                    </p>
                    <p
                      style={{
                        background: "lightGrey",
                        borderRadius: "25px",
                        padding: "1px 9px",
                        color: "black",
                      }}
                    >
                      IOS
                    </p>
                    <p
                      style={{
                        background: "lightGrey",
                        borderRadius: "25px",
                        padding: "1px 9px",
                        color: "black",
                      }}
                    >
                      Node Js
                    </p>
                    <p
                      style={{
                        background: "lightGrey",
                        borderRadius: "25px",
                        padding: "1px 9px",
                        color: "black",
                      }}
                    >
                      My SQL
                    </p>
                  </div>

                  <NavLink
                    to="/casestudy-details"
                    className="read-more text-center"
                  >
                    Read more
                  </NavLink>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="blog-card">
                <NavLink to="/mediation-details" className="text-center">
                  <img src="/images/blog/blog-img2.jpg" alt="Blog Images" />
                </NavLink>
                <div className="content">
                  {/* <ul className="text-center">
                    <li>
                      <i className="bx bx-time-five"></i> Jan 06, 2021
                    </li>
                    <li>
                      <NavLink to="/author.html">
                        <i className="bx bx-user"></i> Paul jones
                     </NavLink>
                    </li>
                  </ul> */}
                  <h3>
                    <NavLink to="/mediation-details" className="text-center">
                      Art of Living A Meditation App
                    </NavLink>
                  </h3>
                  <div
                    className="tech d-flex justify-content-around"
                    style={{ fontSize: "14px" }}
                  >
                    <p
                      style={{
                        background: "lightGrey",
                        borderRadius: "25px",
                        padding: "1px 9px",
                        color: "black",
                      }}
                    >
                      Android
                    </p>
                    <p
                      style={{
                        background: "lightGrey",
                        borderRadius: "25px",
                        padding: "1px 9px",
                        color: "black",
                      }}
                    >
                      IOS
                    </p>
                    <p
                      style={{
                        background: "lightGrey",
                        borderRadius: "25px",
                        padding: "1px 9px",
                        color: "black",
                      }}
                    >
                      Node Js
                    </p>
                    <p
                      style={{
                        background: "lightGrey",
                        borderRadius: "25px",
                        padding: "1px 9px",
                        color: "black",
                      }}
                    >
                      My SQL
                    </p>
                  </div>
                  <NavLink
                    to="/mediation-details"
                    className="read-more text-center"
                  >
                    Read more
                  </NavLink>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 offset-lg-0 offset-md-3">
              <div className="blog-card">
                <NavLink to="/pizza-delivery-details" className="text-center">
                  <img src="/images/blog/blog-img3.jpg" alt="Blog Images" />
                </NavLink>
                <div className="content">
                  {/* <ul className="text-center">
                    <li>
                      <i className="bx bx-time-five"></i> Jan 07, 2021
                    </li>
                    <li>
                      <NavLink to="/author.html">
                        <i className="bx bx-user"></i> Annie sanders
                     </NavLink>
                    </li>
                  </ul> */}
                  <h3>
                    <NavLink
                      to="/pizza-delivery-details"
                      className="text-center"
                    >
                      Pizza Delivery App
                    </NavLink>
                  </h3>
                  <div
                    className="tech d-flex justify-content-around"
                    style={{ fontSize: "14px" }}
                  >
                    <p
                      style={{
                        background: "lightGrey",
                        borderRadius: "25px",
                        padding: "1px 9px",
                        color: "black",
                      }}
                    >
                      Android
                    </p>
                    <p
                      style={{
                        background: "lightGrey",
                        borderRadius: "25px",
                        padding: "1px 9px",
                        color: "black",
                      }}
                    >
                      IOS
                    </p>
                    <p
                      style={{
                        background: "lightGrey",
                        borderRadius: "25px",
                        padding: "1px 9px",
                        color: "black",
                      }}
                    >
                      Node Js
                    </p>
                    <p
                      style={{
                        background: "lightGrey",
                        borderRadius: "25px",
                        padding: "1px 9px",
                        color: "black",
                      }}
                    >
                      My SQL
                    </p>
                  </div>
                  <NavLink
                    to="/pizza-delivery-details"
                    className="read-more text-center"
                  >
                    Read more
                  </NavLink>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="blog-card">
                <NavLink to="/messaging-app-details" className="text-center">
                  <img src="/images/blog/blog-img1.jpg" alt="Blog Images" />
                </NavLink>
                <div className="content">
                  {/* <ul className="text-center">
                    <li>
                      <i className="bx bx-time-five"></i> Jan 05, 2021
                    </li>
                    <li>
                      <NavLink to="/author.html">
                        <i className="bx bx-user"></i> Ruth dacus
                     </NavLink>
                    </li>
                  </ul> */}
                  <h3>
                    <NavLink
                      to="/messaging-app-details"
                      className="text-center"
                    >
                      CUSTOM MULTIMEDIA MESSAGING APPLICATION
                    </NavLink>
                  </h3>
                  <div
                    className="tech d-flex justify-content-around"
                    style={{ fontSize: "14px" }}
                  >
                    <p
                      style={{
                        background: "lightGrey",
                        borderRadius: "25px",
                        padding: "1px 9px",
                        color: "black",
                      }}
                    >
                      Android
                    </p>
                    <p
                      style={{
                        background: "lightGrey",
                        borderRadius: "25px",
                        padding: "1px 9px",
                        color: "black",
                      }}
                    >
                      IOS
                    </p>
                    <p
                      style={{
                        background: "lightGrey",
                        borderRadius: "25px",
                        padding: "1px 9px",
                        color: "black",
                      }}
                    >
                      Node Js
                    </p>
                    <p
                      style={{
                        background: "lightGrey",
                        borderRadius: "25px",
                        padding: "1px 9px",
                        color: "black",
                      }}
                    >
                      My SQL
                    </p>
                  </div>

                  <NavLink
                    to="/messaging-app-details"
                    className="read-more text-center"
                  >
                    Read more
                  </NavLink>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="blog-card">
                <NavLink
                  to="/assets-management-details"
                  className="text-center"
                >
                  <img src="/images/blog/blog-img1.jpg" alt="Blog Images" />
                </NavLink>
                <div className="content">
                  {/* <ul className="text-center">
                    <li>
                      <i className="bx bx-time-five"></i> Jan 05, 2021
                    </li>
                    <li>
                      <NavLink to="/author.html">
                        <i className="bx bx-user"></i> Ruth dacus
                     </NavLink>
                    </li>
                  </ul> */}
                  <h3>
                    <NavLink
                      to="/assets-management-details"
                      className="text-center"
                    >
                      Optimized AV Asset Management Platform
                    </NavLink>
                  </h3>
                  <div
                    className="tech d-flex justify-content-around"
                    style={{ fontSize: "14px" }}
                  >
                    <p
                      style={{
                        background: "lightGrey",
                        borderRadius: "25px",
                        padding: "1px 9px",
                        color: "black",
                      }}
                    >
                      Android
                    </p>
                    <p
                      style={{
                        background: "lightGrey",
                        borderRadius: "25px",
                        padding: "1px 9px",
                        color: "black",
                      }}
                    >
                      IOS
                    </p>
                    <p
                      style={{
                        background: "lightGrey",
                        borderRadius: "25px",
                        padding: "1px 9px",
                        color: "black",
                      }}
                    >
                      Node Js
                    </p>
                    <p
                      style={{
                        background: "lightGrey",
                        borderRadius: "25px",
                        padding: "1px 9px",
                        color: "black",
                      }}
                    >
                      My SQL
                    </p>
                  </div>

                  <NavLink
                    to="/assets-management-details"
                    className="read-more text-center"
                  >
                    Read more
                  </NavLink>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="blog-card">
                <NavLink to="/datamanagement-details" className="text-center">
                  <img src="/images/blog/blog-img1.jpg" alt="Blog Images" />
                </NavLink>
                <div className="content">
                  {/* <ul className="text-center">
                    <li>
                      <i className="bx bx-time-five"></i> Jan 05, 2021
                    </li>
                    <li>
                      <NavLink to="/author.html">
                        <i className="bx bx-user"></i> Ruth dacus
                     </NavLink>
                    </li>
                  </ul> */}
                  <h3>
                    <NavLink
                      to="/datamanagement-details"
                      className="text-center"
                    >
                      ADEA Modernizes Existing Web App with Data Management
                    </NavLink>
                  </h3>
                  <div
                    className="tech d-flex justify-content-around"
                    style={{ fontSize: "14px" }}
                  >
                    <p
                      style={{
                        background: "lightGrey",
                        borderRadius: "25px",
                        padding: "1px 9px",
                        color: "black",
                      }}
                    >
                      Android
                    </p>
                    <p
                      style={{
                        background: "lightGrey",
                        borderRadius: "25px",
                        padding: "1px 9px",
                        color: "black",
                      }}
                    >
                      IOS
                    </p>
                    <p
                      style={{
                        background: "lightGrey",
                        borderRadius: "25px",
                        padding: "1px 9px",
                        color: "black",
                      }}
                    >
                      Node Js
                    </p>
                    <p
                      style={{
                        background: "lightGrey",
                        borderRadius: "25px",
                        padding: "1px 9px",
                        color: "black",
                      }}
                    >
                      My SQL
                    </p>
                  </div>

                  <NavLink
                    to="/datamanagement-details"
                    className="read-more text-center"
                  >
                    Read more
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CaseStudy;
