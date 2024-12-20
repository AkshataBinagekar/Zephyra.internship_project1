import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home';
import Signup from './Pages/Signup';
import Settings from './Pages/Settings';
import AboutUs from './Pages/AboutUs';


function App() {
  return (
    <Router>
    <div className="App">
      <Routes>
       
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/AboutUs" element={<AboutUs />} />
      </Routes>
    </div>
  </Router>
  );
}

export default App;
