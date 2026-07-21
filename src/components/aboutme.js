import React from 'react';

function About() {
  return (
    <div className="about-body">
      <div className="about-grid">
        <div className="cell">
          <h2>About Me</h2>
        </div>
      </div>
      <div>
        <div className="cell">
          <div className="short-info" style={{visibility: 'visible', animationName: 'fadeInUp'}}>
            <h3>Personal Statement</h3>
            <p>
              I am an energetic, ambitious and adventure loving person who has
              developed a mature sense of self-reliance and work efficiency. I
              am excellent in working both individually and with others to
              achieve a certain objective on time and with excellence.
            </p>
          </div>
          <div className="short-info" style={{visibility: 'visible', animationName: 'fadeInUp'}}>
            <h3>What I Do ?</h3>
            <ul className="list-check">
              <li>Frontend Development</li>
              <li>Backend Development</li>
              <li>Responsiveness and Accessibility</li>
              <li>Database Design</li>
              <li>Cross Browser Compatibility</li>
              <li>Testing and Documentation</li>
            </ul>
          </div>
          <div className="short-info" style={{visibility: 'visible', animationName: 'fadeInUp'}}>
            <h3>Interests</h3>
            <p>
              I am very much interested in keeping up with the trends in
              Software Industry. These days, I'm learning NodeJS.<br></br>When I'm
              not sitting in front of my computer, I love to read books, watch
              movies, play cricket, hangout with friends and travel across the
              country.
            </p>
          </div>
          <div className="download-button">
            <button style={{marginRight:'15px'}}>
              <i className="fa fa-download">View CV</i> 
            </button> 
            <button style={{marginRight:'15px'}}>
              <i className="fa fa-download">Download CV</i> 
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;