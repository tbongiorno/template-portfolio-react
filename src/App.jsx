import { useState } from 'react'
import Experience from './experience.jsx'
import Project from './project.jsx'
import Contact from './contact.jsx'

import './App.css'

const experiences = [
  ///Update Below and Map Correctly and Set Correct Images
  {
    'key':1,
    'title': 'Bongiornos Italian Pizzaria',
    'description':'My Extended Families Pizzaria in Chicago that I worked at for 10+ years!',
    'image': 'src/assets/bongiorno.png'
  },
  {
    'key':2,
    'title': 'Lantern Hill: Senior Living',
    'description':'A senior living facility where I would serve food to residents at one of the 3 on campus restauraunts!',
    'image': 'src/assets/erickson.jpg'
  },
]
const projects = [
  {
    'key':1,
    'title': 'Video Game Wishlist Maker',
    'description':'Flask website that allows users to create their own video game wishlists!',
    'link': 'https://github.com/tbongiorno/Game-Wishlist-Ranker',
    'image': 'src/assets/flask-name.svg',
    'complete': true,
  },
  {
    'key':2,
    'title': 'Portfolio Website',
    'description':'A Personal Portfolio Website in React.js that displays my talents to the world!',
    'link': 'https://github.com/tbongiorno/template-portfolio-react',
    'image': 'src/assets/react.png',
    'complete': true,
  },
  {
    'key':3,
    'title': 'Solitaire',
    'description':'A remake of Solitaire in Godot!',
    'link': 'https://github.com/tbongiorno/template-portfolio-react',
    'image': 'src/assets/checkbacksoon.jpg',
    'complete': false,
  },
]
const contacts = [
  {
    'key': 1,
    'platform': 'Email',
    'url': 'trbongiorno@gmail.com'
  },
  {
    'key': 2,
    'platform': 'LinkedIn',
    'url': 'https://www.linkedin.com/in/thomas-bongiorno-90b283298/'
  },
  {
    'key': 3,
    'platform': 'GitHub',
    'url': 'https://github.com/tbongiorno'
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
  <div>
      <div className="projects-container">
            {projects.map((project) => (
                <Project
                    title={project.title}
                    description={project.description}
                    image={project.image}
                    projectLink={project.link}
                    completed={project.complete}
                />
            ))}
        </div>
  </div>
  
);


const contactContent = (
  <div>
      <div className="contact-content">
          {contacts.map((contact) => (
            <Contact
              platform={contact.platform}
              url={contact.url}
            />
          ))}
      </div>
  </div>
  
);


function App() {
  const [activeTab, setActiveTab] = useState('experience')


return (
  <div>
    <div className="heading-container">
      <p className="ascii-art"> Thomas Bongiorno </p>
      <br/>
      <img
        src={"src/assets/mypic.jpg"}
        className="profile-image"
        alt="Profile"
        width="400"
        height="400"
      />
    </div>
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