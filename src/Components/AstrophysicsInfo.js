import React from 'react';

const AstrophysicsInfo = () => {
  return (
    <div style={{top: "1vh", padding: "2vw"}}>
      <h2>AI in Astrophysics - Where Do We Stand and What Can We Create?</h2>
      <p>
        This is a presentation that Reyna did for her Mobile Application Development class where she introduces how AI is being used in Astrophysics. The presentation covers the basics of AI and its applications in understanding the universe.
      </p>
      <iframe 
        src="https://docs.google.com/presentation/d/e/2PACX-1vRSf9xNF38lZvkEjQFLvxtrlZT7wC2fjy0HyQ9nTZGHr-GcR86tLUtMa59F1hyVnLdFAlEqW-GK0D1V/embed?start=false&loop=false&delayms=3000" 
        width="960" 
        height="569" 
        frameBorder="0" 
        allowFullScreen="true"
        mozallowfullscreen="true"
        webkitallowfullscreen="true"
        title="AI in Astrophysics Presentation"
      ></iframe>
    </div>
  );
};

export default AstrophysicsInfo;
