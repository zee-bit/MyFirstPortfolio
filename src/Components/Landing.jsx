import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faTwitter } from "@fortawesome/free-brands-svg-icons";

class Landing extends Component {
  constructor(props) {
    super(props);

    this.landingData = props.landingData;
  }
  render() {
    return (
      <section className="resume-section p-3 p-lg-5 d-flex align-items-center" id="about" name="about">
        <div className="w-100">
          <h1 className="mb-0 mt-4">{this.landingData.firstName}
            <span className="text-primary">{this.landingData.lastName}</span>
          </h1>
          <div className="subheading mb-5">{this.landingData.phoneNumber} ·
            <a href={"mailto:" + this.landingData.email}>{this.landingData.email}</a>
          </div>
          <p className="lead mb-5">{this.landingData.bio}</p>
          <div className="social-icons-github mb-5">
            <a href={this.landingData.github} target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faGithub}  style = {{color:'white'}}/>
            </a>
          </div>
          <div className="social-icons-linkedin" >
            <a href={this.landingData.linkedin} target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faLinkedin}  style = {{color:'white'}}/>
            </a>
          </div>
          <div className="social-icons-twitter">
            <a href={this.landingData.twitter} target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faTwitter}  style = {{color:'white'}}/>
            </a>
          </div>
        </div>
      </section>
    );
  }
}

export default Landing;