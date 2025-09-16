import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import GuessInput from '../GuessInput/GuessInput';
import GuessResults from '../GuessResults/GuessResults';
import GameOverBanner from '../GameOverBanner/GameOverBanner';
import { NUM_OF_GUESSES_ALLOWED, GAME_OVER_STYLE_HAPPY, GAME_OVER_STYLE_SAD } from '../../constants';
import { checkGuess } from '../../game-helpers';


// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guessList, setGuessList] = React.useState([]);
  const [gameState, setGameState] = React.useState({
    isGameOver: false,
    style: ''
  });

  function handleGuess(guess) {
    if (guessList.length >= NUM_OF_GUESSES_ALLOWED) return;

    const checkGuessResult = checkGuess(guess, answer);

    const newGuessChecked = checkGuessResult.map(guess => {
      return {
        ...guess,
        id: crypto.randomUUID(),
      }
    });

    const nextGuesses = [...guessList, newGuessChecked];
    setGuessList(nextGuesses);
    checkGameOver(newGuessChecked);
  }

  function checkGameOver(newGuessChecked) {
    const isAllCorrect = newGuessChecked.every(guess => guess.status === 'correct');

    if (!isAllCorrect) {
      if (guessList.length === NUM_OF_GUESSES_ALLOWED - 1) {
        setGameState({
          isGameOver: true,
          style: GAME_OVER_STYLE_SAD
        });
      }
    } else {
      setGameState({
        isGameOver: true,
        style: GAME_OVER_STYLE_HAPPY
      });
    }
  }

  return <>
    <GuessResults guessList={guessList} />
    <GuessInput handleGuess={handleGuess} isGameOver={gameState.isGameOver} />
    {gameState.isGameOver && <GameOverBanner count={guessList.length} style={gameState.style} answer={answer} />}
  </>;
}

export default Game;
