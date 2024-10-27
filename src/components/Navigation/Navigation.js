import React from 'react';
import './Navigation.css';

function Navigation() {
  return (
    <nav>
      <div className="hover-content">
        <h2>Contents</h2>
        <h3>PART ONE</h3>
        <ol>
          <li><a href="#" className="active">A SHIFTING REEF</a></li>
          <li><a href="#">PRO AND CON</a></li>
          <li><a href="#">I FORM MY RESOLUTION</a></li>
          <li><a href="#">NED LAND</a></li>
          <li><a href="#">AT A VENTURE</a></li>
          <li><a href="#">AT FULL STEAM</a></li>
        </ol>
      </div>
      <div>
        <img src="https://content.codecademy.com/courses/freelance-1/unit-6/triangle.png" alt="triangle" />
      </div>
    </nav>
  );
}

export default Navigation;
