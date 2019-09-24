import React, { Component } from 'react'

export default class EditPages extends Component {
  render() {
    return (
      <div>
        <main className="l-main">
          <div className="content-wrapper content-wrapper--with-bg">
            <div className="home-content">
              <div className="row">
                <div className="col-md-12">
                  <div className="title">
                    <h2>Dummy page title</h2>
                  </div>
                </div>
              </div>
              <div className="row">
                  <div className="col-md-8">
                    <div className="page-tab">
                      <ul className="nav nav-tabs" id="myTab" role="tablist">
                        <li className="nav-item">
                          <a className="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">GENERAL</a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false">SEO</a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link" id="contact-tab" data-toggle="tab" href="#contact" role="tab" aria-controls="contact" aria-selected="false">DESIGN</a>
                        </li>
                      </ul>
                    </div>
                    <div className="tab-content" id="myTabContent">
                      <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                        <div className="general-form cms-form">
                          <h3>General</h3>
                          <div className="row">
                            <div className="col-md-6">
                              <form>
                                <div className="form-group row">
                                  <label htmlFor="inputPassword" className="col-sm-4 col-form-label">Category name</label>
                                  <div className="col-sm-8">
                                    <input type="text" className="form-control" id="" placeholder="Blog"/>
                                  </div>
                                </div>
                                <div className="form-group row">
                                  <label htmlFor="inputPassword" className="col-sm-4 col-form-label">URL</label>
                                  <div className="col-sm-8">
                                    <input type="text" className="form-control" id="" placeholder="/Blog"/>
                                  </div>
                                </div>
                                <div className="form-group row">
                                  <label htmlFor="inputPassword" className="col-sm-4 col-form-label">Parent</label>
                                  <div className="col-sm-8">

                                    <div className="form-group">
                                      <select className="form-control" id="sel8">
                                        <option>None</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                      </select>
                                    </div>
                                  </div>
                                </div>
                                <div className="form-group row">
                                  <label htmlFor="inputPassword" className="col-sm-4 col-form-label">Status</label>
                                  <div className="col-sm-8">

                                    <div className="form-group">
                                      <select className="form-control" id="sel7">
                                        <option>Active</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                      </select>
                                    </div>
                                  </div>
                                </div>
                              </form>
                            </div>
                            <div className="col-md-6">
                              <form>
                                <div className="form-group row">
                                  <label htmlFor="inputPassword" className="col-sm-4 col-form-label">Category name</label>
                                  <div className="col-sm-8">
                                    <input type="text" className="form-control" id="" placeholder="Blog"/>
                                  </div>
                                </div>
                                <div className="form-group row">
                                  <label htmlFor="inputPassword" className="col-sm-4 col-form-label">URL</label>
                                  <div className="col-sm-8">
                                    <input type="text" className="form-control" id="" placeholder="/Blog"/>
                                  </div>
                                </div>
                                <div className="form-group row">
                                  <label htmlFor="inputPassword" className="col-sm-4 col-form-label">Parent</label>
                                  <div className="col-sm-8">

                                    <div className="form-group">
                                      <select className="form-control" id="sel5">
                                        <option>None</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                      </select>
                                    </div>
                                  </div>
                                </div>
                                <div className="form-group row">
                                  <label htmlFor="inputPassword" className="col-sm-4 col-form-label">Status</label>
                                  <div className="col-sm-8">

                                    <div className="form-group">
                                      <select className="form-control" id="sel6">
                                        <option>Active</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                      </select>
                                    </div>
                                  </div>
                                </div>
                              </form>
                            </div>
                          </div>
                        </div>
                        <div className="cms-form">
                          <h3>Coments</h3>
                          <div className="form-group">
                            <textarea className="form-control" rows="12" id="comment" placeholder=""/>
                          </div>
                          <br/>
                          <div className="row">
                            <div className="col-md-6">
                              <div className="form-group row">
                                <label htmlFor="inputPassword" className="col-sm-3 col-form-label">Template</label>
                                <div className="col-sm-9">
                                  <input type="text" className="form-control" id="" placeholder="1 column" />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                        <div className="cms-form general-form">
                          <h3>SEO</h3>
                          <div className="row">
                            <div className="col-md-6">
                              <form>
                                <div className="form-group row">
                                  <label htmlFor="inputPassword" className="col-sm-3 col-form-label">Category name</label>
                                  <div className="col-sm-9">
                                    <input type="text" className="form-control" id="" placeholder="Blog"/>
                                  </div>
                                </div>
                                <div className="form-group row">
                                  <label htmlFor="inputPassword" className="col-sm-3 col-form-label">Meta desc</label>
                                  <div className="col-sm-9">
                                    <textarea className="form-control" rows="5" id="comment2" placeholder=""/>
                                  </div>
                                </div>
                                <div className="form-group row">
                                  <label htmlFor="inputPassword" className="col-sm-3 col-form-label">Status</label>
                                  <div className="col-sm-9">

                                    <div className="form-group">
                                      <select className="form-control" id="sel9">
                                        <option>Active</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                      </select>
                                    </div>
                                  </div>
                                </div>
                              </form>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">
                        <div className="cms-form general-form">
                          <h3>SEO</h3>
                          <div className="row">
                            <div className="col-md-6">
                              <form>
                                <div className="form-group row">
                                  <label htmlFor="inputPassword" className="col-sm-3 col-form-label">Header Image</label>
                                  <div className="col-sm-9">
                                    <input type="file" className="form-control" id="" placeholder="Blog"/>
                                  </div>
                                </div>
                              </form>
                            </div>
                          </div>
                        </div>
                      </div>
                  </div>

                  <a href="" className="save-btn">Save</a>
                </div>
              </div>
            </div>
          </div>         
        </main>
      </div>
    )
  }
}
