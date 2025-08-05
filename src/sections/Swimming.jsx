import '../swimming.css'
const Swimming = () => {
  const wellnessOptions = [
    {
      title: "Pool Sitting Area",
      image: "images/pool1.jpg",
      description: "Relax in our stunning infinity pool overlooking the baobab forest with attentive poolside service and private cabanas.",
      features: [
     
      ],
     
    },
    {
      title: "Pool",
      image: "images/pool2.jpg",
      description: "We have 2 pools, one for adults and the other one for kids. Do not leave children unattended at the pool area.",
      features: [
       
      ],
    
    }
  ];

  return (
    <section className="swimming-section">
      <div className="section-container">
        <h2 className="section-title">Pool & Wellness</h2>
        <div className="wellness-grid">
          {wellnessOptions.map((option, index) => (
            <div key={index} className="wellness-card">
              <div 
                className="wellness-image" 
                style={{ backgroundImage: `url(${option.image})` }}
              ></div>
              <div className="wellness-content">
                <h3>{option.title}</h3>
                <p className="wellness-hours">{option.hours}</p>
                <p className="wellness-description">{option.description}</p>
                <ul className="wellness-features">
                  {option.features.map((feature, i) => (
                    <li key={i}>
                      <svg className="feature-icon" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
                {/* <button className="booking-button">
                  Book {option.title.includes("Pool") ? "Day Pass" : "Treatment"}
                </button> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Swimming;