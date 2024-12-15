import { FaChevronDown } from 'react-icons/fa';
import './Home.css';

function Home() {
  return (
    <div className="home">
      <section className="hero">
        <h1>Discover Cardiff</h1>
        <p>Experience the magic of Wales' capital city - where ancient castles meet modern culture</p>
        <button className="btn btn-primary">Start Exploring</button>
        <div className="scroll-indicator">
          <FaChevronDown color="white" size={24} />
        </div>
      </section>

      <section className="overview">
        <div className="container">
          <h2>Why Visit Cardiff?</h2>
          <div className="highlights">
            <div className="highlight-card">
              <h3>Rich History</h3>
              <p>Step back in time at Cardiff Castle and explore the city's 2000-year heritage through its historic landmarks and museums.</p>
            </div>
            <div className="highlight-card">
              <h3>Modern Culture</h3>
              <p>Immerse yourself in Cardiff's vibrant arts scene, world-class sporting events, and contemporary entertainment venues.</p>
            </div>
            <div className="highlight-card">
              <h3>Local Flavors</h3>
              <p>Savor traditional Welsh cuisine and discover innovative local restaurants that are redefining Cardiff's culinary landscape.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
