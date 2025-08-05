import '../food.css'
const Food = () => {
  const diningOptions = [
    {
      title: "Restaurant",
      image: "images/food.jpg",
      description: "Our restaurant is open throughout the day and closes at 21:30hrs. Our breakfast is served from 7am-9am. Should you require early breakfast, kindly inform the restaurant or reception a night before. May you also kindly communicate if you wish for any arrangement for late dinners.",
      features: [
   
      ],
    },
    {
      title: "Restaurant",
      image: "images/food2.jpg",
      description: "If you have any special dietary requirements or food allergies, please inform the waiters when ordering",
      features: [
       
      ],
   
    }
  ];

  return (
    <section className="food-section">
      <div className="section-container">
        <h2 className="section-title">Gourmet Dining</h2>
        <div className="dining-grid">
          {diningOptions.map((option, index) => (
            <div key={index} className="dining-card">
              <div 
                className="dining-image" 
                style={{ backgroundImage: `url(${option.image})` }}
              ></div>
              <div className="dining-content">
                <h3>{option.title}</h3>
                <p className="dining-hours">{option.hours}</p>
                <p className="dining-description">{option.description}</p>
                <ul className="dining-features">
                  {option.features.map((feature, i) => (
                    <li key={i}>
                      <svg className="feature-icon" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
                {/* <button className="reservation-button">Make Reservation</button> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Food;