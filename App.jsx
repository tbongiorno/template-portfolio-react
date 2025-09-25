import { useState } from 'react'
import Experience from './experience.jsx'
import Project from './project.jsx'

import './App.css'

const experiences = [
  ///Update Below and Map Correctly
  {
    'key':1,
    'title': 'SWE @ ',
    'description':'I software engineered',
    'image': 'Verisign.jpg'
  },
  {
    'key':2,
    'title': 'SWE @ Verisign',
    'description':'I software engineered',
    'image': 'Verisign.jpg'
  },
  {
    'key':2,
    'title': 'SWE @ Verisign',
    'description':'I software engineered',
    'image': 'Verisign.jpg'
  },
  {
    'key':2,
    'title': 'SWE @ Verisign',
    'description':'I software engineered',
    'image': 'Verisign.jpg'
  },
  {
    'key':2,
    'title': 'SWE @ Verisign',
    'description':'I software engineered',
    'image': 'Verisign.jpg'
  }
]
const projects = [
  {
    'key':1,
    'title': 'Video Game Wishlist Maker',
    'description':'Flask website that allows users to create their own video game wishlists!',
    'link': 'https://github.com/tbongiorno/Game-Wishlist-Ranker',
    'image': 'Verisign.jpg'
  },
  {
    'key':2,
    'title': 'Portfolio Website',
    'description':'A Personal Portfolio Website in React.js that displays my talents to the world!',
    'link': 'NONE',
    'image': 'Verisign.jpg'
  }
]

const experienceContent = (
  <div>
      <div className="projects-container">
          {experiences
              .map((experience) => (
                  <Experience
                      title={experience.title}
                      description={experience.description}
                      image={experience.image}
                  />
              ))}
      </div>
  </div>
);

const projectsContent = (
  <div className="projects-container">
      {projects.map((project) => (
          <Project
              title={project.title}
              description={project.description}
              image={project.image}
              projectLink={project.projectLink}
          />
      ))}
  </div>
);


const contactContent = (
<div className="contact-content">
    <div className="contact-info">
        <div className="contact-item">
            <h3>Email</h3>
            <a href="mailto:trbongiorno@gmail.com">trbongiorno@gmail.com</a>
        </div>
        <div className="contact-item">
            <h3>LinkedIn</h3>
            <a href="www.linkedin.com/in/thomas-bongiorno-90b283298" target="_blank" rel="noopener noreferrer">
                www.linkedin.com/in/thomas-bongiorno-90b283298
            </a>
        </div>
        <div className="contact-item">
            <h3>GitHub</h3>
            <a href="https://github.com/tbongiorno" target="_blank" rel="noopener noreferrer">
                https://github.com/tbongiorno
            </a>
        </div>
    </div>
</div>
);


function App() {
  const [activeTab, setActiveTab] = useState('experience')


return (
  <div>
    <p className="ascii-art">
    Thomas Bongiorno
    </p>
    <br/>
    <img
      /// Change below to jpg of me
      src={"headshot.jpg"}
      className="profile-image"
      alt="Profile"
      width="400"
      height="400"
    />
      <div className="tabs-container">
          <div className="tabs-header">

              <button
                  className={`tab-button ${activeTab === 'experience' ? 'active' : ''}`}
                  onClick={() => setActiveTab('experience')}
              >
                  Experience
              </button>
              <button
                  className={`tab-button ${activeTab === 'projects' ? 'active' : ''}`}
                  onClick={() => setActiveTab('projects')}
              >
                  Projects
              </button>

              <button
                  className={`tab-button ${activeTab === 'contact' ? 'active' : ''}`}
                  onClick={() => setActiveTab('contact')}
              >
                  Contact Me
              </button>
          </div>
          <div className="tab-content">
              {activeTab === 'experience' && experienceContent}
              {activeTab === 'projects' && projectsContent}
              {activeTab === 'contact' && contactContent}
          </div>
      </div>
  </div>
);
}
export default App