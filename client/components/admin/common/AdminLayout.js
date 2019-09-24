import React, { Component } from 'react'

// Import custome components
import Header from './Header';

class AdminLayout extends Component {
  
  constructor(props) {
    super(props);
    this.state = {open: true};
  }

  render() {
    return (
      <div>
        <Header/>
        {this.props.children}
      </div>
    )
  }
}

export default AdminLayout
