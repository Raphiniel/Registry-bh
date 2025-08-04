const Viewpoint = () => {
  return (
    <section className="viewpoint-section" style={{ backgroundColor: 'var(--white)' }}>
      <div className="section-container">
        <h2 className="section-title">Scenic Viewpoints</h2>
        <div className="section-content">
          <div className="service-card">
            <div 
              className="card-image" 
              style={{ backgroundImage: 'url(/viewpoint.jpg)' }}
            ></div>
            <div className="card-content">
              <h3>Observation Deck</h3>
              <p>
                Visit our elevated observation deck for breathtaking 360-degree 
                views of the surrounding landscape and wildlife.
              </p>
            </div>
          </div>
          <div className="service-card">
            <div 
              className="card-image" 
              style={{ backgroundImage: 'url(/sunset.jpg)' }}
            ></div>
            <div className="card-content">
              <h3>Sunset Spot</h3>
              <p>
                Experience magical African sunsets from our specially-designed 
                viewpoint with complimentary sundowner drinks.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Viewpoint;