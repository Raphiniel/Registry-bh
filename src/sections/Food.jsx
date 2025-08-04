const Food = () => {
  return (
    <section className="food-section" style={{ backgroundColor: 'var(--white)' }}>
      <div className="section-container">
        <h2 className="section-title">Gourmet Dining</h2>
        <div className="section-content">
          <div className="service-card">
            <div 
              className="card-image" 
              style={{ backgroundImage: 'url(/food.jpg)' }}
            ></div>
            <div className="card-content">
              <h3>Restaurant</h3>
              <p>
                Savor exquisite culinary creations prepared by our award-winning chefs 
                using locally-sourced ingredients in our elegant dining room.
              </p>
            </div>
          </div>
          <div className="service-card">
            <div 
              className="card-image" 
              style={{ backgroundImage: 'url(/breakfast.jpg)' }}
            ></div>
            <div className="card-content">
              <h3>Breakfast Buffet</h3>
              <p>
                Start your day with our lavish breakfast buffet featuring fresh fruits, 
                baked goods, and made-to-order specialties.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Food;