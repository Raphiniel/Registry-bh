import '../bar.css'
const Bar = () => {
  const barServices = [
    {
      title: "Bar",
      image: "images/barj3.jpg",
      description: "Enjoy crafted cocktails and fine wines at our bar.",
      highlights: [
        
      ]
    },
    {
      title: "Bar Lounge Area",
      image: "images/barlounge1.jpg",
      description: "Unwind in our comfortable lounge with live music on weekends and a selection of premium spirits and cigars.",
      highlights: [
        
      ]
    }
  ];

  return (
    <section className="bar-section">
      <div className="section-container">
        <h2 className="section-title">Bar</h2>
        <div className="bar-grid">
          {barServices.map((service, index) => (
            <div key={index} className="bar-card">
              <div 
                className="bar-image" 
                style={{ backgroundImage: `url(${service.image})` }}
              ></div>
              <div className="bar-content">
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <ul className="bar-highlights">
                  {service.highlights.map((highlight, i) => (
                    <li key={i}>{highlight}</li>
                  ))}
                </ul>
                {/* <button className="reserve-button">Reserve Table</button> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Bar;