const Conference = () => {
  return (
    <section className="conference-section" style={{ backgroundColor: 'var(--white)' }}>
      <div className="section-container">
        <h2 className="section-title">Meeting Facilities</h2>
        <div className="section-content">
          <div className="service-card">
            <div 
              className="card-image" 
              style={{ backgroundImage: 'url(/barj3.jpg)' }}
            ></div>
            <div className="card-content">
              <h3>Conference Rooms</h3>
              <p>
                Host your business events in our state-of-the-art meeting rooms 
                equipped with modern technology and customizable layouts.
              </p>
            </div>
          </div>
          <div className="service-card">
            <div 
              className="card-image" 
              style={{ backgroundImage: 'url(/bar3.jpg)' }}
            ></div>
            <div className="card-content">
              <h3>Event Spaces</h3>
              <p>
                Celebrate special occasions in our beautiful event venues with 
                professional planning services and gourmet catering.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Conference;