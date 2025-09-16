import React from 'react';
import Guess from '../Guess/Guess';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';
import { range } from '../../utils';

function GuessResults({ guessList }) {
  return <div className="guess-results">
    {range(NUM_OF_GUESSES_ALLOWED).map(guess => (
      <Guess guess={guessList[guess]} key={guess} />
    ))}
  </div>;
}

export default GuessResults;
