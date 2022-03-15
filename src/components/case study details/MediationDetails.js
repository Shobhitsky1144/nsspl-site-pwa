import React from "react";
import { NavLink } from "react-router-dom";

const MediationDetails = () => {
  return (
    <>
      <div class="inner-banner">
        <div class="container">
          <div class="inner-title text-center">
            <h3 style={{ color: "white" }}>Case Study Details</h3>
            <ul>
              <li>
                <a href="/" style={{ color: "white" }}>
                  Home
                </a>
                <i class="bx bx-chevron-right" style={{ color: "white" }}></i>
              </li>
              <li style={{ color: "white" }}>Case Study Details</li>
            </ul>
          </div>
        </div>
        {/* <div class="inner-line">
          <div class="line1"></div>
          <div class="line2"></div>
        </div> */}
      </div>

      <div class="blog-details-area pt-100 pb-70">
        <div class="container">
          <div class="row">
            <div class="col-lg-4">
              <div class="side-bar-area mr-20">
                <div class="search-widget">
                  <form class="search-form">
                    <input
                      type="search"
                      class="form-control"
                      placeholder="Search..."
                      style={{ background: "#f3f3f3" }}
                    />
                    <button type="submit">
                      <i class="bx bx-search"></i>
                    </button>
                  </form>
                </div>
                <div class="side-bar-widget">
                  <h3 class="title">All Categories</h3>
                  <div class="side-bar-categories">
                    <ul>
                      <li>
                        <NavLink to="#" class="active">
                          Mobile App Development<span>70</span>
                        </NavLink>
                      </li>
                      <li>
                        <NavLink to="#">
                          UI/UX Design<span>12</span>
                        </NavLink>
                      </li>
                      <li>
                        <NavLink to="#">
                          Web Development<span>14</span>
                        </NavLink>
                      </li>
                      <li>
                        <NavLink to="#">
                          Cross Platform Mobile App<span>17</span>
                        </NavLink>
                      </li>
                      <li>
                        <NavLink to="#">
                          E-Commerce Development<span>37</span>
                        </NavLink>
                      </li>
                      <li>
                        <NavLink to="#">
                          Digital Transformation<span>18</span>
                        </NavLink>
                      </li>
                      <li>
                        <NavLink to="#">
                          AI / ML Solution<span>22</span>
                        </NavLink>
                      </li>
                      <li>
                        <NavLink to="#">
                          AR/VR Solution<span>22</span>
                        </NavLink>
                      </li>
                    </ul>
                  </div>
                </div>
                {/* <div class="side-bar-widget">
                  <h3 class="title">Recent Posts</h3>
                  <div class="widget-popular-post">
                    <article class="item">
                      <NavLink to="blog-details.html" class="thumb">
                        <span class="full-image cover bg1" role="img"></span>
                      </NavLink>
                      <div class="info">
                        <h4 class="title-text">
                          <NavLink to="blog-details.html">
                            We have announced the.
                          </NavLink>
                        </h4>
                        <p>
                          <i class="bx bx-time"></i> Jan 01, 2021
                        </p>
                      </div>
                    </article>
                    <article class="item">
                      <NavLink to="blog-details.html" class="thumb">
                        <span class="full-image cover bg2" role="img"></span>
                      </NavLink>
                      <div class="info">
                        <h4 class="title-text">
                          <NavLink to="blog-details.html">
                            Our meeting of motivation.
                          </NavLink>
                        </h4>
                        <p>
                          <i class="bx bx-time"></i> Jan 03, 2021
                        </p>
                      </div>
                    </article>
                    <article class="item">
                      <NavLink to="blog-details.html" class="thumb">
                        <span class="full-image cover bg3" role="img"></span>
                      </NavLink>
                      <div class="info">
                        <h4 class="title-text">
                          <NavLink to="blog-details.html">
                            Join to our community
                          </NavLink>
                        </h4>
                        <p>
                          <i class="bx bx-time"></i> Jan 05, 2021
                        </p>
                      </div>
                    </article>
                  </div>
                </div> */}
                <div class="side-bar-widget">
                  <h3 class="title">Tags</h3>
                  <ul class="side-bar-widget-tag">
                    <li>
                      <NavLink to="#">Mobile App Development</NavLink>
                    </li>
                    <li>
                      <NavLink to="#">React Native</NavLink>
                    </li>
                    <li>
                      <NavLink to="#">Ecommerce App </NavLink>
                    </li>
                    <li>
                      <NavLink to="#">Blockchain Development </NavLink>
                    </li>
                    <li>
                      <NavLink to="#">Community</NavLink>
                    </li>
                    <li>
                      <NavLink to="#">UI/UX</NavLink>
                    </li>
                    <li>
                      <NavLink to="#">Design</NavLink>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="col-lg-8">
              <div class="blog-article">
                <div class="blog-article-img">
                  <img src="/images/blog/blog-details-img.jpg" alt="Images" />
                </div>
                <div class="blog-article-title">
                  <ul>
                    {/* <li>
                      <i class="bx bx-time"></i> Jan 05, 2021
                    </li>
                    <li>
                      <NavLink to="author.html">
                        <i class="bx bx-user"></i> Ruth dacus
                      </NavLink>
                    </li> */}
                  </ul>
                  <h2>Art Of Living A Mediatation App</h2>
                </div>
                <div class="article-content">
                  <p>
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                    diam nonumy eirmod tempor invidunt ut labore et dolore magna
                    aliquyam erat, sed duo dolores et ea rebum. Stet clita kasd
                    gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
                    amet. Lorem ipsum dolor sit amet, conse tempor invidunt ut
                    labore et dolore magna aliquyam erat, sed diam voluptua. At
                    vero eos et accusam et justo duo dolores et ea rebum. Stet
                    clita Lorem ipsum dolor sit amet, consetetur sadipscing
                    elitr, sed diam nonumy eirmod tempor invidunt ut labore et
                    dolore magna aliquyam erat, sed duo dolores et ea rebum.
                    Stet clita kasd gubergren, no sea takimata sanctus est Lorem
                    ipsum dolor sit amet. Lorem ipsum dolor sit amet, conse
                    tempor invidunt ut labore et dolore magna aliquyam erat, sed
                    diam voluptua. At vero eos et accusam et justo duo dolores
                    et ea rebum. Stet clita Lorem ipsum dolor sit amet. Lorem
                    ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
                    nonumy eirmod tempor.
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                    diam nonumy eirmod tempor invidunt ut labore et dolore magna
                    aliquyam erat, sed duo dolores et ea rebum. Stet clita kasd
                    gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
                    amet. Lorem ipsum dolor sit amet, conse tempor invidunt ut
                    labore et dolore magna aliquyam erat, sed diam voluptua. At
                    vero eos et accusam et justo duo dolores et ea rebum. Stet
                    clita Lorem ipsum dolor sit amet, consetetur sadipscing
                    elitr, sed diam nonumy eirmod tempor invidunt ut labore et
                    dolore magna aliquyam erat, sed duo dolores et ea rebum.
                    Stet clita kasd gubergren, no sea takimata sanctus est.
                  </p>
                  <blockquote class="blockquote">
                    <p style={{ color: "white" }}>
                      Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                      sed diam nonumy eirmod tempor invidunt ut labore et dolore
                      magna aliquyam erat, sed diam voluptua. At vero eos et
                      accusam et justo.
                    </p>
                  </blockquote>
                  <p>
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                    diam nonumy eirmod tempor invidunt ut labore et dolore magna
                    aliquyam erat, sed diam voluptua. At vero eos et accusam et
                    justo duo dolores et ea rebum. Stet clita kasd gubergren, no
                    sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem
                    ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
                    nonumy eirmod tempor invidunt ut labore et dolore magna
                    aliquyam erat, sed diam voluptua. At vero eos et accusam et
                    justo duo dolores et ea rebum. Stet clita kasd gubergren, no
                    sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem
                    ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
                    nonumy eirmod tempor invidunt ut labore et dolore magna
                    aliquyam erat, sed diam voluptua. At vero eos et accusam et
                    justo duo dolores et ea rebum. Stet clita kasd gubergren, no
                    sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem
                    ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
                    nonumy eirmod tempor invidunt ut labore et dolore magna
                    aliquyam erat, sed diam voluptua. At vero eos et accusam et
                    justo duo dolores et ea rebum. Stet clita kasd gubergren, no
                    sea takimata sanctus est Lorem ipsum dolor .
                  </p>
                </div>
                <div class="comments-wrap">
                  <div
                    class="comment-title"
                    style={{ background: "#f3f3f3", borderRadius: "5px" }}
                  >
                    <h3 class="title">Comments (01)</h3>
                    <ul class="social-icon">
                      <li>Share :</li>
                      <li>
                        <NavLink to="https://www.facebook.com/" target="_blank">
                          <i class="bx bxl-facebook"></i>
                        </NavLink>
                      </li>
                      <li>
                        <NavLink to="https://www.linkedin.com/" target="_blank">
                          <i class="bx bxl-linkedin"></i>
                        </NavLink>
                      </li>
                      <li>
                        <NavLink to="https://twitter.com/" target="_blank">
                          <i class="bx bxl-twitter"></i>
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          to="https://www.instagram.com/"
                          target="_blank"
                        >
                          <i class="bx bxl-instagram"></i>
                        </NavLink>
                      </li>
                    </ul>
                  </div>
                  <ul class="comment-form">
                    <li style={{ background: "#f3f3f3", borderRadius: "5px" }}>
                      <img src="/images/blog/blog-profile.jpg" alt="Image" />
                      <h3>Clayton roy</h3>
                      <p>
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                        sed diam nonumy eirmod tempor invidu astana glory makes
                        one of duo dolores et ea rebum. Stet clita kasd
                        gubergren, no sea takimata sanctus est Lorem ipsum do
                        the best and makes more tempor invidunt ut labore et
                        dolore magna aliquyam erat, sed diam voluptua.
                      </p>
                      <div class="content">
                        <h4>
                          <NavLink to="blog-details.html"> Reply</NavLink>
                        </h4>
                        <h4>
                          <i class="bx bx-time"></i> Nov 02, 2020, 12:10 PM
                        </h4>
                      </div>
                    </li>
                  </ul>
                </div>
                <div class="comments-form">
                  <h3 class="title">Leave A Comment</h3>
                  <div class="contact-form">
                    <form id="contactForm">
                      <div class="row">
                        <div class="col-lg-6 col-sm-6">
                          <div class="form-group">
                            <input
                              type="text"
                              name="name"
                              id="name"
                              class="form-control"
                              required
                              data-error="Please enter your name"
                              placeholder="Your Name"
                              style={{
                                background: "#f3f3f3",
                                borderRadius: "5px",
                              }}
                            />
                          </div>
                        </div>
                        <div class="col-lg-6 col-sm-6">
                          <div class="form-group">
                            <input
                              type="email"
                              name="email"
                              id="email"
                              class="form-control"
                              required
                              data-error="Please enter your email"
                              placeholder="Your Email"
                              style={{
                                background: "#f3f3f3",
                                borderRadius: "5px",
                              }}
                            />
                          </div>
                        </div>
                        <div class="col-lg-12 col-sm-12">
                          <div class="form-group">
                            <input
                              type="text"
                              name="website"
                              class="form-control"
                              required
                              data-error="Your website"
                              placeholder="Your Website"
                              style={{
                                background: "#f3f3f3",
                                borderRadius: "5px",
                              }}
                            />
                          </div>
                        </div>
                        <div class="col-lg-12 col-md-12">
                          <div class="form-group">
                            <textarea
                              name="message"
                              class="form-control"
                              id="message"
                              cols="30"
                              rows="8"
                              required
                              data-error="Write your message"
                              placeholder="Your Message.."
                              style={{
                                background: "#f3f3f3",
                                borderRadius: "5px",
                              }}
                            ></textarea>
                          </div>
                        </div>
                        <div class="col-lg-12 col-md-12">
                          <div class="form-group checkbox-option">
                            <input type="checkbox" id="chb2" />
                            <p>
                              Save my name, email, and website in this browser
                              for the next time I comment.
                            </p>
                          </div>
                        </div>
                        <div class="col-lg-12 col-md-12">
                          <button type="submit" class="default-btn-three">
                            Post a comment
                          </button>
                        </div>
                      </div>
                    </form>
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

export default MediationDetails;
