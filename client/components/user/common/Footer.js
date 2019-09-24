import React, { Component } from 'react'

export default class Footer extends Component {
  render() {
    return (
      <div>
        <footer id="footer-section" className="footer-section clearfix">

          <div className="footer-content bg-default-orange sec-ptb-40 clearfix">
            <div className="container">
              <div className="row">

                <div className="col-lg-2 col-md-12 col-sm-12">
                  <div className="brand-logo clearfix">
                    <a href="#!" className="brand-link float-left">
                      <img src="assets/images/logo/logo_1.png" alt="logo_not_found"/>
                    </a>
                  </div>
                </div>

                <div className="col-lg-7 col-md-12 col-sm-12">
                  <div className="row">

                    <div className="col-lg-4 col-md-4">
                      <div className="useful-links ul-li-block clearfix">
                        <h3 className="item-title">Belangrijk</h3>
                        <ul className="clearfix">
                          <li><a href="#!">Vind vluchten</a></li>
                          <li><a href="#!">Mijn zoekopdrachten</a></li>
                          <li><a href="#!">Mijn account</a></li>
                          <li><a href="#!">Mijn betalingen</a></li>
                        </ul>
                      </div>
                    </div>

                    <div className="col-lg-4 col-md-4">
                      <div className="useful-links ul-li-block clearfix">
                        <h3 className="item-title">Milieu</h3>
                        <ul className="clearfix">
                          <li><a href="#!">Vlieg bewust</a></li>
                          <li><a href="#!">Onze belofte</a></li>
                        </ul>
                      </div>
                    </div>

                    <div className="col-lg-4 col-md-4">
                      <div className="useful-links ul-li-block clearfix">
                        <h3 className="item-title">Betalen</h3>
                        <ul className="clearfix">
                          <li><a href="#!">Automische incasso</a></li>
                          <li><a href="#!">Bankrekening wijzigen</a></li>
                        </ul>
                      </div>
                    </div>

                  </div>
                </div>

                <div className="col-lg-3 col-md-12 col-sm-12">
                  <div className="contact-info ul-li-block clearfix">
                    <h3 className="item-title">Hulp nodig?</h3>
                    <ul className="clearfix">
                      <li><a href="#!">Bel 0800-3434</a></li>
                      <li><a href="#!">Veelgestelde vragen</a></li>
                      <li><a href="#!">Contact</a></li>
                      <li><a href="#!">Live chat</a></li>
                    </ul>
                  </div>
                </div>

              </div>
            </div>
          </div>

          <div className="footer-bottom clearfix">
            <div className="container">
              <a href="#!" className="other-brand float-right">
                <img src="assets/images/brand-logo.jpg" alt="image_not_found"/>
              </a>
            </div>
          </div>

          </footer>
      </div>
    )
  }
}
