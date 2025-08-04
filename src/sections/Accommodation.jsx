const Accommodation = () => {
  return (
    <section className="accomodation-section" style={{ backgroundColor: 'var(--light-green)' }}>
      <div className="section-container">
        <h2 className="section-title">Luxury Accommodation</h2>
        <div className="section-content">
          <div className="service-card">
            <div 
              className="card-image" 
              style={{ backgroundImage: 'url(/accomodation.jpg)' }}
            ></div>
            <div className="card-content">
              <h3>Premium Rooms</h3>
              <p>
                Experience our elegantly designed rooms with premium amenities, 
                plush bedding, and breathtaking views of the surrounding landscape.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Accommodation;