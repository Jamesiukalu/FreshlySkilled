import React from 'react';
import { Card, ListGroup, ListGroupItem } from 'react-bootstrap';

const TaskList = () => {
  const tasks = [
    { id: 1, title: 'Task 1', deadline: '2023-03-15' },
    { id: 2, title: 'Task 2', deadline: '2023-03-20' },
    { id: 3, title: 'Task 3', deadline: '2023-03-25' },
  ];

  return (
    <Card>
      <Card.Body>
        <h2>Task List</h2>
        <ListGroup>
          {tasks.map((task) => (
            <ListGroupItem key={task.id}>
              <span>{task.title}</span>
              <span className="float-end">{task.deadline}</span>
            </ListGroupItem>
          ))}
        </ListGroup>
      </Card.Body>
    </Card>
  );
};

export default TaskList;