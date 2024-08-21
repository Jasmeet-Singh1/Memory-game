import React, { useEffect, useState } from 'react';

export default function MemoryGame(props) {
  const { images } = props;
  const [flipped, setFlipped] = useState([]);

  useEffect(() => {
    if (flipped.length % 2 === 0) {
      const first = flipped[flipped.length - 1];
      const second = flipped[flipped.length - 2];
      if (first + 6 == second || first - 6 == second) {
        console.log('ok');
      } else {
        setFlipped([]);
      }
    }
  }, [flipped.length]);

  function handleFlip(index) {
    setFlipped((prev) => [...prev, index]);
  }

  console.log('flippedIndex', flipped);
  return (
    <div className='grid grid-cols-4 w-fit gap-[25px] bg-indigo-400 rounded-sm p-10 ml-[450px]'>
      {images.map((image, index) => {
        const isOpened = flipped.includes(index);
        return (
          <img
            className='h-40 w-40 '
            src={isOpened ? image : ''}
            key={index}
            onClick={() => handleFlip(index)}
          ></img>
        );
      })}
      {flipped.length === 12 && alert('Congrats, you won the game')}
    </div>
  );
}
