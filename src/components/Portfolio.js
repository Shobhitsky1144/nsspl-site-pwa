import React from "react";

const Portfolio = () => {
  return (
    <div>
      <div class="inner-banner">
        <div class="container">
          <div class="inner-title text-center">
            <h3 style={{ color: "white" }}>Portfolio Grid</h3>
            <ul>
              <li>
                <a href="/" style={{ color: "white" }}>
                  Home
                </a>
                <i class="bx bx-chevron-right" style={{ color: "white" }}></i>
              </li>
              <li style={{ color: "white" }}>Portfolio Grid</li>
            </ul>
          </div>
        </div>
        {/* <div class="inner-line">
          <div class="line1"></div>
          <div class="line2"></div>
        </div> */}
      </div>

      <div class="services-style-area pt-100 pb-70">
        <div class="container">
          <div class="section-title text-center">
            <span class="sp-color2">OUR PORTFOLIO</span>
            <h2>
              Check out some of our past work on complex projects for SMBs and
              enterprise-size businesses.
            </h2>
          </div>
          <div class="row pt-45">
            <div class="col-lg-6 col-sm-6">
              <div class="services-item">
                <i class="flaticon-advertising"></i>
                <h3>
                  <a href="#">Mark Garrison Constructors and Engineers Inc.</a>
                </h3>
                <p>
                  MGCE has grown to be one of the most highly respected
                  engineering and construction companies in Northern California
                  and is comprised of a solid team of professionals and workers
                  who strive to meet the needs of our residential.
                </p>
                {/* <a href="#" class="read-more">
                  Read more
                </a> */}
              </div>
            </div>
            <div class="col-lg-6 col-sm-6">
              <div class="services-item">
                <i class="flaticon-laptop"></i>
                <h3>
                  <a href="#">Ondot Systems - Card Control</a>
                </h3>
                <p>
                  Ondot''s intelligent, extensible platform is built on a
                  services-oriented architecture that delivers feature-rich
                  services to cardholders and issuers. The CardControl service
                  allows cardholders to control when, where and how each of the
                  cards is used.
                </p>
                {/* <a href="#" class="read-more">
                  Read more
                </a> */}
              </div>
            </div>
            <div class="col-lg-6 col-sm-6">
              <div class="services-item">
                <i class="flaticon-settings-1"></i>
                <h3>
                  <a href="#">UI/UX design</a>
                </h3>
                <p>
                  Lorem ipsum dolor sit amet, elit consectetur adipiscing elit
                  ut nullam ullamcorper sapien nisl.
                </p>
                {/* <a href="#" class="read-more">
                  Read more
                </a> */}
              </div>
            </div>
            <div class="col-lg-6 col-sm-6">
              <div class="services-item">
                <i class="flaticon-startup"></i>
                <h3>
                  <a href="#">Cloud computing</a>
                </h3>
                <p>
                  Lorem ipsum dolor sit amet, elit consectetur adipiscing elit
                  ut nullam ullamcorper sapien nisl.
                </p>
                {/* <a href="#" class="read-more">
                  Read more
                </a> */}
              </div>
            </div>
            <div class="col-lg-6 col-sm-6">
              <div class="services-item">
                <i class="flaticon-setting"></i>
                <h3>
                  <a href="#">Maintain all data</a>
                </h3>
                <p>
                  Lorem ipsum dolor sit amet, elit consectetur adipiscing elit
                  ut nullam ullamcorper sapien nisl.
                </p>
                {/* <a href="#" class="read-more">
                  Read more
                </a> */}
              </div>
            </div>
            <div class="col-lg-6 col-sm-6">
              <div class="services-item">
                <i class="flaticon-application-settings"></i>
                <h3>
                  <a href="#">Web development</a>
                </h3>
                <p>
                  Lorem ipsum dolor sit amet, elit consectetur adipiscing elit
                  ut nullam ullamcorper sapien nisl.
                </p>
                {/* <a href="#" class="read-more">
                  Read more
                </a> */}
              </div>
            </div>
            <div class="col-lg-6 col-sm-6">
              <div class="services-item">
                <i class="flaticon-download"></i>
                <h3>
                  <a href="#">Cloud services</a>
                </h3>
                <p>
                  Lorem ipsum dolor sit amet, elit consectetur adipiscing elit
                  ut nullam ullamcorper sapien nisl.
                </p>
                {/* <a href="#" class="read-more">
                  Read more
                </a> */}
              </div>
            </div>
            <div class="col-lg-6 col-sm-6">
              <div class="services-item">
                <i class="flaticon-analytics"></i>
                <h3>
                  <a href="#">Data & analysis</a>
                </h3>
                <p>
                  Lorem ipsum dolor sit amet, elit consectetur adipiscing elit
                  ut nullam ullamcorper sapien nisl.
                </p>
                {/* <a href="#" class="read-more">
                  Read more
                </a> */}
              </div>
            </div>
            {/* <div class="col-lg-12 col-md-12 text-center">
              <div class="pagination-area">
                <a href="#" class="prev page-numbers">
                  <i class="bx bx-chevron-left"></i>
                </a>
                <span class="page-numbers current" aria-current="page">
                  1
                </span>
                <a href="#" class="page-numbers">
                  2
                </a>
                <a href="#" class="page-numbers">
                  3
                </a>
                <a href="#" class="next page-numbers">
                  <i class="bx bx-chevron-right"></i>
                </a>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
