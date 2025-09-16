import React from 'react';

function GuessResults({ guessList }) {
  return <div className="guess-results">
    {guessList.map(guess => (
      <div className="guess" key={guess.id}>
        {guess.guess}
      </div>
    ))}
  </div>;
}

export default GuessResults;
