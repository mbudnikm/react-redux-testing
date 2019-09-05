import React from 'react';
import './App.css';
import { EmployeeList } from './components/employees/EmployeeList';
import { TableContainer } from "./components/pagination/TableContainer";

import { getEmployees } from './data'

const employees = getEmployees().slice(0, 25)

function App({ all = true }) {
  const sum1 = 125
  return (
    <div className="App">
      aaaa {sum1}
      <EmployeeList employees={employees}/>
      <hr />

      <TableContainer employees={employees}/>
    </div>
  );
}

export default App;
