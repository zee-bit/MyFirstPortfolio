import React, { Component } from 'react';

class Interests extends Component {
  constructor(props) {
    super(props);

    this.interests = props.interests;
  }

  render() {
    return(
      <section className="resume-section p-3 p-lg-5 d-flex align-items-center" id="interests" name="education">
        <div className="w-100">
          <h2 className="mb-5">Interests</h2>
          <p>{this.interests.paragraphOne}<a href="https://www.codechef.com/users/zean_7" target="_blank" rel="noopener noreferrer">Codechef</a>
              , <a href="https://www.hackerrank.com/equbalzeeshan" target="_blank" rel="noopener noreferrer">Hackerrank</a> and <a href="https://www.hackerearth.com/@md.zeeshan1" target="_blank" rel="noopener noreferrer">Hackerearth</a>.
          I also enjoy participating in Capture The Flag events and automating tasks using Python.<br/> {this.interests.paragraphTwo} {this.interests.paragraphThree}</p>
          {/* <p className="mb-2">{this.interests.paragraphTwo}</p>
          <p className="mb-2">{this.interests.paragraphThree}</p> */}
        </div>
      </section>
    );
  }
}

export default Interests;