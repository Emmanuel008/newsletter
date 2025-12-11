import React, { useState, useEffect } from 'react';
import { HiMail, HiGlobe } from 'react-icons/hi';
import './css/NewSection.css';

const NewSection = () => {
  const [expandedCard, setExpandedCard] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const cards = [
    {
      id: 'youthteam',
      title: 'Youth TeamUp Innovation Project',
      image: '/assets/img/mbili.jpeg',
      content: (
        <p>
          The Youth TeamUp initiative was launched in partnership with the University of Dar es Salaam, 
          Constructor University (Germany), Copper Belt University (Zambia), and EduLife (Italy). The 
          project seeks to empower young people by equipping them with entrepreneurial skills, helping 
          them transform innovative ideas into impactful and sustainable businesses. This initiative has 
          created opportunities for collaboration and networking among youth from different backgrounds 
          and countries.
        </p>
      )
    },
    {
      id: 'agritech',
      title: 'Tanzania Agritech and Food System Incubator – Kibaha Workshop',
      image: '/assets/img/tatu.jpeg',
      content: (
        <p>
          DTBi successfully conducted a capacity-building workshop in Kibaha under the Tanzania Agritech and Food System Incubator project. The training focused on advancing agritech innovations, sustainability practices, and the understanding of Intellectual Property (IP) protection. Participants engaged in sessions on IoT-based farming solutions, value chain digitization, and business modeling. The IP awareness session emphasized the importance of safeguarding innovations through patents, trademarks, and copyrights. The workshop strengthened collaboration among innovators and regional stakeholders while promoting inclusive agricultural innovation.
        </p>
      )
    },
    {
      id: 'code-future',
      title: 'Code for Future Workshop',
      image: '/assets/img/nne.jpeg',
      content: (
        <p>
          The Code for Future Workshop introduced young participants to computer programming, robotics, and Internet of Things (IoT). DTBi trainers guided students through hands-on exercises that encouraged creative problem-solving and teamwork. The workshop not only inspired digital literacy but also empowered youth to pursue technology-driven solutions for community challenges. This initiative aligns with DTBi's long-term goal of nurturing a generation of skilled digital innovators.
        </p>
      )
    },
    {
      id: 'coict',
      title: 'CoICT – DTBi Innovation Handover Event',
      image: '/assets/img/coict.jpeg',
      content: (
        <p>
          In collaboration with the College of Information and Communication Technologies (CoICT), DTBi hosted the Innovation Handover Event in October 2025. The event marked the official transition of student-led innovations into DTBi's incubation program for further development. It celebrated the partnership between academia and industry and emphasized the value of supporting young innovators to turn research projects into market-ready products. The handover represents DTBi's ongoing dedication to bridging the gap between academic research and practical entrepreneurship.
        </p>
      )
    },
    {
      id: 'sbt',
      title: 'Presentation to the Sugar Board of Tanzania (SBT)',
      image: '/assets/img/board.jpeg',
      content: (
        <>
          <p>
            DTBi presented the Sugar Management System, a platform designed to streamline sugar production monitoring and enhance supply chain visibility.
          </p>
          <p>
            The presentation generated valuable feedback that will guide system improvement and alignment with sector needs.
          </p>
        </>
      )
    },
    {
      id: 'nairobi',
      title: 'Training Session for Cohort II – Nairobi Polytechnic (Vocalize IoT Project)',
      image: '/assets/img/arusha.jpeg',
      content: (
        <>
          <p>
            As part of the Vocalize IoT Project, DTBi supported training that included:
          </p>
          <ul className="new-section-list">
            <li>IoT sensor programming</li>
            <li>Data transmission</li>
            <li>Network integration</li>
            <li>Hybrid learning models</li>
          </ul>
          <p>
            The activity strengthened cross-border knowledge exchange and empowered youth across East Africa to build IoT-driven solutions.
          </p>
        </>
      )
    },
    {
      id: 'apaic',
      title: 'Africa Premier Artificial Intelligence Conference (APAIC 2025) – Arusha',
      image: '/assets/img/arusha.jpeg',
      content: (
        <>
          <p>
            Africa is stepping into a new era of innovation, and DTBi was part of this transformation.
          </p>
          <p>
            The Africa Premier Artificial Intelligence Conference (APAIC 2025), held 24–27 November 2025 at the Arusha International Conference Centre, brought together:
          </p>
          <ul className="new-section-list">
            <li>AI experts</li>
            <li>Innovators</li>
            <li>Policymakers</li>
            <li>Technology leaders</li>
          </ul>
          <p>
            The event focused on the future of AI in:
          </p>
          <ul className="new-section-list">
            <li>Education</li>
            <li>Smart systems</li>
            <li>National digital transformation</li>
          </ul>
          <p>
            DTBi's participation strengthened its visibility in continental AI discussions and opened new avenues for collaboration.
          </p>
        </>
      )
    }
  ];

  // Auto-scroll functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => {
        const nextIndex = (prev + 1) % cards.length;
        return nextIndex;
      });
      setExpandedCard(null);
    }, 5000); // Auto-scroll every 5 seconds

    return () => clearInterval(interval);
  }, [cards.length]);

  const handleCardClick = (cardId) => {
    setExpandedCard(cardId);
  };

  const closeModal = () => {
    setExpandedCard(null);
  };

  // Get 3 cards to display (current, next, previous)
  const getVisibleCards = () => {
    const visible = [];
    for (let i = -1; i <= 1; i++) {
      const index = (currentIndex + i + cards.length) % cards.length;
      visible.push({ ...cards[index], displayIndex: index });
    }
    return visible;
  };

  const visibleCards = getVisibleCards();

  return (
    <div className="new-section-container">
      <div className="carousel-container">
        <div className="cards-row">
          {visibleCards.map((card, idx) => (
            <div 
              key={card.id}
              className={`card-wrapper ${idx === 1 ? 'active' : ''}`}
            >
              <div
                className={`custom-card ${idx === 1 ? 'active' : ''}`}
                onClick={() => handleCardClick(card.id)}
              >
                {card.image && (
                  <img 
                    src={card.image} 
                    alt={card.title}
                    className="custom-card-image"
                  />
                )}
                <div className="custom-card-body">
                  <h5 className="custom-card-title">
                    {card.title}
                  </h5>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal Popup */}
      {expandedCard && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeModal} aria-label="Close modal">
              ×
            </button>
            {(() => {
              const selectedCard = cards.find(card => card.id === expandedCard);
              if (!selectedCard) return null;
              return (
                <>
                  {selectedCard.image && (
                    <div className="modal-image-container">
                      <img 
                        src={selectedCard.image} 
                        alt={selectedCard.title}
                        className="modal-image"
                      />
                    </div>
                  )}
                  <div className="modal-body">
                    <h2 className="modal-title">{selectedCard.title}</h2>
                    <div className="modal-description">
                      {selectedCard.content}
                    </div>
                  </div>
                </>
              );
            })()}
          </div>
        </div>
      )}

      {/* Additional Sections */}
      <div className="additional-sections">
        {/* New Incubatees */}
        <div className="additional-section-item">
          <h2 className="additional-section-headline">New Incubatees</h2>
          <p>
            In 2025, DTBi welcomed new innovators into its incubation program:
          </p>
          <ul className="new-section-list">
            <li>Four innovators admitted through COSTECH under the MAKISATU program.</li>
            <li>Five female innovators admitted through the FEMTECH program, all focusing on technology-driven solutions.</li>
          </ul>
          <p>
            These additions reflect our ongoing commitment to inclusivity, gender equity, and promoting youth-led enterprises in the tech ecosystem.
          </p>
        </div>

        {/* Office Rental for Startups */}
        <div className="additional-section-item">
          <h2 className="additional-section-headline">Office Rental for Startups</h2>
          <p>
            DTBi is now offering startups office spaces at a fair and affordable price, providing a professional working environment that supports innovation, productivity, and growth.
          </p>
        </div>

        {/* Exhibitions & Events in 2025 */}
        <div className="additional-section-item">
          <h2 className="additional-section-headline">Exhibitions & Events in 2025</h2>
          <p>
            This year, DTBi has actively participated in national and international exhibitions, providing visibility to our projects and innovators. Key events include:
          </p>
          <ul className="new-section-list">
            <li><strong>FinTech Exhibitions:</strong> Demonstrating DTBi's incubation programs and showcasing the progress of our incubatees.</li>
            <li><strong>Innovation Week:</strong> Engaging with stakeholders, innovators, and partners to share lessons, explore collaboration, and display ongoing projects that are shaping Tanzania's innovation landscape.</li>
          </ul>
        </div>

        {/* Preparatory Meeting for the Tanzania IPR Summit 2026 */}
        <div className="additional-section-item">
          <h2 className="additional-section-headline">Preparatory Meeting for the Tanzania IPR Summit 2026</h2>
          <p>
            DTBi took part in the planning and coordination of the upcoming Tanzania IPR Summit, a national platform expected to bring together key stakeholders in:
          </p>
          <ul className="new-section-list">
            <li>Intellectual Property</li>
            <li>Innovation</li>
            <li>Research</li>
            <li>Industry</li>
            <li>Creative sectors</li>
          </ul>
          <p>
            During November, the team successfully held a strategic meeting to discuss:
          </p>
          <ul className="new-section-list">
            <li>Event structure</li>
            <li>Partner involvement</li>
            <li>Sponsorship acquisition</li>
            <li>Proposed agenda and themes</li>
          </ul>
          <p>
            DTBi is currently in the process of identifying and signing sponsors to support the summit.
          </p>
          <p>
            The event aims to strengthen IP awareness, drive the commercialization of innovations, and enhance national competitiveness in the innovation ecosystem.
          </p>
        </div>

        {/* Looking Ahead */}
        <div className="additional-section-item">
          <h2 className="additional-section-headline">Looking Ahead</h2>
          <p>
            From next year, DTBi will also have office space available for a limited number of companies whose work creates meaningful impact for startups. These companies will be able to rent space within DTBi offices to enhance collaboration and ecosystem development.
          </p>
          <p>
            As we close November and move toward the new year, DTBi will continue to:
          </p>
          <ul className="new-section-list">
            <li>Expand innovation programs</li>
            <li>Strengthen incubation support</li>
            <li>Enhance national and regional partnerships</li>
            <li>Promote IP awareness and technology adoption</li>
            <li>Prepare for major events including the Tanzania IPR Summit 2026</li>
          </ul>
          <p>
            DTBi remains committed to enabling innovators and creating sustainable pathways for technology-driven transformation.
          </p>
          <p>
            DTBi remains committed to driving innovation and supporting youth-led enterprises through technology and mentorship. As we move forward, we aim to expand our incubation programs, enhance coding and agritech training, and strengthen national and international collaborations. Together, we are building a resilient innovation ecosystem that empowers Tanzanian innovators to shape a sustainable digital future.
          </p>
          <p className="contact-info-text">
            <strong>Dar Teknohama Business Incubator (DTBi)</strong>
            <span className="contact-separator">|</span>
            <span className="contact-item">
              <HiMail className="contact-icon" />
              <a href="mailto:admin@teknohama.or.tz" className="contact-link">admin@teknohama.or.tz</a>
            </span>
            <span className="contact-separator">|</span>
            <span className="contact-item">
              <HiGlobe className="contact-icon" />
              <a href="https://teknohama.or.tz/" target="_blank" rel="noopener noreferrer" className="contact-link">https://teknohama.or.tz/</a>
            </span>
          </p>
          <div className="contact-image-container">
            <img 
              src="/assets/img/nane.png" 
              alt="DTBi" 
              className="contact-image"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewSection;
