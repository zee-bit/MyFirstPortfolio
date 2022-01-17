import React, { Component } from 'react';

class Experience extends Component {
  constructor(props) {
    super(props);

    this.experience = props.experience;
  }

  renderMarkdown = (markdown) => {
    var matches = /\[(.+)\]\((https?:\/\/[^\s]+)(?: "(.+)")?\)|(https?:\/\/[^\s]+)/ig.exec(markdown);
    console.log(matches)
    return `<a href='abcd.com'>abcd.com</a>`;
  }

  render() {
    return(
      <section className="resume-section p-3 p-lg-5 d-flex align-items-center" id="experience" name="experience">
        <div className="w-100">
          <h2 className="mb-5 mt-2">Experience</h2>
          {
            this.experience.map((exp, index) => (
              <div key={index} className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
                <div className="resume-content">
                  <h3 className="mb-0">{exp.position}</h3>
                  <div className="subheading mb-3"><a href = {exp.url}>{exp.organization}</a></div>
                  {/* <p className='insert'>
                    {this.renderMarkdown(exp.aboutWork)}
                  </p> */}
                  <p dangerouslySetInnerHTML={{ __html: exp.aboutWork }}/>
                </div>
                <div className="resume-date text-md-right">
                  <span className="text-primary">{exp.fromDate} - {exp.toDate}</span>
                </div>
              </div>
            ))
          }
        </div>
      </section>
    );
  }
}

export default Experience;