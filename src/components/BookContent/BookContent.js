import React from 'react';
import './BookContent.css';
import Chapter from './Chapter';
import Prose from './Prose';

function BookContent() {
  return (
    <div className="book-content">
      <h3>Part One</h3>
      <Chapter number="CHAPTER I" name="A SHIFTING REEF" />
      <Prose content="The year 1866 was signalised by a remarkable incident, a mysterious and puzzling phenomenon..." />
      {/* Add more prose or chapter components as needed */}
    </div>
  );
}

export default BookContent;
