import React, { Component } from 'react'

// Import custome components
import Header from './Header';
import Footer from './Footer';

class UserLayout extends Component {
  
  constructor(props) {
    super(props);
    this.state = {open: true};
  }

  render() {
    return (
      <div>
          <Header/>
          {this.props.children}
          <Footer/>
      </div>
    )
  }
}

export default UserLayout
