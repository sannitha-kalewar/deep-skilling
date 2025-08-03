import React from 'react';

function UserPage({ onLogout }) {
  return (
    <div>
      <h2>Welcome Back, User!</h2>
      <p>You can now book tickets:</p>
      <ul>
        <li>Flight A123 - Book Now</li>
        <li>Flight B456 - Book Now</li>
        <li>Flight C789 - Book Now</li>
      </ul>
      <button onClick={onLogout}>Logout</button>
    </div>
  );
}

export default UserPage;