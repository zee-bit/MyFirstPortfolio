import React, { Component } from 'react';
import ThemeToggler from './ThemeToggle.jsx';
import { Link, animateScroll as scroll } from 'react-scroll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';

import image from '../my-passport-photo.jpg';
// import resume from '/resume/Zeeshan Equbal Resume.pdf';

class Sidebar extends Component {
  constructor(props) {
    super(props);

    this.sidebarData = props.sidebarData;
  }

  scrollToTop = () => {
    scroll.scrollToTop();
  }

  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary fixed-top" id="sideNav">
        <ThemeToggler />
        <a className="navbar-brand js-scroll-trigger" href="#page-top">
          {/* <span className="d-block d-lg-none">{this.sidebarData.firstName} {this.sidebarData.lastName}</span> */}
          <span className="d-none d-lg-block">
            <img className="img-fluid img-profile rounded-circle mx-auto mb-2" src={image} alt=""></img>
          </span>
        </a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav">
            <Link className="nav-item" activeClass='active' to='about' spy={true} smooth={true} duration={700}>
              <li className="nav-link js-scroll-trigger" href="#about">About</li>
            </Link>
            <Link className="nav-item" activeClass='active' to='experience' spy={true} smooth={true} duration={700}>
              <li className="nav-link js-scroll-trigger" href="#experience">Experience</li>
            </Link>
            <Link className="nav-item" activeClass='active' to='skills' spy={true} smooth={true} duration={700}>
              <li className="nav-link js-scroll-trigger" href="#skills">Skills</li>
            </Link>
            {/* <Link className="nav-item" activeClass='active' to='interests' spy={true} smooth={true} duration={700}>
              <li className="nav-link js-scroll-trigger" href="#interests">Interests</li>
            </Link> */}
            <Link className="nav-item" activeClass='active' to='awards' spy={true} smooth={true} duration={700}>
              <li className="nav-link js-scroll-trigger" href="#awards">Awards</li>
            </Link>
            <Link className="nav-item" activeClass='active' to='education' spy={true} smooth={true} duration={700}>
              <li className="nav-link js-scroll-trigger" href="#education">Education</li>
            </Link>
            <li><hr className="resume-sep" /></li>
            {/* <Link className="nav-item" activeClass='active' to='resume' spy={true} smooth={true} duration={700}> */}
            <li className="nav-item active">
              <a className="nav-link" href="/resume/Zeeshan Equbal Resume.pdf" target='_blank' download>
                Resume
                <FontAwesomeIcon icon={faDownload} size="1x" className="ml-2" />
              </a>
            </li>
            {/* </Link> */}
          </ul>
        </div>
      </nav>
    );
  }
}

export default Sidebar;
