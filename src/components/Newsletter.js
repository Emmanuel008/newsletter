import React from 'react';
import './css/Newsletter.css';
import NewSection from './NewSection';

const Newsletter = () => {
  return (
    <div className="newsletter-container">
      {/* Page 1 - Front Cover */}
      <div className="newsletter-page page-1">
        <div className="page-header">
          <div className="header-right">
            <div className="logo-container">
              <img 
                src="/assets/img/logo.png" 
                alt="Logo" 
                className="logo-image"
              />
              <p className="academy-name">NEWSLETTER </p>
            </div>
          </div>
        </div>

        <div className="main-content">
          <div className="vocalize-card">
            <div className="main-image-container">
              <img 
                src="/assets/img/moja.jpeg" 
                alt="Children running with backpacks" 
                className="main-image"
              />
            </div>
            
            <h2 className="main-headline">VOCALIZE IoT Project</h2>
            
            <div className="main-article">
              <p>
                This collaborative project between African and European partners aims at strengthening 
                the capacity of VET centers to better align with both private and public sector needs. 
                The project package includes:
              </p>
              <ul className="project-list">
                <li>VET Hybrid Solution Lab</li>
                <li>VET Capacity Building Program</li>
                <li>VET Learner Curriculum</li>
              </ul>
              <p>
                In addition, DTBi carried out a Needs Assessment Survey in partnership with SIDO and 
                VETA Kipawa, engaging startups, SMEs, and industries to understand capacity gaps. The 
                project remains ongoing, with a focus on building IoT skills among the youth to support 
                their employability in emerging technologies.
              </p>
            </div>
          </div>

          {/* Cards Section (includes YouthTeam) */}
          <NewSection />
        </div>
      </div>

    </div>
  );
};

export default Newsletter;

