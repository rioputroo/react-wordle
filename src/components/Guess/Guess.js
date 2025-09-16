import React from 'react';
import { range } from '../../utils';
import { checkGuess } from '../../game-helpers';

function Guess({ guess, answer }) {
  let guessArray = ['', '', '', '', ''];

  if (guess) {
    guessArray = checkGuess(guess.guess, answer);
  }

  return <p className="guess">
    {range(5).map((v) => (
      <span className={`cell ${guessArray[v].status || ''}`} key={v}>{guessArray[v].letter}</span>
    ))}
  </p>;
}

export default Guess;
