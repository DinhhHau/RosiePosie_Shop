import React from "react";
import logo from "../../assets/img/logo1.jpg";
export default function Footer() {
  return (
    <footer className="footer container-fluid">
      <div className="footer_warpper">
        <div className="footer_row">
          <div className="footer_bottom">
            <div className="left">
              <span className="logo_footer">
                <img width={250} height={100} src={logo} alt="..." />
              </span>
              <span className="copyright text-dark text-trunc">
                © Since 2023
              </span>
            </div>
            <div className="right">
              <ul className="social">
                <li>
                  <a href="#">
                    <span className="icon">
                      <i className="fa-brands fa-tiktok " />
                    </span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span className="icon">
                      <i className="fa-brands fa-facebook" />
                    </span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span className="icon">
                      <i className="fa-brands fa-linkedin" />
                    </span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span className="icon">
                      <i className="fa-brands fa-pinterest" />
                    </span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span className="icon">
                      <i className="fa-brands fa-instagram" />
                    </span>
                  </a>
                </li>
              </ul>
              <section className="settings ">
                <div className="settings_locale">
                  <button className="selection">
                    <span>
                      <i className="fa-solid fa-globe" />
                    </span>
                    <span className="text">English</span>
                  </button>
                </div>
                <div className="settings_locale">
                  <button className="selection">
                    <span className="text">US$ USD</span>
                  </button>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
