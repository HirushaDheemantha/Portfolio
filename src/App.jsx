import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Technologies from './components/Technologies';
import Experience from './components/Experience';
import Projects from './components/Projects';
import GetInTouch from './components/Footer';

const App = () => {
  const [circle1Pos, setCircle1Pos] = useState({ x: 0, y: 0 });
  const [circle2Pos, setCircle2Pos] = useState({ x: 0, y: 0 });
  const circleColor = 'rgba(127, 0, 255, 0.5)'; // Neon purple with some transparency

  useEffect(() => {
    const moveCircles = () => {
      const maxX = window.innerWidth * 0.8; // Keep circles within bounds
      const maxY = window.innerHeight * 0.8;

      setCircle1Pos({
        x: Math.random() * maxX,
        y: Math.random() * maxY,
      });

      setCircle2Pos({
        x: Math.random() * maxX,
        y: Math.random() * maxY,
      });
    };

    const intervalId = setInterval(moveCircles, 3000); // Move every 3 seconds

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900 relative">
      <div className="fixed top-0 left-0 -z-10 h-full w-full bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>

      {/* Moving Neon Circles */}
      <div className="fixed top-0 left-0 -z-10 h-full w-full pointer-events-none">
        <div
          className="absolute rounded-full"
          style={{
            top: circle1Pos.y,
            left: circle1Pos.x,
            width: '300px', // Increased size
            height: '300px', // Increased size
            backgroundColor: circleColor,
            filter: `blur(70px)`, // Adjusted blur for larger size
            opacity: 0.8,
            transform: 'translate(-50%, -50%)', // Center the circle
            transition: 'top 3s ease-in-out, left 3s ease-in-out', // Smooth transition
          }}
        ></div>
        <div
          className="absolute rounded-full"
          style={{
            top: circle2Pos.y,
            left: circle2Pos.x,
            width: '375px', // Increased size
            height: '375px', // Increased size
            backgroundColor: circleColor,
            filter: `blur(80px)`, // Adjusted blur for larger size
            opacity: 0.7,
            transform: 'translate(-50%, -50%)', // Center the circle
            transition: 'top 3s ease-in-out, left 3s ease-in-out', // Smooth transition
          }}
        ></div>
      </div>

      <div className="container mx-auto px-7 relative">
        <Navbar />
        <Hero />
        <About />
        <Technologies />
        <Experience />
        <Projects />
        <GetInTouch />
      </div>
    </div>
  );
};

export default App;