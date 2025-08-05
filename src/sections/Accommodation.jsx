import '..\/accommodation.css'
const Accommodation = () => {
  const rooms = [
    {
      title: "",
      image: "images/bedroom1.jpg",
      description: " ",
      features: [""]
    },
    {
      title: "",
      image: "images/twobed.jpg",
      description: "",
      features: [""]
    },
    {
      title: "",
      image: "images/abed.jpg",
      description: "",
      features: [""]
    }
  ];

  return (
    <section className="accommodation-section" style={{ backgroundColor: 'var(--light-green)' }}>
      <div className="section-container">
        <h2 className="section-title">Accommodation</h2>
        <div className="accommodation-grid">
          {rooms.map((room, index) => (
            <div key={index} className="room-card">
              <div 
                className="room-image" 
                style={{ backgroundImage: `url(${room.image})` }}
              ></div>
              <div className="room-content">
                <h3>{room.title}</h3>
                <p>{room.description}</p>
                <ul className="room-features">
                  {/* {room.features.map((feature, i) => (
                    <li key={i}>{feature}</li>
                  ))} */}
                </ul>
                {/* <button className="book-button">Book Now</button> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Accommodation;