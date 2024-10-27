import React from 'react';
import './Definition.css';

function Definition({ word }) {
  return (
    <div className="definable">
      <span className="word">{word}</span>
      <div className="definition-container">
        <h4>phosphorescent</h4>
        <span className="information">adjective | phos·pho·res·cent</span>
        <ul className="definitions">
          <li>
            Exhibiting a luminescence that is caused by the absorption of
            radiations (as light or electrons) and continues for a
            noticeable time after these radiations have stopped.
          </li>
          <li>Exhibiting an enduring luminescence without sensible heat.</li>
        </ul>
      </div>
    </div>
  );
}

export default Definition;
