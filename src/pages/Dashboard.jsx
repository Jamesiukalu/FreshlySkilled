import React from "react";
import { Container, Navbar, FormControl, NavDropdown, Row, Col, Nav, Tab, Card, ListGroup, Image, Form, Button, OverlayTrigger, Tooltip } from "react-bootstrap";

import mainlogo from '../assets/img/Tech brand4.png'
import EmployeeInfo from "../components/Dashboard/EmployeeInfo";
import TaskList from "../components/Dashboard/TaskList";
import PerformanceMetrics from "../components/Dashboard/PerformanceMetrics";
import EmployeeDocuments from "../components/Dashboard/EmployeeDocuments";



const Dashboard = ({ employee }) => {
  return (
    <>
     <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
      <Container>
        <Navbar.Brand href="#home"><img 
                src={mainlogo} 
                alt="Techtalize Logo" 
                className="img-fluid" 
                style={{ maxHeight: '40px' }} 
            /></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav>
            <Nav.Link href="/" className="mx-2">Home</Nav.Link>
            <NavDropdown title="Settings" id="basic-nav-dropdown" align="end">
              <NavDropdown.Item href="#action/3.1">Account Settings</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Notification Settings</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/login">Logout</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    <Container fluid className="p-4">   
      <Row>
        <Col md={12} lg={12}>
          <Card className="card-plain h-100">
            <Card.Header className="pb-0 p-3">
              <Row>
                <Col md={8} className="d-flex align-items-center">
                  <h6 className="mb-0">Welcome {employee.name.first}</h6>
                </Col>
                <Col md={4} className="text-end">
                  <OverlayTrigger
                    placement="top"
                    overlay={<Tooltip id="edit-profile-tooltip">Edit Profile</Tooltip>}
                  >
                    <Button variant="link" size="sm">
                      <i className="fas fa-user-edit text-secondary text-sm"></i>
                    </Button>
                  </OverlayTrigger>
                </Col>
              </Row>
            </Card.Header>
            <Card.Body className="p-3">
              <Row>
                <Col md={4} lg={4}>
                  <Card className="card-plain h-100">
                    <Card.Header className="pb-0 p-3">
                      <h6 className="mb-0">Profile Details</h6>
                    </Card.Header>
                    <Card.Body className="p-3">
                    <EmployeeInfo employee={employee} />
                    </Card.Body>
                  </Card>
                </Col>
                <Col md={4} lg={4}>
                  <Card className="card-plain h-100">
                    <Card.Header className="pb-0 p-3">
                      <h6 className="mb-0">Task List</h6>
                    </Card.Header>
                    <Card.Body className="p-3">
                    <TaskList />
                    <PerformanceMetrics />
                    </Card.Body>
                  </Card>
                </Col>
                <Col md={4} lg={4}>
                  <Card className="card-plain h-100">
                    <Card.Header className="pb-0 p-3">
                      <h6 className="mb-0">Documents Section</h6>
                    </Card.Header>
                    <Card.Body className="p-3">
                      <EmployeeDocuments />
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  </>
  );
};

export default Dashboard;
