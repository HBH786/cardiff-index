import { FaBus, FaTrain, FaTaxi, FaBicycle } from 'react-icons/fa';
import './Transport.css';

function Transport() {
  return (
    <div className="page">
      <h1>Getting Around Cardiff</h1>
      <div className="transport-grid">
        <div className="transport-card">
          <FaBus className="transport-icon" />
          <h2>Bus Services</h2>
          <p>Cardiff Bus operates throughout the city and to nearby areas. Get the Cardiff Bus app for real-time updates.</p>
        </div>
        <div className="transport-card">
          <FaTrain className="transport-icon" />
          <h2>Train</h2>
          <p>Cardiff Central and Queen Street stations connect you to local and national destinations.</p>
        </div>
        <div className="transport-card">
          <FaTaxi className="transport-icon" />
          <h2>Taxis</h2>
          <p>Licensed taxis are available at ranks throughout the city or can be booked via local companies.</p>
        </div>
        <div className="transport-card">
          <FaBicycle className="transport-icon" />
          <h2>Cycling</h2>
          <p>NextBike stations are available across Cardiff, offering bike rental services.</p>
        </div>
      </div>
    </div>
  );
}

export default Transport;
