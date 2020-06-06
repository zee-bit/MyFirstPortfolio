import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class Skills extends Component {
  constructor(props) {
    super(props);

    this.skills = props.skills;
  }

  render() {
    return(
      <div className="resume-section p-3 p-lg-5 d-flex align-items-center" id="skills">
        <div className="w-100">
          <h2 className="mb-5">Skills</h2>
          <div className="subheading mb-3">Programming Languages &amp; Tools</div>
          <div className="row">
          {
            this.skills.map((data, index) => (
              <div key={index} className="col-6">
                <p className="list-item">
                  <FontAwesomeIcon icon={data.icon} size= "lg"/>
                  <span className="ml-3">{data.name}</span>
                </p>
              </div>
            ))
          }
          </div>
        </div>
      </div>
    );
  }
}

export default Skills;