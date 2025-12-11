import React from 'react';
import './css/YouthTeam.css';

const YouthTeam = () => {
  return (
    <div className="youthteam-container">
      <div className="youthteam-section">
        <h2 className="youthteam-headline">Youth TeamUp Innovation Project</h2>
        
        <div className="youthteam-content-grid">
          <div className="youthteam-description">
            <p>
              The Youth TeamUp initiative was launched in partnership with the University of Dar es Salaam, 
              Constructor University (Germany), Copper Belt University (Zambia), and EduLife (Italy). The 
              project seeks to empower young people by equipping them with entrepreneurial skills, helping 
              them transform innovative ideas into impactful and sustainable businesses. This initiative has 
              created opportunities for collaboration and networking among youth from different backgrounds 
              and countries.
            </p>
          </div>
          
          <div className="youthteam-image-container">
            <img 
              src="/assets/img/mbili.jpeg" 
              alt="Youth TeamUp Innovation Project" 
              className="youthteam-image"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default YouthTeam;

