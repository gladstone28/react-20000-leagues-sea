import React from 'react';
import './NavigationButtons.css';

function NavigationButtons() {
  return (
    <div className="navigation-buttons">
      <a href="#" className="button">
        <img
          src="https://content.codecademy.com/courses/freelance-1/unit-6/left_arrow.svg"
          alt="left arrow"
        />
        <span className="action">Back</span>
      </a>
      <a href="#" className="button">
        <span className="action">Next</span>
        <img
          src="https://content.codecademy.com/courses/freelance-1/unit-6/right_arrow.svg"
          alt="right arrow"
        />
      </a>
    </div>
  );
}

export default NavigationButtons;
