// src/components/AddEmployee.tsx
import React, { Component } from 'react';
import { useNavigate } from 'react-router-dom';
import { Employee } from './Employee';


interface AddEmployeeProps {
  onAddEmployee: (employee: Employee) => void;
  onNavigate: (path: string) => void; // Add this line
}

interface AddEmployeeState {
  employee: Employee;
}

class AddEmployee extends Component<AddEmployeeProps, AddEmployeeState> {
  constructor(props: AddEmployeeProps) {
    super(props);
    this.state = {
      employee: {
        id: Date.now(),
        name: '',
        email: '',
        phone: '',
        department: '',
        designation: '',
        salary: 0,
        dateOfJoining: '',
        location: '',
        manager: '',
      },
    };
  }

  handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    this.setState({ employee: { ...this.state.employee, [name]: value } });
  };

  handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    this.props.onAddEmployee(this.state.employee);
    this.props.onNavigate('/employees'); // Redirect to employee list
  };

  render() {
    const { employee } = this.state;

    return (
      <div className="add-employee-container">
        <h2>Add New Employee</h2>
        <form className="employee-form" onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label>Name</label>
            <input
              type="text"
              name="name"
              value={employee.name}
              onChange={this.handleChange}
              placeholder="Employee Name"
              required
            />
          </div>
          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              name="email"
              value={employee.email}
              onChange={this.handleChange}
              placeholder="Employee Email"
              required
            />
          </div>
          <div className="form-group">
            <label>Phone</label>
            <input
              type="text"
              name="phone"
              value={employee.phone}
              onChange={this.handleChange}
              placeholder="Phone Number"
              required
            />
          </div>
          <div className="form-group">
            <label>Department</label>
            <input
              type="text"
              name="department"
              value={employee.department}
              onChange={this.handleChange}
              placeholder="Department"
              required
            />
          </div>
          <div className="form-group">
            <label>Designation</label>
            <input
              type="text"
              name="designation"
              value={employee.designation}
              onChange={this.handleChange}
              placeholder="Designation"
              required
            />
          </div>
          <div className="form-group">
            <label>Salary</label>
            <input
              type="number"
              name="salary"
              value={employee.salary}
              onChange={this.handleChange}
              placeholder="Salary"
              required
            />
          </div>
          <div className="form-group">
            <label>Date of Joining</label>
            <input
              type="date"
              name="dateOfJoining"
              value={employee.dateOfJoining}
              onChange={this.handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Location</label>
            <input
              type="text"
              name="location"
              value={employee.location}
              onChange={this.handleChange}
              placeholder="Location"
              required
            />
          </div>
          <div className="form-group">
            <label>Manager</label>
            <input
              type="text"
              name="manager"
              value={employee.manager}
              onChange={this.handleChange}
              placeholder="Manager"
              required
            />
          </div>
          <div className="form-actions">
            <button type="submit" className="btn btn-submit">Add Employee</button>
            <button type="button" className="btn btn-cancel" onClick={() => this.props.onNavigate('/employees')}>Cancel</button>
          </div>
        </form>
      </div>
    );
  }
}

export default function AddEmployeeWithNavigate(props: Omit<AddEmployeeProps, 'onNavigate'>) {
  const navigate = useNavigate();
  return <AddEmployee {...props} onNavigate={navigate} />;
}
