import { Link } from 'react-router-dom';
import { useState } from 'react';
import { FaSearch, FaBars, FaTimes, FaCompass } from 'react-icons/fa';
import './Navbar.css';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <nav className="navbar">
      <Link to="/" className="logo">
        <FaCompass />
        <span>Visit Cardiff</span>
      </Link>

      <div className="search-bar">
        <input
          type="text"
          placeholder="Search places, events, and more..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <FaSearch className="search-icon" />
      </div>

      <div className={`nav-links ${isOpen ? 'active' : ''}`}>
        <Link to="/attractions">Attractions</Link>
        <Link to="/dining">Dining</Link>
        <Link to="/accommodation">Stay</Link>
        <Link to="/transport">Transport</Link>
        <Link to="/itineraries">Itineraries</Link>
      </div>

      <button className="mobile-menu" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <FaTimes /> : <FaBars />}
      </button>
    </nav>
  );
}

export default Navbar;
