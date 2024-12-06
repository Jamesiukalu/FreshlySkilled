import React, { useState, useEffect } from "react";

import axios from "axios";
import { Container, Navbar, NavDropdown, Row, Col, Nav, Card, Button, OverlayTrigger, Tooltip } from "react-bootstrap";
import mainlogo from '../assets/img/Tech brand4.png';
import EmployeeInfo from "../components/Dashboard/EmployeeInfo";
import TaskList from "../components/Dashboard/TaskList";
import PerformanceMetrics from "../components/Dashboard/PerformanceMetrics";
import EmployeeDocuments from "../components/Dashboard/EmployeeDocuments";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const [employee, setEmployee] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [profileData, setProfileData] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const loggedUser = localStorage.getItem('user');
    // console.log(localStorage.getItem('user'))
    if (!loggedUser) {
      navigate('/login'); // Redirect if not logged in
    } else {
      const userData = JSON.parse(loggedUser);
      setEmployee(userData);
      setProfileData(userData);
    }
  }, [navigate]);

  const handleEditClick = () => {
    setIsEditing(true);
  };


  const handleSave = async (updatedProfile) => {
    try {
       // Get the JWT token from localStorage
      const token = localStorage.getItem('token');
      // Send the updated profile to the backend using PUT request
      const response = await axios.put('http://api.okwelomo.site:5000/api/users/update', updatedProfile, { 
        headers: {
          Authorization: `Bearer ${token}` // Include the JWT token in the header
        },
        withCredentials: true, // Include credentials if necessary
      });
  
      // Update the state with the updated profile data
      setProfileData(response.data.user);
      setEmployee(response.data.user); // Optionally update the employee state
      console.log("Profile saved successfully:", response.data);
      console.log('Token:', token); // Log the token to check its validity

      setIsEditing(false); // Exit edit mode
      // console.log("Updated Profile Data:", response.data.user);
    } catch (error) {
      console.error("Error saving profile:", error.response?.data || error.message);
      // Handle the error (show message, etc.)
    }
  };

  const handleLogout = () => {
    localStorage.clear();
    navigate('/login');
  };

  if (!employee) return <div>Loading...</div>;

  return (
    <>
      <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
        <Container>
          <Navbar.Brand href="#home">
            <img
              src={mainlogo}
              alt="Techtalize Logo"
              className="img-fluid"
              style={{ maxHeight: '40px' }}
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
            <Nav>
              <Nav.Link href="/" className="mx-2">Home</Nav.Link>
              <NavDropdown title="Settings" id="basic-nav-dropdown" align="end">
                <NavDropdown.Item href="#action/3.1">Account Settings</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Notification Settings</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item onClick={handleLogout}>Logout</NavDropdown.Item>
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
                    <h6 className="mb-0">Welcome {employee?.name?.first || ''}</h6>
                  </Col>
                  <Col md={4} className="text-end">
                    <OverlayTrigger
                      placement="top"
                      overlay={<Tooltip id="edit-profile-tooltip">Edit Profile</Tooltip>}
                    >
                      <Button variant="link" size="sm" onClick={handleEditClick}>
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
                        <EmployeeInfo
                          employee={profileData || {}}
                          isEditing={isEditing}
                          onSave={handleSave}
                          setIsEditing={setIsEditing}
                        />
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