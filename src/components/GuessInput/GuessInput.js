import React from 'react';

function GuessInput() {
  const [guess, setGuess] = React.useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('GUESS:', guess);
    if (guess.length !== 5) {
      console.log('GUESS MUST BE 5 LETTERS');
      return;
    }
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
