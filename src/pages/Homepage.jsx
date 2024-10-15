// Homepage.jsx
// import React from 'react';
import Header from '../components/Header';
import AnimationSlideshow from '../components/AnimationSlideshow';
import '../styles/Homepage.css';
import '../styles/global.css'; // Import global styles

function Homepage() {
  return (
    <div className="container"> {/* Use the container class */}
      <Header />
      <AnimationSlideshow />
      {/* Other components or content will go here */}
    </div>
  );
}

export default Homepage;
