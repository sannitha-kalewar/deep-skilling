import React from 'react';

const officeList = [
  { name: "Prestige Tech Park", rent: 55000, address: "Whitefield, Bangalore", image: "https://via.placeholder.com/150" },
  { name: "Mindspace", rent: 75000, address: "HiTech City, Hyderabad", image: "https://via.placeholder.com/150" },
  { name: "DLF Cyber City", rent: 68000, address: "Gurgaon, Haryana", image: "https://via.placeholder.com/150" },
  { name: "WeWork", rent: 40000, address: "Koregaon Park, Pune", image: "https://via.placeholder.com/150" }
];

function App() {
  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <h1>Office Space Rental App</h1>

      {officeList.map((office, index) => (
        <div key={index} style={{ border: '1px solid gray', borderRadius: '8px', marginBottom: '15px', padding: '10px' }}>
          <img src={office.image} alt={office.name} style={{ width: '150px', height: '100px', borderRadius: '4px' }} />
          <h2>{office.name}</h2>
          <p><strong>Address:</strong> {office.address}</p>
          <p style={{ color: office.rent < 60000 ? 'red' : 'green' }}>
            <strong>Rent:</strong> ₹{office.rent}
          </p>
        </div>
      ))}
    </div>
  );
}

export default App;