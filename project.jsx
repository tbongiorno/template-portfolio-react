// Project.jsx
const Project = ({ title, description, image, projectLink }) => {
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
                <h3 className="general-title">{title}&nbsp;</h3>
                <p className="general-description">{description}</p>

                <p className="general-description">
                    <a
                        href={projectLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="github-link"
                    >
                        Check it out
                    </a>.

                </p>
            </div>
        </div>
    );
};

export default Project;