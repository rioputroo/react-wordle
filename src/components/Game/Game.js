import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import GuessInput from '../GuessInput/GuessInput';
import GuessResults from '../GuessResults/GuessResults';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guessList, setGuessList] = React.useState([]);

  function handleGuess(guess) {
    if (guessList.length >= NUM_OF_GUESSES_ALLOWED) return;
    const newGuess = {
      guess,
      id: crypto.randomUUID(),
    }

    const nextGuesses = [...guessList, newGuess];
    setGuessList(nextGuesses);
  }

  return <>
    <GuessResults guessList={guessList} answer={answer} />
    <GuessInput handleGuess={handleGuess} />
  </>;
}

export default Game;
