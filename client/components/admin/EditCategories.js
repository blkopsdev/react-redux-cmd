import React, { Component } from 'react'

export default class EditCategories extends Component {
  render() {
    return (
      <div>
        <main class="l-main">
          <div class="content-wrapper content-wrapper--with-bg">
            <div class="home-content">
              <div class="row">
                <div class="col-md-12">
                  <div class="title">
                    <h2>Category &#62 Blog</h2>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-md-8">
                  <div class="cms-form">
                    <div class="row">
                      <div class="col-md-6">
                        <form>
                          <div class="form-group row">
                            <label htmlFor="inputPassword" class="col-sm-4 col-form-label">Category name</label>
                            <div class="col-sm-8">
                              <input type="text" class="form-control" id="" placeholder="Blog"/>
                            </div>
                          </div>
                          <div class="form-group row">
                            <label htmlFor="inputPassword" class="col-sm-4 col-form-label">URL</label>
                            <div class="col-sm-8">
                              <input type="text" class="form-control" id="" placeholder="/Blog"/>
                            </div>
                          </div>
                          <div class="form-group row">
                            <label htmlFor="inputPassword" class="col-sm-4 col-form-label">Parent</label>
                            <div class="col-sm-8">

                              <div class="form-group">
                                <select class="form-control" id="sel4">
                                  <option>None</option>
                                  <option>2</option>
                                  <option>3</option>
                                  <option>4</option>
                                </select>
                              </div>
                            </div>
                          </div>
                          <div class="form-group row">
                            <label htmlFor="inputPassword" class="col-sm-4 col-form-label">Status</label>
                            <div class="col-sm-8">

                              <div class="form-group">
                                <select class="form-control" id="sel3">
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
                  <a href="" class="save-btn">Save</a>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    )
  }
}
