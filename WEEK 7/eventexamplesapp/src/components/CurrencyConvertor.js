import React, { useState } from 'react';

const CurrencyConvertor = () => {
  const [rupees, setRupees] = useState('');
  const [euro, setEuro] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const converted = (parseFloat(rupees) / 90).toFixed(2);
    setEuro(converted);
  };

  return (
    <div style={{ marginTop: '20px' }}>
      <h2>Currency Convertor (INR to Euro)</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="number"
          placeholder="Enter amount in INR"
          value={rupees}
          onChange={(e) => setRupees(e.target.value)}
        />
        <button type="submit">Convert</button>
      </form>
      {euro !== null && <p>Converted Amount: €{euro}</p>}
    </div>
  );
};

export default CurrencyConvertor;