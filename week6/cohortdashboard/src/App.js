import React from 'react';
import CohortDetails from './CohortDetails';

function App() {
  return (
    <div className="App">
      <h1>My Academy Cohorts</h1>
      <CohortDetails name="React Basics" startDate="2025-06-01" endDate="2025-06-30" status="Ongoing" />
      <CohortDetails name="Advanced JavaScript" startDate="2025-05-01" endDate="2025-05-31" status="Completed" />
    </div>
  );
}

export default App;
