// Project.jsx
const Project = ({ title, description, image, projectLink, completed }) => {
    function checkCompleted() {
        if (completed === true){
                    return <a
                        href={projectLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="github-link"
                    >
                        Check it out
                    </a>
        }
        else{
            return <a> Check back in soon!</a>
        }
    }

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
                <p className="general-description">
                    {description}
                </p>
                {checkCompleted()}
            </div>
        </div>
    );
};

export default Project;