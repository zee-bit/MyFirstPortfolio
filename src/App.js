import React, { Component } from 'react';
import Sidebar from './Components/Sidebar';
import Landing from './Components/Landing';
import Experience from './Components/Experience';
import Education from './Components/Education';
import Skills from './Components/Skills';
import Interests from './Components/Interests';
import Awards from './Components/Awards';
import profileData from './profileData';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab, faPython, faHtml5, faCuttlefish, faCss3Alt, faJs, faBootstrap, faReact } from '@fortawesome/free-brands-svg-icons'

library.add(fab, faCuttlefish, faPython, faHtml5, faCss3Alt, faJs, faBootstrap, faReact)

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      landingData : profileData.landing,
      experience : profileData.experience,
      education : profileData.education,
      skills : profileData.skills,
      interests : profileData.interests,
      awards : profileData.awards
    };
  }
  render() {
    return (
      <div className="App">
        <Sidebar sidebarData={this.state.landingData} />
        <div className="container-fluid p-0">
          <Landing landingData={this.state.landingData} />
          <hr className="m-0" />
          <Experience experience={this.state.experience} />
          <hr className="m-0" />
          <Skills skills={this.state.skills} />
          <hr className="m-0" />
          <Interests interests={this.state.interests} />
          <hr className="m-0" />
          <Awards awards={this.state.awards} />
          <hr className="m-0" />
          <Education education={this.state.education}/>
        </div>
      </div>
    );
  }
}

export default App;