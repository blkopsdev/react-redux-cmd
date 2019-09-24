import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Categories extends Component {
  render() {
    return (
      <div>
        <main className="l-main">
          <div className="content-wrapper content-wrapper--with-bg">
            <div className="home-content">
              <div className="title">
                <h2>Categories</h2>
                <Link to='/admin/categories/edit'>ADD NEW</Link>                      
              </div>
              <div className="row">
                <div className="col-md-8">
                  <div className="page-table">
                    <h3>Categories</h3>
                    <table className="table">
                      <thead className="thead-light">
                        <tr>
                          <th scope="col">NAME</th>
                          <th scope="col">URL</th>
                          <th scope="col">PARENT</th>
                          <th scope="col">POSITION</th>
                          <th scope="col"></th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>This is a dummy title</td>
                          <td>/dummy.html</td>
                          <td>None</td>
                          <td>1</td>
                          <td><Link to='/admin/categories/edit'>Edit</Link></td>                          
                        </tr>
                        <tr>
                          <td>This is a dummy title</td>
                          <td>/dummy.html</td>
                          <td>None</td>
                          <td>1</td>
                          <td><Link to='/admin/categories/edit'>Edit</Link></td>                          
                        </tr>
                        <tr>
                          <td>This is a dummy title</td>
                          <td>/dummy.html</td>
                          <td>None</td>
                          <td>1</td>
                          <td><Link to='/admin/categories/edit'>Edit</Link></td>                          
                        </tr>
                        <tr>
                          <td>This is a dummy title</td>
                          <td>/dummy.html</td>
                          <td>None</td>
                          <td>1</td>
                          <td><Link to='/admin/categories/edit'>Edit</Link></td>                          
                        </tr>
                        <tr>
                          <td>This is a dummy title</td>
                          <td>/dummy.html</td>
                          <td>None</td>
                          <td>1</td>
                          <td><Link to='/admin/categories/edit'>Edit</Link></td>                          
                        </tr>
                        <tr>
                          <td>This is a dummy title</td>
                          <td>/dummy.html</td>
                          <td>None</td>
                          <td>1</td>
                          <td><Link to='/admin/categories/edit'>Edit</Link></td>                          
                        </tr>
                        <tr>
                          <td>This is a dummy title</td>
                          <td>/dummy.html</td>
                          <td>None</td>
                          <td>1</td>
                          <td><Link to='/admin/categories/edit'>Edit</Link></td>                          
                        </tr>
                        <tr>
                          <td>This is a dummy title</td>
                          <td>/dummy.html</td>
                          <td>None</td>
                          <td>1</td>
                          <td><Link to='/admin/categories/edit'>Edit</Link></td>                          
                        </tr>
                        <tr>
                          <td>This is a dummy title</td>
                          <td>/dummy.html</td>
                          <td>None</td>
                          <td>1</td>
                          <td><Link to='/admin/categories/edit'>Edit</Link></td>                          
                        </tr>
                        <tr>
                          <td>This is a dummy title</td>
                          <td>/dummy.html</td>
                          <td>None</td>
                          <td>1</td>
                          <td><Link to='/admin/categories/edit'>Edit</Link></td>                          
                        </tr>
                        <tr>
                          <td>This is a dummy title</td>
                          <td>/dummy.html</td>
                          <td>None</td>
                          <td>1</td>
                          <td><Link to='/admin/categories/edit'>Edit</Link></td>                          
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
