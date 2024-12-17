import './Itineraries.css';

function Itineraries() {
  const itineraries = [
    {
      title: "24 Hours in Cardiff",
      activities: [
        "Morning: Cardiff Castle Tour",
        "Lunch at Cardiff Market",
        "Afternoon: Shopping at St. David's",
        "Evening: Dinner at Cardiff Bay"
      ]
    },
    {
      title: "Weekend Break",
      activities: [
        "Day 1: City Centre Exploration",
        "Day 1 Evening: Theatre Show",
        "Day 2: St Fagans Museum",
        "Day 2 Evening: Cardiff Bay"
      ]
    },
    {
      title: "Family Fun",
      activities: [
        "Cardiff Castle Dragons Trail",
        "Techniquest Science Centre",
        "Cardiff International Pool",
        "Bute Park Nature Trail"
      ]
    }
  ];

  return (
    <div className="page">
      <h1>Suggested Itineraries</h1>
      <div className="itineraries-grid">
        {itineraries.map((itinerary, index) => (
          <div key={index} className="itinerary-card">
            <h2>{itinerary.title}</h2>
            <ul>
              {itinerary.activities.map((activity, actIndex) => (
                <li key={actIndex}>{activity}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Itineraries;
