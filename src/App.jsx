import React, { useEffect } from 'react';
import Sidebar from './Components/Sidebar.jsx';
import Landing from './Components/Landing.jsx';
import Experience from './Components/Experience.jsx';
import Education from './Components/Education.jsx';
import Skills from './Components/Skills.jsx';
// import Interests from './Components/Interests.jsx';
import Awards from './Components/Awards.jsx';
import profileData from './profileData';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab, faPython, faHtml5, faCuttlefish, faCss3Alt, faJs, faBootstrap, faReact } from '@fortawesome/free-brands-svg-icons'
import { keepTheme } from './utils/themes';

library.add(fab, faCuttlefish, faPython, faHtml5, faCss3Alt, faJs, faBootstrap, faReact)

// class App extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       landingData : profileData.landing,
//       experience : profileData.experience,
//       education : profileData.education,
//       skills : profileData.skills,
//       interests : profileData.interests,
//       awards : profileData.awards
//     };
//   }
//   render() {
//     return (
//       <div className="App">
//         <Sidebar sidebarData={this.state.landingData} />
//         <div className="container-fluid">
//           <Landing landingData={this.state.landingData} />
//           <hr className="m-0" />
//           <Experience experience={this.state.experience} />
//           <hr className="m-0" />
//           <Skills skills={this.state.skills} />
//           <hr className="m-0" />
//           <Interests interests={this.state.interests} />
//           <hr className="m-0" />
//           <Awards awards={this.state.awards} />
//           <hr className="m-0" />
//           <Education education={this.state.education}/>
//           <hr className="m-0" />
//           <Resume />
//         </div>
//       </div>
//     );
//   }
// }
function App() {
  useEffect(() => {
    keepTheme();
  })

  const state = {
    landingData : profileData.landing,
    experience : profileData.experience,
    education : profileData.education,
    skills : profileData.skills,
    interests : profileData.interests,
    awards : profileData.awards
  };

  return (
    <div className="App">
      <Sidebar sidebarData={state.landingData} />
      <div className="container-fluid">
        <Landing landingData={state.landingData} />
        <hr className="section-sep m-0" />
        <Experience experience={state.experience} />
        <hr className="section-sep m-0" />
        <Skills skills={state.skills} />
        <hr className="section-sep m-0" />
        {/* <Interests interests={state.interests} />
        <hr className="section-sep m-0" /> */}
        <Awards awards={state.awards} />
        <hr className="section-sep m-0" />
        <Education education={state.education}/>
        <hr className="section-sep m-0" />
        {/* <Resume /> */}
      </div>
    </div>
  );
}

export default App;