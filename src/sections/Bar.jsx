const Bar = () => {
  return (
    <section className="bar-section" style={{ backgroundColor: 'var(--light-green)' }}>
      <div className="section-container">
        <h2 className="section-title">Sky Lounge</h2>
        <div className="section-content">
          <div className="service-card">
            <div 
              className="card-image" 
              style={{ backgroundImage: 'url(/bar.jpg)' }}
            ></div>
            <div className="card-content">
              <h3>Rooftop Bar</h3>
              <p>
                Enjoy crafted cocktails and fine wines at our panoramic rooftop bar 
                with stunning sunset views over the baobab valley.
              </p>
            </div>
          </div>
          <div className="service-card">
            <div 
              className="card-image" 
              style={{ backgroundImage: 'url(/lounge.jpg)' }}
            ></div>
            <div className="card-content">
              <h3>Lounge Area</h3>
              <p>
                Unwind in our comfortable lounge with live music on weekends 
                and a selection of premium spirits and cigars.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Bar;