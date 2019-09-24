import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Header extends Component {
  menuChangeActive(el) {
    const $ = window.$
    var hasSubmenu = $(el).hasClass("has-submenu");
    $(global.menuClass + " .is-active").removeClass("is-active");
    $(el).addClass("is-active");

    if (hasSubmenu) {
      $(el).find("ul").slideToggle();
    }
  };
  
  componentDidMount() {
    window.$(".js-menu li").on("click", e => {
        this.menuChangeActive(e.currentTarget);
    });
  }

  render() {
    return (
      <div>
        <div className="sidebar-is-expanded">


          {/* Header section start */}
          <header className="l-header">
            <div className="l-header__inner clearfix">
              <div className="c-header-icon js-hamburger">
                <div className="hamburger-toggle"><span className="bar-top"></span><span className="bar-mid"></span><span className="bar-bot"></span></div>
              </div>
              <div className="header-icons-group">
                <div className="c-header-icon basket"><i className="fa fa-shopping-basket"></i></div>
                <div className="c-header-icon basket"><i className="fas fa-comments"></i></div>
                <div className="c-header-icon basket"><i className="fas fa-bell"></i></div>
                <div className="c-header-icon">
                  <a href="#"> John Due <i className="fas fa-angle-down"></i> </a>
                </div>
                <div className="c-header-icon">
                  <img src="adminAssets/images/avatar.png" alt=""/>
                </div>
              </div>
            </div>
          </header>
          {/* Header section end */}

          {/* Sidebar section start */}
          <div className="l-sidebar">
            <div className="logo">
              <div className="logo__txt">Admin
                <p>Welkom, Harm</p>
              </div>
            </div>
            <div className="l-sidebar__content">
              <nav className="c-menu js-menu">
                <ul className="u-list">
                  <li className="c-menu__item  is-active">
                    <div className="c-menu__item__inner">
                      <i className="fa fa-home"></i><span>Home</span>
                    </div> 
                  </li>
                  <li className="c-menu__item">
                    <div className="c-menu__item__inner">
                      <i className="far fa-chart-bar"></i><span>Dashboard</span>
                    </div> 
                  </li>
                  <li className="c-menu__item has-submenu" id="has-submenu">
                    <div className="c-menu__item__inner"><i className="fas fa-sort-amount-up"></i>
                      <div className="c-menu-item__title"><span>Content Management</span></div>
                      <div className="c-menu-item__expand js-expand-submenu"><i className="fa fa-angle-down"></i></div>
                    </div>
                    <ul className="c-menu__submenu u-list">
                      <Link to="/admin/pages">
                        <li>Pages</li>
                      </Link>
                      <Link to="/admin/categories">
                        <li>Categories</li>
                      </Link>
                      <Link to="/admin/template">
                        <li>Templates</li>
                      </Link>
                    </ul>
                  </li>
                  <li className="c-menu__item">
                    <div className="c-menu__item__inner">
                      <i className="fab fa-wpforms"></i><span>Vluchten</span>
                    </div> 
                  </li>
                  <li className="c-menu__item">
                    <div className="c-menu__item__inner">
                      <i className="fas fa-receipt"></i><span>Betalingen</span>
                    </div> 
                  </li>
                  <li className="c-menu__item">
                    <div className="c-menu__item__inner">
                      <i className="far fa-user"></i><span>Klanten</span>
                    </div> 
                  </li>
                  <li className="c-menu__item">
                    <div className="c-menu__item__inner">
                      <i className="fa fa-calendar-alt"></i><span>Kalender</span>
                    </div> 
                  </li>
                  <li className="c-menu__item">
                    <div className="c-menu__item__inner">
                      <i className="fa fa-chart-line"></i><span>Help Center</span>
                    </div> 
                  </li>
                  <li className="c-menu__item">
                    <div className="c-menu__item__inner">
                      <i className="fa fa-cog"></i><span>Instellingen</span>
                    </div> 
                  </li>
                
                </ul>
              </nav>
            </div>
          </div>
          {/* Sidebar section end */}

        </div>
      </div>
    )
  }
}
