import React from 'react';
import { GAME_OVER_STYLE_HAPPY, GAME_OVER_STYLE_SAD } from '../../constants';

function GameOverBanner({ count, style, answer }) {
  const [isHidden, setIsHidden] = React.useState('');

  setTimeout(() => {
    setIsHidden('visually-hidden');
  }, 3000);

  return <div className={`banner ${style} ${isHidden}`}>
    {style === GAME_OVER_STYLE_HAPPY && (
      <p>
        <strong>Congratulations!</strong> Got it in
        {' '}
        <strong>{count} guesses</strong>.
      </p>)}

    {style === GAME_OVER_STYLE_SAD && (
      <p>
        <strong>Sorry, the correct answer is <strong>{answer.toUpperCase()}</strong></strong>
      </p>)
    }
  </div >;
}

export default GameOverBanner;
