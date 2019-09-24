import React, { Component } from 'react'

export default class Header extends Component {
  render() {
    return (
      <div>
        <header id="header-section" className="header-section sticky-header clearfix">
          <div className="container">
            <div className="row">

            <div className="col-lg-3 col-md-4 col-sm-12">
              <div className="brand-logo clearfix">
              <a href="#!" className="brand-link float-left">
                <img src="images/logo/logo_1.png" alt="logo_not_found"/>
              </a>
              <button type="button" id="sidebar-collapse" className="mobile-menu-btn float-right">
                <i className="fal fa-bars"></i>
              </button>
              </div>
            </div>

            <div className="col-lg-9 col-md-8 col-sm-12">
              <div className="main-menubar ul-li-right clearfix">
              <ul className="clearfix">
                <li className="active"><a href="#!">Vluchten</a></li>
                <li><a href="#!">Opgeslagen vluchten</a></li>
                <li><a href="#!">Mijn account</a></li>
              </ul>
              </div>
            </div>

            </div>
          </div>
        </header>

        <div className="sidebar-menu-wrapper">
          <div id="sidebar-menu" className="sidebar-menu">

            <div className="dismiss text-right mb-60 clearfix">
              <span className="close-btn"><i className="fal fa-times"></i></span>
            </div>

            <div className="menu-list mb-60 ul-li-block clearfix">
              <ul className="clearfix">
                <li className="active"><a href="#!">Vluchten</a></li>
                <li><a href="#!">Opgeslagen vluchten</a></li>
                <li><a href="#!">Mijn account</a></li>
              </ul>
            </div>

          </div>
          <div className="overlay"></div>
        </div>
      </div>
    )
  }
}
