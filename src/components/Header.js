import React, { Component } from 'react';
import Scroll from './Scroll';
import config from '../../config';
import logoCropped from '../assets/images/rga-logo-cropped.png';
export default class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      openMenu: false,
      visibilityClass: '',
    };
  }
  toggleMenu = value => {
    this.setState({ openMenu: value });
  };
  handleScroll = () => {
    const { visibilityClass } = this.state;
    if (window.pageYOffset > 300) {
      if (visibilityClass !== 'navbar-shrink') {
        this.setState({ visibilityClass: 'navbar-shrink' });
      }
    } else {
      if (visibilityClass === 'navbar-shrink') {
        this.setState({ visibilityClass: '' });
      }
    }
  };

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
    window.addEventListener('click', this.handleOutsideClick);
  }
  
  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
    window.removeEventListener('click', this.handleOutsideClick);
  }
  
  handleOutsideClick = (event) => {
    const navbar = document.getElementById('mainNav');
    if (navbar.contains(event.target)) {
      return;
    }
    this.toggleMenu(false);
  };
  

  render() {
    const { openMenu, visibilityClass } = this.state;
    return (
      <nav
        className={`navbar navbar-expand-lg navbar-light fixed-top ${visibilityClass}`}
        id="mainNav"
      >
        <div className="container">
          <img id="logoCropped" className="img-fluid" src={logoCropped} alt="RGA Logo" />
          {/* <a className="navbar-brand" href="#page-top">
            {/* {config.siteTitle} }
          </a> */}
          <div id="headerSocial" className="social d-flex justify-content-center">
            {config.socialLinks.map(social => {
              const { icon, url } = social;
              return (
                <a key={url} href={url} target="_blank" rel="noopener noreferrer" className={`mx-2`}>
                  <i className={`fab ${icon}`}></i>
                </a>
              );
            })}
          </div>
          <button
            onClick={_ => this.toggleMenu(!openMenu)}
            className={`navbar-toggler navbar-toggler-right ${
              openMenu ? '' : 'collapsed'
            }`}
            type="button"
            aria-controls="navbarResponsive"
            aria-expanded={openMenu}
            aria-label="Toggle navigation"
          >
            <span id="menu-text">MENU</span>
            <i className="fas fa-bars ml-1"></i>
          </button>
          <div
            className={`collapse navbar-collapse ${openMenu ? 'show' : ''}`}
            id="navbarResponsive"
          >
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Scroll
                  onClick={_ => this.toggleMenu(!openMenu)}
                  type="id"
                  element="about"
                >
                  <a className="nav-link" href="#about">
                    <button className="btn btn-primary">
                      ABOUT
                    </button>
                  </a>
                </Scroll>
              </li>       
              <li className="nav-item">
                <Scroll
                  onClick={_ => this.toggleMenu(!openMenu)}
                  type="id"
                  element="updates"
                  offset={-100}
                >{/* 
                  <a className="nav-link" href="#updates">
                  <button className="btn btn-primary">
                    TEAM
                  </button>
                  </a>
                </Scroll>
              </li>       
              <li className="nav-item">
                <Scroll
                  onClick={_ => this.toggleMenu(!openMenu)}
                  type="id"
                  element="timetable"
                  offset={-50}
                > */}
                  <a className="nav-link" href="#timetable">
                    <button className="btn btn-primary">
                      SCHEDULE
                    </button>
                  </a>
                </Scroll>
              </li>
              <li className="nav-item">
                <Scroll
                  onClick={_ => this.toggleMenu(!openMenu)}
                  type="id"
                  element="classes"
                  offset={-110}
                >
                  <a className="nav-link" href="#classes">
                    <button className="btn btn-primary">
                      CLASSES
                    </button>
                  </a>
                </Scroll>
              </li>
              <li className="nav-item">
                <Scroll
                  onClick={_ => this.toggleMenu(!openMenu)}
                  type="id"
                  element="signup"
                  offset={20}
                >
                  <a className="nav-link" href="#signup">
                  <button className="btn btn-primary">
                    MEMBERSHIP
                  </button>
                  </a>
                </Scroll>
              </li>
              <li className="nav-item">
                <Scroll
                  onClick={_ => this.toggleMenu(!openMenu)}
                  type="id"
                  element="contact"             
                >
                  <a className="nav-link" href="#contact">
                    <button className="btn btn-primary">
                      CONTACT
                    </button>
                  </a>
                </Scroll>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}
