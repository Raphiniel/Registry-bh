import '..\/accommodation.css'
const Accommodation = () => {
  const rooms = [
    {
      title: "",
      image: "images/newbed.jpg",
      description: " ",
      features: [""]
    },
    {
      title: "",
      image: "images/twobed.jpg",
      description: "",
      features: [""]
    },
    // {
    //   title: "",
    //   image: "images/newbed.jpg",
    //   description: "",
    //   features: [""]
    // }
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
             
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Accommodation;