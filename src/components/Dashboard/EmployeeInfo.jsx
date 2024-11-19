import React, { useState } from "react";
import { Card, ListGroup, ListGroupItem, Form, Button } from 'react-bootstrap';

const EmployeeInfo = ({ employee, isEditing, onSave }) => {
  const [formData, setFormData] = useState(employee);
  const formattedDOE = new Date(employee.dateOfEmployment).toLocaleDateString();


  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSaveClick = () => {
    onSave(formData);
    setIsEditing(false);
  };
    return (
      <Card>
        <Card.Body>
        {isEditing ? (
          <>
            <Form>
              <Form.Group className="mb-3">
                <Form.Label>First Name</Form.Label>
                <Form.Control
                  type="text"
                  name="name.first"
                  value={formData.name.first}
                  onChange={handleInputChange}
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Last Name</Form.Label>
                <Form.Control
                  type="text"
                  name="name.last"
                  value={formData.name.last}
                  onChange={handleInputChange}
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Phone</Form.Label>
                <Form.Control
                  type="text"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Location</Form.Label>
                <Form.Control
                  type="text"
                  name="location.city"
                  value={formData.location.city}
                  onChange={handleInputChange}
                />
              </Form.Group>
              <Button variant="primary" onClick={handleSaveClick}>
                Save
              </Button>
            </Form>
          </>
        ) : (
          <>
          <img src={employee.picture.large} alt="Profile Picture" className="img-fluid rounded-circle mb-4 justify-center align-center" />
          <h2>{employee.name.title} {employee.name.first} {employee.name.last}</h2>
          <ListGroup className="list-group-flush">
            <ListGroupItem>Email: {employee.email}</ListGroupItem>
            <ListGroupItem>Phone: {employee.phone}</ListGroupItem>
            <ListGroupItem>Role: {employee.role}</ListGroupItem>
            <ListGroupItem>DOE: {formattedDOE}</ListGroupItem>
            <ListGroupItem>Location: {employee.location.city}, {employee.location.state}</ListGroupItem> 
          </ListGroup>
          </>
        )}
        </Card.Body>
      </Card>
    );
  };
 

export default EmployeeInfo;