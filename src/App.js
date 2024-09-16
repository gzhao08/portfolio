import React from 'react';
import './App.css'; // Assuming you have a CSS file for styling
import logo from "./gz-full_logo.png";
import profilePic from "./china-photo-cropped.JPG";

const App = () => {
  return (
    <div className="main">
      <div className='profilePic'>
        <img src={profilePic} alt="Profile" className="circular-image"/>
      </div>
      <div className="image-container">
          		<img src={logo} alt="Profile" className="logo"/>
      </div>
      <h1>Gordon Zhao</h1>
    </div>
  );
}

export default App;
