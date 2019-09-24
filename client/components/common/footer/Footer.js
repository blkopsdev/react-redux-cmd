import React, { Component } from 'react'

export default class Footer extends Component {
  render() {
    return (
      <div>
        <footer id="footer-section" class="footer-section clearfix">

          <div class="footer-content bg-default-orange sec-ptb-40 clearfix">
            <div class="container">
              <div class="row">

                <div class="col-lg-2 col-md-12 col-sm-12">
                  <div class="brand-logo clearfix">
                    <a href="#!" class="brand-link float-left">
                      <img src="assets/images/logo/logo_1.png" alt="logo_not_found"/>
                    </a>
                  </div>
                </div>

                <div class="col-lg-7 col-md-12 col-sm-12">
                  <div class="row">

                    <div class="col-lg-4 col-md-4">
                      <div class="useful-links ul-li-block clearfix">
                        <h3 class="item-title">Belangrijk</h3>
                        <ul class="clearfix">
                          <li><a href="#!">Vind vluchten</a></li>
                          <li><a href="#!">Mijn zoekopdrachten</a></li>
                          <li><a href="#!">Mijn account</a></li>
                          <li><a href="#!">Mijn betalingen</a></li>
                        </ul>
                      </div>
                    </div>

                    <div class="col-lg-4 col-md-4">
                      <div class="useful-links ul-li-block clearfix">
                        <h3 class="item-title">Milieu</h3>
                        <ul class="clearfix">
                          <li><a href="#!">Vlieg bewust</a></li>
                          <li><a href="#!">Onze belofte</a></li>
                        </ul>
                      </div>
                    </div>

                    <div class="col-lg-4 col-md-4">
                      <div class="useful-links ul-li-block clearfix">
                        <h3 class="item-title">Betalen</h3>
                        <ul class="clearfix">
                          <li><a href="#!">Automische incasso</a></li>
                          <li><a href="#!">Bankrekening wijzigen</a></li>
                        </ul>
                      </div>
                    </div>

                  </div>
                </div>

                <div class="col-lg-3 col-md-12 col-sm-12">
                  <div class="contact-info ul-li-block clearfix">
                    <h3 class="item-title">Hulp nodig?</h3>
                    <ul class="clearfix">
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

          <div class="footer-bottom clearfix">
            <div class="container">
              <a href="#!" class="other-brand float-right">
                <img src="assets/images/brand-logo.jpg" alt="image_not_found"/>
              </a>
            </div>
          </div>

          </footer>
      </div>
    )
  }
}
