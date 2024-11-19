import React, { useState } from "react";
import { Card, ListGroup, ListGroupItem, Modal, Button } from 'react-bootstrap';

const EmployeeDocuments = () => {
  const documents = [
    { title: 'Employee Handbook', file: 'EmployeeHandbook.pdf' },
    { title: 'Onboarding Guide', file: 'OnboardingGuide.pdf' },
    { title: 'Company Policies', file: 'CompanyPolicies.pdf' },
    { title: 'Benefits Guide', file: 'BenefitsGuide.pdf' },
  ];
  // const documents = employee?.documents || [
  //   { title: 'Employee Handbook', file: 'EmployeeHandbook.pdf' },
  //   { title: 'Onboarding Guide', file: 'OnboardingGuide.pdf' },
  // ];
  const [showModal, setShowModal] = useState(false);
  const [selectedDocument, setSelectedDocument] = useState(null);

  const handleDocumentClick = (document) => {
    setSelectedDocument(document);
    setShowModal(true);
  };

  return (
    <Card>
      <Card.Body>
        <h2>Employee Documents</h2>
        <ListGroup>
          {documents.map((document) => (
            <ListGroupItem key={document.title}>
              <a onClick={() => handleDocumentClick(document)}>
                {document.title}
              </a>
            </ListGroupItem>
          ))}
        </ListGroup>
      </Card.Body>
      <Modal show={showModal} onHide={() => setShowModal(false)} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>{selectedDocument?.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <iframe
            src={`/documents/${selectedDocument?.file}`}
            frameBorder="0"
            width="100%"
            height="500"
          />
        </Modal.Body>
      </Modal>
    </Card>
  );
};

export default EmployeeDocuments;