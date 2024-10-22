// src/components/EmployeeList.tsx
import React, { useState } from 'react';

import { Link ,useNavigate} from 'react-router-dom';
import { Employee } from './Employee';

interface EmployeeListProps {
  employees: Employee[];
  onDeleteEmployee: (id: number) => void;
}

const EmployeeList: React.FC<EmployeeListProps> = ({ employees, onDeleteEmployee }) => {
  
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const addEmployee = () => {
    navigate("/");
  };

  const filteredEmployees = employees.filter((employee) =>
  employee.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
  employee.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
  employee.phone.includes(searchTerm) // You can add more fields here for searching
);

  return (
    <div className="employee-list-container">
      <div className="employee-list-header">
        <h2>Employee List</h2>
        <input
          type="text"
          className="search-bar"
          placeholder="Search Employees..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button className="btn btn-add" onClick={addEmployee}>
          Add Employee
        </button>
      </div>
      <table className="employee-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Department</th>
            <th>Designation</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredEmployees.length > 0 ? (
            filteredEmployees.map((employee) => (
              <tr key={employee.id}>
                <td>{employee.name}</td>
                <td>{employee.email}</td>
                <td>{employee.phone}</td>
                <td>{employee.department}</td>
                <td>{employee.designation}</td>
                <td className="actions">
                  <div className="action-buttons">
                    <Link to={`/edit/${employee.id}`} className="btn-edit">
                      Edit
                    </Link>
                    <button
                      className="btn btn-delete"
                      onClick={() => onDeleteEmployee(employee.id)}
                    >
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={6} className="no-employees">
                No employees found
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default EmployeeList;
