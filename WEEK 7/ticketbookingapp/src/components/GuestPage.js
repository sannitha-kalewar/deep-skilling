import React from 'react';

function GuestPage({ onLogin }) {
  return (
    <div>
      <h2>Welcome, Guest!</h2>
      <p>Browse available flights below:</p>
      <ul>
        <li>Flight A123 - Delhi to Mumbai</li>
        <li>Flight B456 - Bangalore to Chennai</li>
        <li>Flight C789 - Kolkata to Hyderabad</li>
      </ul>
      <button onClick={onLogin}>Login to Book Tickets</button>
    </div>
  );
}

export default GuestPage;