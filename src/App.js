import React from 'react';
import './App.css';
import { EmployeeList } from './components/employees/EmployeeList';

import { getEmployees } from './data'

const employees = getEmployees().slice(0, 25)

function App({ all = true }) {
  const sum1 = 125
  return (
    <div className="App">
      aaaa {sum1}
      <EmployeeList employees={employees}/>
    </div>
  );
}

export default App;
