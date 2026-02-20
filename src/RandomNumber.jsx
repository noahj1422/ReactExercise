import React, { useState } from 'react';

function RandomNumberButton() {
  const [number, setNumber] = useState(null);

  const generateRandomNumber = () => {
    setNumber(Math.floor(Math.random() * 100) + 1);
  };

  return (
    <div class="random-number">
      <button onClick={generateRandomNumber}>Generate Random Number</button>
      {number !== null && <p class ="random-number">Random Number: {number}</p>}
    </div>
  );
}

export default RandomNumberButton;