import React from 'react';

const IndianPlayers = () => {
  const oddPlayers = ['Kohli', 'Rahul', 'Jadeja', 'Shami', 'Gill'];
  const evenPlayers = ['Rohit', 'Bumrah', 'Iyer', 'Pant', 'Pandya', 'Chahal'];

  const [first, , third, , fifth] = oddPlayers;
  const [second, , fourth, , sixth] = evenPlayers;

  const T20players = ['Surya', 'Tilak'];
  const RanjiPlayers = ['Sarfaraz', 'Abhimanyu'];
  const merged = [...T20players, ...RanjiPlayers];

  return (
    <div>
      <h2>Destructured Odd Team Players</h2>
      <ul><li>{first}</li><li>{third}</li><li>{fifth}</li></ul>

      <h2>Destructured Even Team Players</h2>
      <ul><li>{second}</li><li>{fourth}</li><li>{sixth}</li></ul>

      <h2>Merged Players (T20 + Ranji)</h2>
      <ul>{merged.map((p, i) => <li key={i}>{p}</li>)}</ul>
    </div>
  );
};

export default IndianPlayers;