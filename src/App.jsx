import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Attractions from './pages/Attractions';
import Dining from './pages/Dining';
import Accommodation from './pages/Accommodation';
import Transport from './pages/Transport';
import Itineraries from './pages/Itineraries';

function App() {
  return (
    <Router basename="/">
      <div className="app">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/attractions" element={<Attractions />} />
          <Route path="/dining" element={<Dining />} />
          <Route path="/accommodation" element={<Accommodation />} />
          <Route path="/transport" element={<Transport />} />
          <Route path="/itineraries" element={<Itineraries />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
