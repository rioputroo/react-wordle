import React from 'react';
import { range } from '../../utils';

function Guess({ guess }) {
  let guessArray = ['', '', '', '', ''];

  if (guess) {
    guessArray = guess.guess.split('');
  }

  return <p className="guess">
    {range(5).map((v) => (
      <span className="cell" key={v}>{guessArray[v]}</span>
    ))}
  </p>;
}

export default Guess;
