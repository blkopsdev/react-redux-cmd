import React, { Component } from 'react'

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      areaInput: 'Amsterdam (AMS)',
      cityName: 'Los Angeles (LAX)',
      date1: '10/07',
      date2: '18/07',
      user: '1 volwassene'
    }
  }

  componentDidMount() {
    window.$('#testimonial-carousel').owlCarousel({
      nav:true,
      loop:true,
      margin:30,
      dots:false,
      // autoplay:true,
      smartSpeed:1000,
      // autoplayTimeout:6000,
      // autoplayHoverPause:true,
      responsive:{
        0:{
          items:1
        },
        600:{
          items:2
        },
        1000:{
          items:3
        }
      }
    });

    // var $grid = window.$('#grid').imagesLoaded( function() {
    //   $grid.masonry({
    //     itemSelector: '.grid-item',
    //     percentPosition: true,
    //     columnWidth: '.grid-sizer'
    //   }); 
    // });
   

  }
  
  
  handleChangeAreaInput = (e) => {
    this.setState({
      areaInput: e.target.value
    })
  }

  handleChangeCityName = (e) => {
    this.setState({
      cityName: e.target.value
    })
  }

  handleChangeDate1 = (e) => {
    this.setState({
      date1: e.target.value
    })
  }

  handleChangeDate2 = (e) => {
    this.setState({
      date2: e.target.value
    })
  }

  handleChangeUser = (e) => {
    this.setState({
      date2: e.target.value
    })
  }

  render() {
    return (
      <div>
        
        {/* banner section start */}
        <section id="banner-section" className="banner-section clearfix">
          <div className="container">

            <h2 className="title-text mb-60">
              This is the dummy header text
            </h2>

            <div className="row jistify-content-lg-start justify-content-md-center">
              <div className="col-lg-9 col-md-8 col-sm-12">
                <form action="#">
                  <div className="input-group ul-li clearfix">
                    <ul className="clearfix">
                      <li>
                        <div className="form-item">
                          <input 
                            id="area-input" 
                            type="text" 
                            name="area" 
                            placeholder="area name" 
                            value={this.state.areaInput}
                            onChange={this.handleChangeAreaInput}
                            />
                          <label htmlFor="area-input"><i className="fas fa-map-marker-alt"></i></label>
                        </div>
                      </li>
                      <li>
                        <div className="form-item">
                          <input 
                            id="city-input" 
                            type="text" 
                            name="city" 
                            placeholder="city name" 
                            value={this.state.cityName}
                            onChange={this.handleChangeCityName}
                            />
                          <label htmlFor="city-input"><i className="fas fa-map-marker-alt"></i></label>
                        </div>
                      </li>
                      <li>
                        <span className="icon">
                          <i className="fal fa-repeat"></i>
                        </span>
                      </li>
                      <li>
                        <div className="form-item small-item">
                          <input 
                            id="date-input-1" 
                            type="text" 
                            name="date"
                            placeholder="date" 
                            value={this.state.date1}
                            onChange={this.handleChangeDate1}
                            />
                          <label htmlFor="date-input-1"><i className="far fa-calendar"></i></label>
                        </div>
                      </li>
                      <li>
                        <div className="form-item small-item">
                          <input 
                            id="date-input-2" 
                            type="text" 
                            name="date" 
                            placeholder="date" 
                            value={this.state.date2}
                            onChange={this.handleChangeDate2}
                            />
                          <label htmlFor="date-input-2"><i className="far fa-calendar"></i></label>
                        </div>
                      </li>
                      <li>
                        <div className="form-item">
                          <input 
                            id="area-input" 
                            type="text" 
                            name="user" 
                            placeholder="user" 
                            value={this.state.user}
                            onChange={this.handleChangeUser}
                            />
                          <label htmlFor="area-input"><i className="fas fa-user"></i></label>
                        </div>
                      </li>
                    </ul>
                  </div>
                </form>
              </div>
              <div className="col-lg-3 col-md-8 col-sm-12">
                <button type="submit" className="custom-btn">Zoeken</button>
              </div>
            </div>

          </div>
        </section>
        {/* banner section end */}

        {/* usp-section start */}
        <section id="usp-section" className="usp-section sec-ptb-40 clearfix">
          <div className="container">
            <div className="row">

              <div className="col-lg-3 col-md-6 col-sm-12">
                <div className="usp-item">
                  <p className="mb-0">
                    <span className="icon"><i className="fas fa-check"></i></span>
                    Geen extra kosten
                  </p>
                </div>
              </div>

              <div className="col-lg-3 col-md-6 col-sm-12">
                <div className="usp-item">
                  <p className="mb-0">
                    <span className="icon"><i className="fas fa-check"></i></span>
                    Zonder risico, zonder addertjes
                  </p>
                </div>
              </div>

              <div className="col-lg-3 col-md-6 col-sm-12">
                <div className="usp-item">
                  <p className="mb-0">
                    <span className="icon"><i className="fas fa-check"></i></span>
                    Alle bestemmingen wereldwijd
                  </p>
                </div>
              </div>

              <div className="col-lg-3 col-md-6 col-sm-12">
                <div className="usp-item">
                  <p className="mb-0">
                    <span className="icon"><i className="fas fa-check"></i></span>
                    9.1 op Trustpilot
                  </p>
                </div>
              </div>

            </div>
          </div>
        </section>
        {/* usp-section end */}


        {/* howitwork section start */}
        <section id="howitwork-section" className="howitwork-section sec-ptb-60 bg-light-gray clearfix">
          <div className="container">

            <div className="section-title text-center mb-30">
              <h2 className="title-text mb-0">Hoe werkt het?</h2>
            </div>

            <div className="row">

              <div className="col-lg-4 col-md-4 col-sm-12">
                <div className="howitwork-item text-center">
                  <div className="item-image">
                    <img src="images/howitwork/svg/step1.svg" alt="image_not_found"/>
                  </div>
                  <div className="item-content">
                    <h3 className="item-title">Lorem step</h3>
                    <p className="mb-0">
                      Lorem ipsum dolor sit amet text
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-4 col-sm-12">
                <div className="howitwork-item text-center">
                  <div className="item-image">
                    <img src="images/howitwork/svg/step2.svg" alt="image_not_found"/>
                  </div>
                  <div className="item-content">
                    <h3 className="item-title">Lorem step</h3>
                    <p className="mb-0">
                      Lorem ipsum dolor sit amet text
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-4 col-sm-12">
                <div className="howitwork-item text-center">
                  <div className="item-image">
                    <img src="images/howitwork/svg/step3.svg" alt="image_not_found"/>
                  </div>
                  <div className="item-content">
                    <h3 className="item-title">Lorem step</h3>
                    <p className="mb-0">
                      Lorem ipsum dolor sit amet text
                    </p>
                  </div>
                </div>
              </div>

            </div>

          </div>
        </section>
        {/* howitwork section end */}



        {/* testimonial section start */}
        <section id="testimonial-section" className="testimonial-section sec-ptb-60 bg-light-orange clearfix">
          <div className="container">

            <div className="section-title text-center mb-60">
              <h2 className="title-text mb-0">Wat onze klanten zeggen</h2>
            </div>

            <div id="testimonial-carousel" className="testimonial-carousel owl-carousel owl-theme">
              <div className="item">
                <h3 className="hero-name">“Gewoonweg super”</h3>
                <span className="post-time float-right">2 dagen geleden</span>
                <p className="mb-0">
                  Super concept, ben dit jaar al
                  2 keer naar mijn zus in Los Angeles
                  gereisd zonder in één keer een groot
                  bedrag te betalen
                </p>
              </div>

              <div className="item">
                <h3 className="hero-name">“Gewoonweg super”</h3>
                <span className="post-time float-right">2 dagen geleden</span>
                <p className="mb-0">
                  Super concept, ben dit jaar al
                  2 keer naar mijn zus in Los Angeles
                  gereisd zonder in één keer een groot
                  bedrag te betalen
                </p>
              </div>

              <div className="item">
                <h3 className="hero-name">“Gewoonweg super”</h3>
                <span className="post-time float-right">2 dagen geleden</span>
                <p className="mb-0">
                  Super concept, ben dit jaar al
                  2 keer naar mijn zus in Los Angeles
                  gereisd zonder in één keer een groot
                  bedrag te betalen
                </p>
              </div>

              <div className="item">
                <h3 className="hero-name">“Gewoonweg super”</h3>
                <span className="post-time float-right">2 dagen geleden</span>
                <p className="mb-0">
                  Super concept, ben dit jaar al
                  2 keer naar mijn zus in Los Angeles
                  gereisd zonder in één keer een groot
                  bedrag te betalen
                </p>
              </div>

              <div className="item">
                <h3 className="hero-name">“Gewoonweg super”</h3>
                <span className="post-time float-right">2 dagen geleden</span>
                <p className="mb-0">
                  Super concept, ben dit jaar al
                  2 keer naar mijn zus in Los Angeles
                  gereisd zonder in één keer een groot
                  bedrag te betalen
                </p>
              </div>
            </div>

          </div>
        </section>
        {/* testimonial secion end */}


        {/* portfolio secion start */}
        <section id="protfolio-section" className="protfolio-section sec-ptb-60 clearfix">
          <div className="container">

            <div className="section-title text-center mb-90">
              <h2 className="title-text mb-0">Populaire bestemmingen</h2>
            </div>

            <div className="grid" id="grid">
              <div className="grid-sizer"></div>

              <div className="grid-item">
                <div className="image-container">
                  <img src="images/protfolio/img_1.jpg" alt="image_not_found"/>
                  <a href="#!" className="details-link">
                    <h3 className="area-name mb-0">New York</h3>
                    <span className="item-content">
                      <span className="post-time">5 dagen</span>
                      <h3 className="item-title mb-0">Vanaf €22 per maand</h3>
                    </span>
                  </a>
                </div>
              </div>

              <div className="grid-item">
                <div className="image-container">
                  <img src="images/protfolio/img_2.jpg" alt="image_not_found"/>
                  <a href="#!" className="details-link">
                    <h3 className="area-name mb-0">Bali</h3>
                    <span className="item-content">
                      <span className="post-time">10 dagen</span>
                      <h3 className="item-title mb-0">Vanaf €68 per maand</h3>
                    </span>
                  </a>
                </div>
              </div>

              <div className="grid-item">
                <div className="image-container">
                  <img src="images/protfolio/img_3.jpg" alt="image_not_found"/>
                  <a href="#!" className="details-link">
                    <h3 className="area-name mb-0">Los Angeles</h3>
                    <span className="item-content">
                      <span className="post-time">10 dagen</span>
                      <h3 className="item-title mb-0">Vanaf €34 per maand</h3>
                    </span>
                  </a>
                </div>
              </div>

              <div className="grid-item">
                <div className="image-container">
                  <img src="images/protfolio/img_4.jpg" alt="image_not_found"/>
                  <a href="#!" className="details-link">
                    <h3 className="area-name mb-0">London</h3>
                    <span className="item-content">
                      <span className="post-time">4 dagen</span>
                      <h3 className="item-title mb-0">Vanaf €8 per maand</h3>
                    </span>
                  </a>
                </div>
              </div>

              <div className="grid-item">
                <div className="image-container">
                  <img src="images/protfolio/img_5.jpg" alt="image_not_found"/>
                  <a href="#!" className="details-link">
                    <h3 className="area-name mb-0">Split</h3>
                    <span className="item-content">
                      <span className="post-time">5 dagen</span>
                      <h3 className="item-title mb-0">Vanaf €22 per maand</h3>
                    </span>
                  </a>
                </div>
              </div>

              <div className="grid-item">
                <div className="image-container">
                  <img src="images/protfolio/img_6.jpg" alt="image_not_found"/>
                  <a href="#!" className="details-link">
                    <h3 className="area-name mb-0">Sofia</h3>
                    <span className="item-content">
                      <span className="post-time">10 dagen</span>
                      <h3 className="item-title mb-0">Vanaf €68 per maand</h3>
                    </span>
                  </a>
                </div>
              </div>

              <div className="grid-item">
                <div className="image-container">
                  <img src="images/protfolio/img_7.jpg" alt="image_not_found"/>
                  <a href="#!" className="details-link">
                    <h3 className="area-name mb-0">Barcelona</h3>
                    <span className="item-content">
                      <span className="post-time">5 dagen</span>
                      <h3 className="item-title mb-0">Vanaf €5 per maand</h3>
                    </span>
                  </a>
                </div>
              </div>

              <div className="grid-item">
                <div className="image-container">
                  <img src="images/protfolio/img_8.jpg" alt="image_not_found"/>
                  <a href="#!" className="details-link">
                    <h3 className="area-name mb-0">Mexico</h3>
                    <span className="item-content">
                      <span className="post-time">16 dagen</span>
                      <h3 className="item-title mb-0">Vanaf €68 per maand</h3>
                    </span>
                  </a>
                </div>
              </div>
            </div>

          </div>
        </section>
        {/* portfolio sectin end */}
        
      </div>
    )
  }
}
