import React from 'react';
import { Card, ListGroup, ListGroupItem } from 'react-bootstrap';

const EmployeeInfo = ({ employee }) => {
    return (
      <Card>
        <Card.Body>
          <img src={employee.picture.large} alt="Profile Picture" className="img-fluid rounded-circle mb-4" />
          <h2>{employee.name.title} {employee.name.first} {employee.name.last}</h2>
          <ListGroup className="list-group-flush">
            <ListGroupItem>Email: {employee.email}</ListGroupItem>
            <ListGroupItem>Phone: {employee.phone}</ListGroupItem>
            <ListGroupItem>Location: {employee.location.city}, {employee.location.state}</ListGroupItem> {/* Adjusted for location */}
          </ListGroup>
        </Card.Body>
      </Card>
    );
  };
 

export default EmployeeInfo;