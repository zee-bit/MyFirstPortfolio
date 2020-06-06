import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAward } from "@fortawesome/free-solid-svg-icons";


class Awards extends Component {
  constructor(props) {
    super(props);

    this.awards = props.awards;
  }

  render() {
    return(
      <div className="resume-section p-3 p-lg-5 d-flex align-items-center" id="awards">
        <div className="w-100">
          <h2 className="mb-5">Awards &amp; Certifications</h2>
          <ul className="fa-ul mb-0 ml-0">
          {
            this.awards.map((data, index) => (
              <li key={index} className = "list-item mb-2">
                <FontAwesomeIcon icon={faAward} size ="lg" color="#ffc107" />
                <span className="ml-1"> {data.awardDetail} </span>
              </li>
            ))
          }
          </ul>
        </div>
      </div>
    );
  }
}

export default Awards;