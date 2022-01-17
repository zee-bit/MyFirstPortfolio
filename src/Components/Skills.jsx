import React, { Component } from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class Skills extends Component {
  constructor(props) {
    super(props);

    this.skills = props.skills;
  }

  render() {
    return(
      <section className="resume-section p-3 p-lg-5 d-flex align-items-center" id="skills" name="skills">
        <div className="w-100">
          <h2 className="mb-5">Skills</h2>
          {/* <div className="subheading mb-3">Programming Languages &amp; Tools</div>
          <div className="row">
          {
            this.skills.map((data, index) => (
              <div key={index} className="col-6">
                <p className="list-item">
                  <FontAwesomeIcon icon={data.icon} size= "lg"/>
                  <span className="ml-3">{data.name}</span>
                  <svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="aws" className="svg-inline--fa fa-lg fa-aws" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path fill="currentColor" d="M180.4 203c-.72 22.65 10.6 32.68 10.88 39.05a8.164 8.164 0 0 1 -4.1 6.27l-12.8 8.96a10.66 10.66 0 0 1 -5.63 1.92c-.43-.02-8.19 1.83-20.48-25.61a78.61 78.61 0 0 1 -62.61 29.45c-16.28 .89-60.4-9.24-58.13-56.21-1.59-38.28 34.06-62.06 70.93-60.05 7.1 .02 21.6 .37 46.99 6.27v-15.62c2.69-26.46-14.7-46.99-44.81-43.91-2.4 .01-19.4-.5-45.84 10.11-7.36 3.38-8.3 2.82-10.75 2.82-7.41 0-4.36-21.48-2.94-24.2 5.21-6.4 35.86-18.35 65.94-18.18a76.86 76.86 0 0 1 55.69 17.28 70.29 70.29 0 0 1 17.67 52.36l-.01 69.29zM93.99 235.4c32.43-.47 46.16-19.97 49.29-30.47 2.46-10.05 2.05-16.41 2.05-27.4-9.67-2.32-23.59-4.85-39.56-4.87-15.15-1.14-42.82 5.63-41.74 32.26-1.24 16.79 11.12 31.4 29.96 30.48zm170.9 23.05c-7.86 .72-11.52-4.86-12.68-10.37l-49.8-164.6c-.97-2.78-1.61-5.65-1.92-8.58a4.61 4.61 0 0 1 3.86-5.25c.24-.04-2.13 0 22.25 0 8.78-.88 11.64 6.03 12.55 10.37l35.72 140.8 33.16-140.8c.53-3.22 2.94-11.07 12.8-10.24h17.16c2.17-.18 11.11-.5 12.68 10.37l33.42 142.6L420.1 80.1c.48-2.18 2.72-11.37 12.68-10.37h19.72c.85-.13 6.15-.81 5.25 8.58-.43 1.85 3.41-10.66-52.75 169.9-1.15 5.51-4.82 11.09-12.68 10.37h-18.69c-10.94 1.15-12.51-9.66-12.68-10.75L328.7 110.7l-32.78 136.1c-.16 1.09-1.73 11.9-12.68 10.75h-18.3zm273.5 5.63c-5.88 .01-33.92-.3-57.36-12.29a12.8 12.8 0 0 1 -7.81-11.91v-10.75c0-8.45 6.2-6.9 8.83-5.89 10.04 4.06 16.48 7.14 28.81 9.6 36.65 7.53 52.77-2.3 56.72-4.48 13.15-7.81 14.19-25.68 5.25-34.95-10.48-8.79-15.48-9.12-53.13-21-4.64-1.29-43.7-13.61-43.79-52.36-.61-28.24 25.05-56.18 69.52-55.95 12.67-.01 46.43 4.13 55.57 15.62 1.35 2.09 2.02 4.55 1.92 7.04v10.11c0 4.44-1.62 6.66-4.87 6.66-7.71-.86-21.39-11.17-49.16-10.75-6.89-.36-39.89 .91-38.41 24.97-.43 18.96 26.61 26.07 29.7 26.89 36.46 10.97 48.65 12.79 63.12 29.58 17.14 22.25 7.9 48.3 4.35 55.44-19.08 37.49-68.42 34.44-69.26 34.42zm40.2 104.9c-70.03 51.72-171.7 79.25-258.5 79.25A469.1 469.1 0 0 1 2.83 327.5c-6.53-5.89-.77-13.96 7.17-9.47a637.4 637.4 0 0 0 316.9 84.12 630.2 630.2 0 0 0 241.6-49.55c11.78-5 21.77 7.8 10.12 16.38zm29.19-33.29c-8.96-11.52-59.28-5.38-81.81-2.69-6.79 .77-7.94-5.12-1.79-9.47 40.07-28.17 105.9-20.1 113.4-10.63 7.55 9.47-2.05 75.41-39.56 106.9-5.76 4.87-11.27 2.3-8.71-4.1 8.44-21.25 27.39-68.49 18.43-80.02z"></path></svg>
                  <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="c" class="svg-inline--fa fa-lg fa-c" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path fill="currentColor" d="M352 359.8c22.46 0 31.1 19.53 31.1 31.99c0 23.14-66.96 88.23-164.5 88.23c-137.1 0-219.4-117.8-219.4-224c0-103.8 79.87-223.1 219.4-223.1c99.47 0 164.5 66.12 164.5 88.23c0 12.27-9.527 32.01-32.01 32.01c-31.32 0-45.8-56.25-132.5-56.25c-97.99 0-155.4 84.59-155.4 159.1c0 74.03 56.42 160 155.4 160C306.5 416 320.5 359.8 352 359.8z"></path></svg>
                </p>
              </div>
            ))
          }
          </div> */}

          {
            this.skills.map((skillCategory, index) => (
              <>
                <div key={index} className='subheading mb-3 mt-4 mt-lg-5'>{Object.keys(skillCategory)[0]}</div>
                <div className='row'>
                  {
                    skillCategory[Object.keys(skillCategory)[0]].map((skill, index) => (
                      <div key={index} className='col-sm-6 col-md-4 col-xl-3'>
                        <p className='list-item d-flex align-items-center'>
                          <svg aria-hidden="true" focusable="true" data-prefix={skill.dataPrefix} data-icon={skill.icon} className={"svg-inline--fa skill-icon " + skill.class} role="img" xmlns="http://www.w3.org/2000/svg" viewBox={skill.viewbox}><path fill="currentColor" d={skill.path}></path></svg>
                          <span className="ml-3">{skill.name}</span>
                        </p>
                      </div>
                    ))
                  }
                </div>
              </>
            ))
          }
        </div>
      </section>
    );
  }
}

export default Skills;