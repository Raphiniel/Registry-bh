export default function ServiceCard({ service, isActive, onClick }) {
    return (
        <div 
            className={`service-card ${isActive ? 'active' : ''}`}
            onClick={onClick}
        >
            <div className="card-image" style={{ backgroundImage: `url(${service.image})` }}>
                <div className="image-overlay"></div>
                <h3>{service.title}</h3>
            </div>
            <div className="card-content">
                <p>{service.description}</p>
                <button className="learn-more-btn">Learn More</button>
            </div>
        </div>
    )
}