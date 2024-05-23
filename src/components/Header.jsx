import Link from "next/link";
import React from "react";

function Header() {
  return (
    <header className="header_section">
      <div className="container-fluid">
        <nav className="navbar navbar-expand-lg custom_nav-container ">
          <a className="navbar-brand" href="index.html">
            <span>Seotech</span>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="s-1"> </span>
            <span className="s-2"> </span>
            <span className="s-3"> </span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <div className="d-flex mx-auto flex-column flex-lg-row align-items-center">
              <ul className="navbar-nav  ">
                <li className="nav-item active">
                  <Link className="nav-link" href="/">
                    Home <span className="sr-only">(current)</span>
                  </Link>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="about.html">
                    {" "}
                    About
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="service.html">
                    {" "}
                    Services{" "}
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#contactLink">
                    Contact Us
                  </a>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" href="/SignIn">
                    SignIn
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" href="/SignUp">
                    SignUp
                  </Link>
                </li>
              </ul>
            </div>
            <div className="quote_btn-container ">
              <a href="">
                <img src="images/call.png" alt="" />
                <span>Call : + 212 6234567890</span>
              </a>
              <form className="form-inline">
                <button
                  className="btn  my-2 my-sm-0 nav_search-btn"
                  type="submit"
                />
              </form>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Header;
