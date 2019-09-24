import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Pages extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <main className="l-main">
          <div className="content-wrapper content-wrapper--with-bg">
            <div className="home-content">
              <div className="title">
                <h2>Pages</h2>
                <Link to='/admin/pages/edit'>ADD NEW</Link>
              </div>
              <div className="row">
                <div className="col-md-8">
                  <div className="page-table">
                    <h3>Pages</h3>
                    <table className="table">
                      <thead className="thead-light">
                        <tr>
                          <th scope="col">NAME</th>
                          <th scope="col">URL</th>
                          <th scope="col">STATUS</th>
                          <th scope="col">CATEGORY</th>
                          <th scope="col"></th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>This is a dummy title</td>
                          <td>/dummy.html</td>
                          <td>ACTIVE</td>
                          <td>Info &#62 Contact</td>
                          <td><Link to='/admin/pages/edit'>Edit</Link></td>
                        </tr>
                        <tr>
                          <td>This is a dummy title</td>
                          <td>/dummy.html</td>
                          <td>ACTIVE</td>
                          <td>Info &#62 Contact</td>
                          <td><Link to='/admin/pages/edit'>Edit</Link></td>                          
                        </tr>
                        <tr>
                          <td>This is a dummy title</td>
                          <td>/dummy.html</td>
                          <td>ACTIVE</td>
                          <td>Info &#62 Contact</td>
                          <td><Link to='/admin/pages/edit'>Edit</Link></td>                          
                        </tr>
                        <tr>
                          <td>This is a dummy title</td>
                          <td>/dummy.html</td>
                          <td>ACTIVE</td>
                          <td>Info &#62 Contact</td>
                          <td><Link to='/admin/pages/edit'>Edit</Link></td>                          
                        </tr>
                        <tr>
                          <td>This is a dummy title</td>
                          <td>/dummy.html</td>
                          <td>ACTIVE</td>
                          <td>Info &#62 Contact</td>
                          <td><Link to='/admin/pages/edit'>Edit</Link></td>                          
                        </tr>
                        <tr>
                          <td>This is a dummy title</td>
                          <td>/dummy.html</td>
                          <td>ACTIVE</td>
                          <td>Info &#62 Contact</td>
                          <td><Link to='/admin/pages/edit'>Edit</Link></td>                          
                        </tr>
                        <tr>
                          <td>This is a dummy title</td>
                          <td>/dummy.html</td>
                          <td>ACTIVE</td>
                          <td>Info &#62 Contact</td>
                          <td><Link to='/admin/pages/edit'>Edit</Link></td>                          
                        </tr>
                        <tr>
                          <td>This is a dummy title</td>
                          <td>/dummy.html</td>
                          <td>ACTIVE</td>
                          <td>Info &#62 Contact</td>
                          <td><Link to='/admin/pages/edit'>Edit</Link></td>                          
                        </tr>
                        <tr>
                          <td>This is a dummy title</td>
                          <td>/dummy.html</td>
                          <td>ACTIVE</td>
                          <td>Info &#62 Contact</td>
                          <td><Link to='/admin/pages/edit'>Edit</Link></td>                          
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div className="pagination">
                    <ul>
                      <li><a href="#"><i className="fas fa-arrow-left"></i></a></li>
                      <li><a href="#">1</a></li>
                      <li><a href="#">2</a></li>
                      <li><a href="#">3</a></li>
                      <li><a href="#">4</a></li>
                      <li><a href="#">5</a></li>
                      <li><a href="#"><i className="fas fa-arrow-right"></i></a></li>
                    </ul>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="filter-form">
                    <h3>Filters</h3>
                    <form>
                      <div className="form-group">
                        <input type="text" className="form-control" id="" placeholder="URL.."/>
                      </div>
                      <div className="form-group">
                        <input type="text" className="form-control" id="" placeholder="Title.."/>
                      </div>
                      <div className="form-group">
                        <select className="form-control" id="sel1">
                          <option>Category</option>
                          <option>2</option>
                          <option>3</option>
                          <option>4</option>
                        </select>
                      </div>
                      <div className="form-group">
                        <select className="form-control" id="sel2">
                          <option>Status</option>
                          <option>2</option>
                          <option>3</option>
                          <option>4</option>
                        </select>
                      </div>
                    </form>
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
