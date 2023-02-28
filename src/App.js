import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';
import Committee from './Pages/Committee';
import Speakers from './Pages/Speakers';
import CallForPapers from './Pages/CallForPapers';
import Submission from './Pages/Submission';
import FinalPaperSubmission from './Pages/FinalPaperSubmission';
import Registration from './Pages/Registration';




function App() {
  return (
    <div classNameName="App">
        <Routes>
          <Route path="/"  element={<Home/>} />
          <Route path="/about"  element={<About/>} />
          <Route path="/committee"  element={<Committee/>} />
          <Route path="/speakers"  element={<Speakers/>} />
          <Route path="/call-for-papers"  element={<CallForPapers/>} />
          <Route path="/submission"  element={<Submission/>} />
          <Route path="/final-paper-submission"  element={<FinalPaperSubmission/>} />
          <Route path="/registration"  element={<Registration/>} />
        </Routes>
    
    </div>
  );
}

export default App;
