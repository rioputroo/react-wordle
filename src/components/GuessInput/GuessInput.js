import React from 'react';

function GuessInput({ handleGuess }) {
  const [guess, setGuess] = React.useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    if (guess.length !== 5) {
      console.warn('GUESS MUST BE 5 LETTERS');
      return;
    }

    handleGuess(guess);

    setGuess('');
  };

  return <div className="guess-input-wrapper">
    <form onSubmit={handleSubmit}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input id="guess-input" type="text" pattern="[A-Z]{5}" value={guess} onChange={(event) => setGuess(event.target.value.toUpperCase())} />
    </form>
  </div>;
}

export default GuessInput;
