import React from 'react';
import Definition from '../Definition/Definition';
import './Chapter.css';

function Prose({ content }) {
  return (
    <div className="prose">
      {content.split(' ').map((word, index) =>
        word.toLowerCase() === 'phosphorescent' ? (
          <Definition key={index} word={word} />
        ) : (
          `${word} `
        )
      )}
    </div>
  );
}

export default Prose;
