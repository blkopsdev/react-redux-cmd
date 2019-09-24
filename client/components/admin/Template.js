import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class componentName extends Component {
  render() {
    return (
      <div>
        <main className="l-main">
          <div className="content-wrapper content-wrapper--with-bg">
            <div className="home-content">
              <div className="title">
                <h2>Templates</h2>
                <Link to="/admin/template">ADD NEW</Link>
              </div>
              <div className="row">
                <div className="col-md-8">
                  <div className="page-table">
                    <h3>Templates</h3>
                    <table className="table">
                      <thead className="thead-light">
                        <tr>
                          <th scope="col">NAME</th>
                          <th scope="col"></th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>Home page</td>
                          <td><Link to="/admin/template">Edit</Link></td>
                        </tr>
                        <tr>
                          <td>Content 1 column</td>
                          <td><Link to="/admin/template">Edit</Link></td>                          
                        </tr>
                        <tr>
                          <td>Content 2 column</td>
                          <td><Link to="/admin/template">Edit</Link></td>                          
                        </tr>
                        <tr>
                          <td>Info page</td>
                          <td><Link to="/admin/template">Edit</Link></td>                          
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    )
  }
}
