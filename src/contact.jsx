const Contact = ({ platform, url}) => {
    function checkEmail() {
        if (platform == "Email"){
           return  <a href="mailto:{url}">{url}</a>
        }
        else {
            return <a href={url} target="_blank" rel="noopener noreferrer">
                        {url}
                    </a>
        }
    }   
    return(
        <div className="contact-info">
                <div className="contact-item">
                    <h3>{platform}</h3>
                    {checkEmail()}
                </div>
            </div>
    )
}

export default Contact;