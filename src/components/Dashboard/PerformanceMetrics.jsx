import React from 'react';
import { Card, ListGroup, ListGroupItem } from 'react-bootstrap';

const PerformanceMetrics = () => {
  const metrics = [
    { label: 'Attendance', value: '95%' },
    { label: 'Task Completion Rate', value: '90%' },
    { label: 'Performance Reviews', value: '4.5/5' },
  ];
  // const metrics = [
  //   { label: 'Attendance', value: employee?.attendance || 'N/A' },
  //   { label: 'Task Completion Rate', value: employee?.taskCompletionRate || 'N/A' },
  //   { label: 'Performance Reviews', value: employee?.performanceReviews || 'N/A' },
  // ];

  return (
    <Card className="mt-2" >
      <Card.Body>
        <h2>Performance Metrics</h2>
        <ListGroup>
          {metrics.map((metric) => (
            <ListGroupItem key={metric.label}>
              <span>{metric.label}</span>
              <span className="float-end">{metric.value}</span>
            </ListGroupItem>
          ))}
        </ListGroup>
      </Card.Body>
    </Card>
  );
};

export default PerformanceMetrics;