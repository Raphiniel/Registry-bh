import '../viewpoint.css'
const Viewpoint = () => {
  const viewpoints = [
    {
      title: "Observation Deck",
      image: "images/viewp1.jpg",
      description: "Visit our elevated observation deck for breathtaking 360-degree views of the surrounding landscape and wildlife.",
      features: [
  
      ],
     
    },
    {
      title: "Sunset Spot",
      image: "images/viewp2.jpg",
      description: "Experience magical African sunsets from our specially-designed viewpoint with complimentary sundowner drinks.",
      features: [
 
      ],
      
    }
  ];

  return (
    <section className="viewpoint-section">
      <div className="section-container">
        <h2 className="section-title">Scenic Viewpoints</h2>
        <div className="viewpoint-grid">
          {viewpoints.map((point, index) => (
            <div key={index} className="viewpoint-card">
              <div 
                className="viewpoint-image" 
                style={{ backgroundImage: `url(${point.image})` }}
              ></div>
              <div className="viewpoint-content">
                <div className="viewpoint-header">
                  <span className="viewpoint-icon">{point.icon}</span>
                  <h3>{point.title}</h3>
                </div>
                <p className="best-time">{point.bestTime}</p>
                <p className="viewpoint-description">{point.description}</p>
                <ul className="viewpoint-features">
                  {point.features.map((feature, i) => (
                    <li key={i}>
                      <svg className="feature-icon" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
                {/* <button className="viewpoint-button">
                  Visit {point.title.includes("Deck") ? "Deck" : "Spot"}
                </button> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Viewpoint;