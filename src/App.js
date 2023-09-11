import './App.css';
import Navbar from './components/Navbar.js';
import FirstBlock from './components/FirstBlock';
import ExperiencesBlock from './components/ExperiencesBlock';
import ProfileBlock from './components/ProfileBlock';
import ProjectBlock from './components/ProjectBlock';
import Accordion from './components/Accordion';

function App() {
  return (
    <div className='body'>
    <Navbar/>
    <FirstBlock/>
    <br/>
    <div className='secondBlock'>
      <ExperiencesBlock/>
      <ProfileBlock/>
    </div>
    <Accordion/>
    <ProjectBlock/>
    <div className='finish-bar'>
      <div className='bar1'>
        <div className='bar1-text'>
        <span id='india'>India</span>
        <span id='address'>Connaught Place, New Delhi, Delhi - </span>
        <span id='blue-words'>Based on your places - Update Location</span>
        </div>
      </div>
      <div className='bar2'>
        <div className='bar2-text'>
          <span>More options in</span>
          <span id='quick'> Quick Settings</span>
        </div>
      </div>
    </div>
    </div>
  );
}

export default App;
