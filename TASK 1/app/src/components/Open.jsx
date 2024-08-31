import React, { useEffect } from 'react';
import gsap from 'gsap';
import '../App.css';
import open from '../assets/photos/openpicture.jpg';

const Open = () => {
  const createTiles = () => {
    const rows = 5; // Number of rows
    const cols = 5; // Number of columns
    const tiles = [];

    for (let row = 0; row < rows; row++) {
      for (let col = 0; col < cols; col++) {
        tiles.push(
          <div
            key={`${row}-${col}`}
            className="tile"
            style={{
              backgroundImage: `url(${open})`,
              backgroundPosition: `${(col / (cols - 1)) * 100}% ${(row / (rows - 1)) * 100}%`,
            }}
            data-row={row}
            data-col={col}
          />
        );
      }
    }
    return tiles;
  };

  useEffect(() => {
    const tiles = document.querySelectorAll('.tile');
    tiles.forEach(tile => {
      const row = parseInt(tile.getAttribute('data-row'));
      const col = parseInt(tile.getAttribute('data-col'));
      let xMove = 0;
      let yMove = 0;

      if (col < 2) {
        xMove = -2000; // Move left
      } else if (col > 2) {
        xMove = 2000; // Move right
      }

      if (row < 2) {
        yMove = -2000; // Move up
      } else if (row > 2) {
        yMove = 2000; // Move down
      }

      // For middle tiles, move them diagonally outwards
      if (row === 2 && col === 2) {
        xMove = gsap.utils.random(-5000, 5000);
        yMove = gsap.utils.random(-5000, 5000);
      } else if (row === 2) {
        yMove = gsap.utils.random(-5000, 5000);
      } else if (col === 2) {
        xMove = gsap.utils.random(-5000, 5000);
      }

      gsap.to(tile, {
        duration: 1.5,
        delay: 1,
        x: xMove,
        y: yMove,
        ease: 'power2.inOut',
        stagger: 0.1,
        onComplete: () => {
          document.querySelector('.open-container').style.display = 'none';
        }
      });
    });
  }, []);

  return <div className="open-container">{createTiles()}</div>;
};

export default Open;
