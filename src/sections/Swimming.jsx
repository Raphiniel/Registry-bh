const Swimming = () => {
  return (
    <section className="swimming-section" style={{ backgroundColor: 'var(--light-green)' }}>
      <div className="section-container">
        <h2 className="section-title">Pool & Wellness</h2>
        <div className="section-content">
          <div className="service-card">
            <div 
              className="card-image" 
              style={{ backgroundImage: 'url(/swimming.jpg)' }}
            ></div>
            <div className="card-content">
              <h3>Infinity Pool</h3>
              <p>
                Relax in our stunning infinity pool overlooking the baobab forest 
                with attentive poolside service and private cabanas.
              </p>
            </div>
          </div>
          <div className="service-card">
            <div 
              className="card-image" 
              style={{ backgroundImage: 'url(/spa.jpg)' }}
            ></div>
            <div className="card-content">
              <h3>Spa Services</h3>
              <p>
                Rejuvenate with our signature spa treatments using natural, 
                locally-inspired ingredients and traditional techniques.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Swimming;