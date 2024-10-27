import React from 'react';
import './Chapter.css';

function Chapter({ number, name }) {
  return (
    <div className="chapter">
      <span className="number">{number}</span>
      <span className="name">{name}</span>
    </div>
  );
}

export default Chapter;
