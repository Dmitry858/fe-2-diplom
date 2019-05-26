import React, { Component } from 'react';
import './css/font-awesome.min.css';
import './css/style.css';
import Header from './Header.js';
import Footer from './Footer.js';
import Content from './Content.js';

export default class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <Content />
        <Footer />
      </React.Fragment>
    );    
  }
}
