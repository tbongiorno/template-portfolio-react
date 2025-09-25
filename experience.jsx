const Experience = ({title, description, image}) =>
{
    return (
        <div className="general-card">
            <div className="general-image-wrapper">
                <div className="general-image-container">
                    <img
                        src={image}
                        alt={title}
                        className="general-image"
                    />
                </div>
            </div>
            <div className="general-content">
                <h3 className="general-title">{title}</h3>
                <p className="general-description">{description}</p>
            </div>
        </div>
    );
}

export default Experience;