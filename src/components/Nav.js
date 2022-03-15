import React, { useState, useEffect } from "react";

import { Link, NavLink } from "react-router-dom";

const Nav = () => {
  // const [openMenu, setOpenMenu] = useState(null);

  const [homeBtn, setHomeBtn] = useState(false);
  const [aboutBtn, setAboutBtn] = useState(false);
  const [portfolioBtn, setPortfolioBtn] = useState(false);
  const [servicesBtn, setServicesBtn] = useState(false);
  const [caseStudyBtn, setCaseStudyBtn] = useState(false);
  const [contactBtn, setContactBtn] = useState(false);

  const [homes, setHomes] = useState(true);

  useEffect(() => {
    var url = [
      "/js/jquery-min.js",
      "/js/bootstrap.bundle.min.js",
      "/js/owl.carousel.min.js",
      "/js/carousel-thumbs.js",
      "/js/jquery.nice-select.min.js",
      "/js/wow.min.js",
      "/js/meanmenu.js",
      "/js/jquery-ui.min.js",
      "/js/jquery.magnific-popup.min.js",
      "/js/mixitup.min.js",
      "/js/jquery.ajaxchimp.min.js",
      "/js/form-validator.min.js",
      "/js/contact-form-script.js",
      "/js/custom.js",
    ];
    url.map((url) => addScriptJS(url));
  }, [homes, homeBtn]);

  const addScriptJS = (url) => {
    var newScript = document.createElement("script");
    newScript.src = url;

    document.body.appendChild(newScript);
  };

  const HomeButton = () => {
    setHomes(!homes);
    setHomeBtn(true);
    setAboutBtn(false);
    setPortfolioBtn(false);
    setServicesBtn(false);
    setCaseStudyBtn(false);
    setContactBtn(false);
  };

  const AboutButton = () => {
    setHomes(!homes);
    setHomeBtn(false);
    setPortfolioBtn(false);
    setServicesBtn(false);
    setCaseStudyBtn(false);
    setContactBtn(false);
    setAboutBtn(true);
  };

  const PortfolioButton = () => {
    setHomeBtn(false);
    setAboutBtn(false);
    setPortfolioBtn(true);
    setServicesBtn(false);
    setCaseStudyBtn(false);
    setContactBtn(false);
  };
  const CaseStudyButton = () => {
    setHomeBtn(false);
    setAboutBtn(false);
    setPortfolioBtn(false);
    setServicesBtn(false);
    setCaseStudyBtn(true);
    setContactBtn(false);
  };
  const ContactButton = () => {
    setHomeBtn(false);
    setAboutBtn(false);
    setPortfolioBtn(false);
    setServicesBtn(false);
    setCaseStudyBtn(false);
    setContactBtn(true);
  };
  const ServicesButton = () => {
    setHomeBtn(false);
    setAboutBtn(false);
    setPortfolioBtn(false);
    setServicesBtn(true);
    setCaseStudyBtn(false);
    setContactBtn(false);
  };

  return (
    <>
      {/* <div class="preloader">
        <div class="d-table">
          <div class="d-table-cell">
            <div class="spinner">
              <div class="circle1"></div>
              <div class="circle2"></div>
              <div class="circle3"></div>
            </div>
          </div>
        </div>
      </div> */}

      <div className="navbar-area">
        <div className="mobile-nav">
          <NavLink to="/" className="logo" onClick={HomeButton}>
            <img
              src="/images/nsspl images/NSS logo 1.png"
              className="logo-one"
              alt="Logo"
            />
            <img
              src="/images/nsspl images/NSS logo 1.png"
              className="logo-two"
              alt="Logo"
            />
          </NavLink>
        </div>

        <div className="main-nav main-nav-bottom">
          <div className="container">
            <nav className="navbar navbar-expand-md navbar-light">
              <NavLink className="navbar-brand" to="/" onClick={HomeButton}>
                <img
                  src="/images/nsspl images/NSS logo 1.png"
                  className="logo-one"
                  alt="Logo"
                />
                <img
                  src="/images/nsspl images/NSS logo 1.png"
                  className="logo-two"
                  alt="Logo"
                />
              </NavLink>
              <div
                className="collapse navbar-collapse mean-menu"
                id="navbarSupportedContent"
              >
                <ul className="navbar-nav m-auto">
                  <li className="nav-item">
                    <NavLink
                      to="/"
                      className={
                        !aboutBtn &&
                        homeBtn &&
                        !portfolioBtn &&
                        !servicesBtn &&
                        !caseStudyBtn &&
                        !contactBtn
                          ? "nav-link active"
                          : "nav-link"
                      }
                      onClick={HomeButton}
                    >
                      {console.log("om", homeBtn)}
                      Home
                      {/* <i className="bx bx-chevron-down"></i> */}
                    </NavLink>
                    {/* <ul className="dropdown-menu">
                      <li className="nav-item">
                        <NavLi
                        nk to="index.html" className="nav-link">
                          Home One
                        </NavLink>
                      </li>
                      <li className="nav-item">
                        <NavLink to="index-2.html" className="nav-link">
                          Home Two
                        </NavLink>
                      </li>
                      <li className="nav-item">
                        <NavLink to="index-3.html" className="nav-link active">
                          Home Three
                        </NavLink>
                      </li>
                    </ul> */}
                  </li>
                  <li className="nav-item">
                    <NavLink
                      to="/about-us"
                      className={
                        aboutBtn &&
                        !homeBtn &&
                        !portfolioBtn &&
                        !servicesBtn &&
                        !caseStudyBtn &&
                        !contactBtn
                          ? "nav-link active "
                          : "nav-link "
                      }
                      onClick={AboutButton}
                    >
                      About Us
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink
                      to="/portfolio"
                      className={
                        !homeBtn &&
                        !aboutBtn &&
                        portfolioBtn &&
                        !servicesBtn &&
                        !caseStudyBtn &&
                        !contactBtn
                          ? "nav-link active "
                          : "nav-link    "
                      }
                      onClick={PortfolioButton}
                    >
                      Portfolio
                      {/* <i className="bx bx-chevron-down"></i> */}
                    </NavLink>
                    {/* <ul className="dropdown-menu"> */}
                    {/* <li className="nav-item">
                        <NavLink to="#" className="nav-link">
                          Shop
                          <i className="bx bx-chevron-down"></i>
                        </NavLink>
                        <ul className="dropdown-menu">
                          <li className="nav-item">
                            <NavLink to="shop.html" className="nav-link">
                              Shop
                            </NavLink>
                          </li>
                          <li className="nav-item">
                            <NavLink
                              to="shop-details.html"
                              className="nav-link"
                            >
                              Shop Details
                            </NavLink>
                          </li>
                          <li className="nav-item">
                            <NavLink to="cart.html" className="nav-link">
                              Cart
                            </NavLink>
                          </li>
                          <li className="nav-item">
                            <NavLink to="checkout.html" className="nav-link">
                              Checkout
                            </NavLink>
                          </li>
                          <li className="nav-item">
                            <NavLink to="wishlist.html" className="nav-link">
                              Wishlist
                            </NavLink>
                          </li>
                        </ul>
                      </li>
                      <li className="nav-item">
                        <NavLink to="author.html" className="nav-link">
                          Author
                        </NavLink>
                      </li>
                      <li className="nav-item">
                        <NavLink to="testimonials.html" className="nav-link">
                          Testimonials
                        </NavLink>
                      </li>
                      <li className="nav-item">
                        <NavLink to="team.html" className="nav-link">
                          Team
                        </NavLink>
                      </li>
                      <li className="nav-item">
                        <NavLink to="faq.html" className="nav-link">
                          FAQ
                        </NavLink>
                      </li>
                      <li className="nav-item">
                        <NavLink to="#" className="nav-link">
                          User
                          <i className="bx bx-chevron-down"></i>
                        </NavLink>
                        <ul className="dropdown-menu">
                          <li className="nav-item">
                            <NavLink to="login.html" className="nav-link">
                              Log In
                            </NavLink>
                          </li>
                          <li className="nav-item">
                            <NavLink to="register.html" className="nav-link">
                              Register
                            </NavLink>
                          </li>
                          <li className="nav-item">
                            <NavLink
                              to="forget-password.html"
                              className="nav-link"
                            >
                              Forget Password
                            </NavLink>
                          </li>
                        </ul>
                      </li>
                      <li className="nav-item">
                        <NavLink to="terms-condition.html" className="nav-link">
                          Terms & Conditions
                        </NavLink>
                      </li>
                      <li className="nav-item">
                        <NavLink to="privacy-policy.html" className="nav-link">
                          Privacy Policy
                        </NavLink>
                      </li>
                      <li className="nav-item">
                        <NavLink to="404.html" className="nav-link">
                          404 page
                        </NavLink>
                      </li>
                      <li className="nav-item">
                        <NavLink to="coming-soon.html" className="nav-link">
                          Coming Soon
                        </NavLink>
                      </li> */}
                    {/* </ul> */}
                  </li>
                  <li className="nav-item">
                    <NavLink
                      to="/service-details"
                      className={
                        servicesBtn &&
                        !homeBtn &&
                        !aboutBtn &&
                        !portfolioBtn &&
                        !caseStudyBtn &&
                        !contactBtn
                          ? "nav-link active"
                          : "nav-link    "
                      }
                      onClick={ServicesButton}
                    >
                      Services
                      {/* <i className="bx bx-chevron-down"></i> */}
                    </NavLink>
                    {/* <ul className="dropdown-menu">
                      <li className="nav-item">
                        <NavLink to="services-1.html" className="nav-link">
                          services Grid
                        </NavLink>
                      </li>
                      <li className="nav-item">
                        <NavLink to="services-2.html" className="nav-link">
                          services Style One
                        </NavLink>
                      </li>
                      <li className="nav-item">
                        <NavLink to="services-3.html" className="nav-link">
                          services Style Two
                        </NavLink>
                      </li>
                      <li className="nav-item">
                        <NavLink to="service-details" className="nav-link">
                          services Details
                        </NavLink>
                      </li>
                    </ul> */}
                  </li>
                  <li className="nav-item">
                    <NavLink
                      to="/case-study"
                      className={
                        !homeBtn &&
                        !aboutBtn &&
                        !portfolioBtn &&
                        !servicesBtn &&
                        caseStudyBtn &&
                        !contactBtn
                          ? "nav-link active "
                          : "nav-link "
                      }
                      onClick={CaseStudyButton}
                    >
                      Case Study
                      <i className="bx bx-chevron-down"></i>
                    </NavLink>
                    <ul className="dropdown-menu">
                      <li className="nav-item">
                        <NavLink to="/case-study" className="nav-link">
                          Case Study Grid
                        </NavLink>
                      </li>
                      <li className="nav-item">
                        <NavLink to="/casestudy-details" className="nav-link">
                          Case Study Details
                        </NavLink>
                      </li>
                      {/* <li className="nav-item">
                        <NavLink to="blog-3.html" className="nav-link">
                          Blog Right Sidebar
                        </NavLink>
                      </li>
                      <li className="nav-item">
                        <NavLink to="blog-details.html" className="nav-link">
                          Case Study Details
                        </NavLink>
                      </li> */}
                    </ul>
                  </li>
                  <li className="nav-item">
                    <NavLink
                      to="/contact-us"
                      className={
                        !homeBtn &&
                        !aboutBtn &&
                        !portfolioBtn &&
                        !servicesBtn &&
                        !caseStudyBtn &&
                        contactBtn
                          ? "nav-link active "
                          : "nav-link "
                      }
                      onClick={ContactButton}
                    >
                      Contact Us
                    </NavLink>
                  </li>
                </ul>
                <div className="nav-bar-side">
                  <div className="nav-btn">
                    <NavLink
                      to="/contact-us"
                      className="default-btn-two border-radius-5"
                    >
                      Get A Quote
                    </NavLink>
                  </div>
                </div>
              </div>
            </nav>
          </div>
        </div>
        <div className="side-nav-responsive">
          <div className="container-max">
            <div className="dot-menu">
              <div className="circle-inner">
                <div className="circle circle-one"></div>
                <div className="circle circle-two"></div>
                <div className="circle circle-three"></div>
              </div>
            </div>
            <div className="container">
              <div className="side-nav-inner">
                <div className="side-nav justify-content-center align-items-center">
                  {/* <div className="side-nav-item"> */}
                  {/* <div className="language-side-list">
                      <select className="language-list-item">
                        <option>English</option>
                        <option>العربيّة</option>
                        <option>Deutsch</option>
                        <option>Português</option>
                        <option>简体中文</option>
                      </select>
                    </div> */}
                  {/* </div> */}
                  {/* <div className="side-nav-item">
                    <NavLink to="cart.html" className="shoping-nav-btn">
                      <i className="flaticon-shopping-bag"></i>
                      <span>0</span>
                    </NavLink>
                  </div> */}
                  <div className="side-nav-item">
                    <NavLink to="/contact-us" className="side-nav-btn">
                      Free quote
                    </NavLink>
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

export default Nav;
