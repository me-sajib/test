import React from "react";
import { Link } from 'gatsby'
import appData from "data/app.json";

const Footer = ({ hideBGCOLOR }) => {
  return (
    <footer className={`${!hideBGCOLOR ? "sub-bg" : ""}`}>
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
            <div className="item md-mb50">
              <div className="title">
                <h5>Contact Us</h5>
              </div>
              <ul>
                <li>
                  <span className="icon pe-7s-map-marker"></span>
                  <div className="cont">
                    <h6>Officeal Address</h6>
                    <p>75, Jalan Templer,
                      Section 6,<br></br> Petaling Jaya,
                      46000 <br></br>Selangor, Malaysia.
                    </p>
                  </div>
                </li>
                <li>
                  <span className="icon pe-7s-mail"></span>
                  <div className="cont">
                    <h6>Email Us</h6>
                    <p>info@firstambulance.com.my</p>
                  </div>
                </li>
                <li>
                  <span className="icon pe-7s-call"></span>
                  <div className="cont">
                    <h6>Call Us</h6>
                    <Link to="tel:1300881919">
                      <p>1300 88 1919</p>
                    </Link>
                    <h6>IDD</h6>
                    <Link to="tel:+60377851919" >
                      <p>+603 7785 1919</p>
                    </Link>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="item md-mb50">
              <div className="title">
                <h5>Recent News</h5>
              </div>
              <ul>
                <li>
                  <div className="img">
                    <Link to="/blog-details/blog-details-dark">
                      <img src="/img/blog/1.jpg" alt="" />
                    </Link>
                  </div>
                  <div className="sm-post">
                    <Link to="/blog-details/blog-details-dark">
                      <p>
                        The Start-Up Ultimate Guide to Make Your WordPress
                        Journal.
                      </p>
                    </Link>
                    <Link to="/blog/blog-dark">
                      <span className="date">14 sep 2022</span>
                    </Link>
                  </div>
                </li>
                <li>
                  <div className="img">
                    <Link to="/blog-details/blog-details-dark">
                      <img src="/img/blog/2.jpg" alt="" />
                    </Link>
                  </div>
                  <div className="sm-post">
                    <Link to="/blog-details/blog-details-dark">
                      <p>
                        The Start-Up Ultimate Guide to Make Your WordPress
                        Journal.
                      </p>
                    </Link>
                    <Link to="/blog/blog-dark">
                      <span className="date">14 sep 2022</span>
                    </Link>
                  </div>
                </li>
                <li>
                  <div className="subscribe">
                    <input type="text" placeholder="Type Your Email" />
                    <span className="subs pe-7s-paper-plane"></span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="item">
              <div className="logo">
                <img src={appData.lightLogo} alt="" />
              </div>
              <div className="social">
                <a href="https://www.facebook.com/firstambulance/" className="icon">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="https://www.instagram.com/firstambulance/" className="icon">
                  <i className="fab fa-instagram"></i>
                </a>
                <a href="ttps://www.youtube.com/@firstambulance5810" className="icon">
                  <i className="fab fa-youtube"></i>
                </a>
                <a href="https://www.linkedin.com/company/first-ambulance-services" className="icon">
                  <i className="fab fa-linkedin"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
