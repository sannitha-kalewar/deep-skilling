import React from 'react';

const ListofPlayers = () => {
  const players = [
    { name: 'Virat Kohli', score: 85 },
    { name: 'Rohit Sharma', score: 95 },
    { name: 'Jasprit Bumrah', score: 60 },
    { name: 'KL Rahul', score: 78 },
    { name: 'Ravindra Jadeja', score: 45 },
    { name: 'Shreyas Iyer', score: 65 },
    { name: 'Rishabh Pant', score: 88 },
    { name: 'Mohammed Shami', score: 55 },
    { name: 'Hardik Pandya', score: 98 },
    { name: 'Shubman Gill', score: 71 },
    { name: 'Yuzvendra Chahal', score: 68 }
  ];

  const filteredPlayers = players.filter(player => player.score >= 70);

  return (
    <div>
      <h2>All Players</h2>
      <ul>{players.map((player, index) => <li key={index}>{player.name} - {player.score}</li>)}</ul>

      <h2>Filtered Players (Score ≥ 70)</h2>
      <ul>{filteredPlayers.map((player, index) => <li key={index}>{player.name} - {player.score}</li>)}</ul>
    </div>
  );
};

export default ListofPlayers;