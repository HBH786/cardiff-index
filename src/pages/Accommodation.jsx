import { FaHotel, FaBed, FaHome, FaCampground } from 'react-icons/fa';
import './Accommodation.css';

function Accommodation() {
  return (
    <div className="page">
      <h1>Where to Stay</h1>
      <div className="accommodation-grid">
        <div className="accommodation-card">
          <FaHotel className="accommodation-icon" />
          <h2>Hotels</h2>
          <p>From luxury hotels to budget-friendly options in the city center and Cardiff Bay.</p>
        </div>
        <div className="accommodation-card">
          <FaBed className="accommodation-icon" />
          <h2>B&Bs</h2>
          <p>Charming bed and breakfasts offering Welsh hospitality and home-cooked meals.</p>
        </div>
        <div className="accommodation-card">
          <FaHome className="accommodation-icon" />
          <h2>Apartments</h2>
          <p>Self-catering apartments perfect for families or longer stays.</p>
        </div>
        <div className="accommodation-card">
          <FaCampground className="accommodation-icon" />
          <h2>Hostels</h2>
          <p>Budget-friendly hostels ideal for backpackers and young travelers.</p>
        </div>
      </div>
    </div>
  );
}

export default Accommodation;
