import React, { Children, Component } from "react";

class Layout extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <div className="wrapper ">
          <div
            className="sidebar"
            data-color="purple"
            data-background-color="white"
            data-image="../assets/img/sidebar-1.jpg"
          >
            <div className="logo">
              <a
                href="http://www.creative-tim.com"
                className="simple-text logo-normal"
              >
                Creative Tim
              </a>
            </div>
            <div className="sidebar-wrapper">
              <ul className="nav">
                <li className="nav-item active  ">
                  <a className="nav-link" href="./dashboard.html">
                    <i className="material-icons">dashboard</i>
                    <p>Dashboard</p>
                  </a>
                </li>
                <li className="nav-item ">
                  <a className="nav-link" href="./user.html">
                    <i className="material-icons">person</i>
                    <p>User Profile</p>
                  </a>
                </li>
                <li className="nav-item ">
                  <a className="nav-link" href="./tables.html">
                    <i className="material-icons">content_paste</i>
                    <p>Table List</p>
                  </a>
                </li>
                <li className="nav-item ">
                  <a className="nav-link" href="./typography.html">
                    <i className="material-icons">library_books</i>
                    <p>Typography</p>
                  </a>
                </li>
                <li className="nav-item ">
                  <a className="nav-link" href="./icons.html">
                    <i className="material-icons">bubble_chart</i>
                    <p>Icons</p>
                  </a>
                </li>
                <li className="nav-item ">
                  <a className="nav-link" href="./map.html">
                    <i className="material-icons">location_ons</i>
                    <p>Maps</p>
                  </a>
                </li>
                <li className="nav-item ">
                  <a className="nav-link" href="./notifications.html">
                    <i className="material-icons">notifications</i>
                    <p>Notifications</p>
                  </a>
                </li>
                <li className="nav-item ">
                  <a className="nav-link" href="./rtl.html">
                    <i className="material-icons">language</i>
                    <p>RTL Support</p>
                  </a>
                </li>
                <li className="nav-item active-pro ">
                  <a className="nav-link" href="./upgrade.html">
                    <i className="material-icons">unarchive</i>
                    <p>Upgrade to PRO</p>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="main-panel">
            {/* Navbar */}
            <nav className="navbar navbar-expand-lg navbar-transparent navbar-absolute fixed-top ">
              <div className="container-fluid">
                <div className="navbar-wrapper">
                  <a className="navbar-brand" href="javascript:;">
                    Dashboard
                  </a>
                </div>
                <button
                  className="navbar-toggler"
                  type="button"
                  data-toggle="collapse"
                  aria-controls="navigation-index"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="sr-only">Toggle navigation</span>
                  <span className="navbar-toggler-icon icon-bar" />
                  <span className="navbar-toggler-icon icon-bar" />
                  <span className="navbar-toggler-icon icon-bar" />
                </button>
                <div className="collapse navbar-collapse justify-content-end">
                  <form className="navbar-form">
                    <div className="input-group no-border">
                      <input
                        type="text"
                        defaultValue
                        className="form-control"
                        placeholder="Search..."
                      />
                      <button
                        type="submit"
                        className="btn btn-white btn-round btn-just-icon"
                      >
                        <i className="material-icons">search</i>
                        <div className="ripple-container" />
                      </button>
                    </div>
                  </form>
                  <ul className="navbar-nav">
                    <li className="nav-item">
                      <a className="nav-link" href="javascript:;">
                        <i className="material-icons">dashboard</i>
                        <p className="d-lg-none d-md-block">Stats</p>
                      </a>
                    </li>
                    <li className="nav-item dropdown">
                      <a
                        className="nav-link"
                        href="http://example.com"
                        id="navbarDropdownMenuLink"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        <i className="material-icons">notifications</i>
                        <span className="notification">5</span>
                        <p className="d-lg-none d-md-block">Some Actions</p>
                      </a>
                      <div
                        className="dropdown-menu dropdown-menu-right"
                        aria-labelledby="navbarDropdownMenuLink"
                      >
                        <a className="dropdown-item" href="#">
                          Mike John responded to your email
                        </a>
                        <a className="dropdown-item" href="#">
                          You have 5 new tasks
                        </a>
                        <a className="dropdown-item" href="#">
                          You're now friend with Andrew
                        </a>
                        <a className="dropdown-item" href="#">
                          Another Notification
                        </a>
                        <a className="dropdown-item" href="#">
                          Another One
                        </a>
                      </div>
                    </li>
                    <li className="nav-item dropdown">
                      <a
                        className="nav-link"
                        href="javascript:;"
                        id="navbarDropdownProfile"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        <i className="material-icons">person</i>
                        <p className="d-lg-none d-md-block">Account</p>
                      </a>
                      <div
                        className="dropdown-menu dropdown-menu-right"
                        aria-labelledby="navbarDropdownProfile"
                      >
                        <a className="dropdown-item" href="#">
                          Profile
                        </a>
                        <a className="dropdown-item" href="#">
                          Settings
                        </a>
                        <div className="dropdown-divider" />
                        <a className="dropdown-item" href="#">
                          Log out
                        </a>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
            {/* End Navbar */}
            <div className="content">
              <div className="container-fluid">{this.props.children}</div>
            </div>
            <footer className="footer">
              <div className="container-fluid">
                <nav className="float-left">
                  <ul>
                    <li>
                      <a href="https://www.creative-tim.com">Creative Tim</a>
                    </li>
                    <li>
                      <a href="https://creative-tim.com/presentation">
                        About Us
                      </a>
                    </li>
                    <li>
                      <a href="http://blog.creative-tim.com">Blog</a>
                    </li>
                    <li>
                      <a href="https://www.creative-tim.com/license">
                        Licenses
                      </a>
                    </li>
                  </ul>
                </nav>
                <div className="copyright float-right">
                  © , made with <i className="material-icons">favorite</i> by
                  <a href="https://www.creative-tim.com" target="_blank">
                    Creative Tim
                  </a>{" "}
                  for a better web.
                </div>
              </div>
            </footer>
          </div>
        </div>
      </>
    );
  }
}

export default Layout;
