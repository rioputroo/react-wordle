import React from 'react';
import { range } from '../../utils';

function Guess({ guess }) {
  const guessArray = guess ? guess : ['', '', '', '', ''];

  return <p className="guess">
    {range(5).map((v) => (
      <span className={`cell ${guessArray[v].status || ''}`} key={v}>{guessArray[v].letter}</span>
    ))}
  </p>;
}

export default Guess;
