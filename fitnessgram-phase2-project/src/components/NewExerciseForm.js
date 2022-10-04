import React, { useState } from "react";
import { Form, Container, Row, Col, Button } from "react-bootstrap";

function NewExerciseForm({ addNewExercise }) {
  const [newName, setNewName] = useState("");
  const [newBodyPart, setNewBodyPart] = useState("");
  const [newWeight, setNewWeight] = useState(0);
  const [newReps, setNewReps] = useState(0);
  const [newSets, setNewSets] = useState(0);

  function handleSubmit(e) {
    e.preventDefault();
    const newExercise = {
      name: newName,
      bodyPart: newBodyPart,
      weight: parseInt(newWeight),
      reps: parseInt(newReps),
      sets: parseInt(newSets),
    };

    fetch(`http://localhost:3000/exercises`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newExercise),
    })
      .then((res) => res.json())
      .then((data) => addNewExercise(data));
    setNewName("");
    setNewBodyPart("");
    setNewWeight(0);
    setNewReps(0);
    setNewSets(0);
  }
  return (
    <Container fluid="md" style={{ width: "500px" }}>
      <h1>Enter New Exercise:</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formGroupName">
          <Form.Label>Name:</Form.Label>
          <Form.Control
            type="text"
            name="Name"
            value={newName}
            onChange={(e) => setNewName(e.target.value)}
          />
        </Form.Group>
        <Form.Group controlId="formGroupBodyPart">
          <Form.Label>Body Part:</Form.Label>
          <Form.Control
            type="text"
            name="Body Part"
            value={newBodyPart}
            onChange={(e) => setNewBodyPart(e.target.value)}
          />
        </Form.Group>
        <Form.Group controlId="formGroupWeight">
          <Form.Label>Weight:</Form.Label>
          <Form.Control
            type="number"
            name="Weight"
            value={newWeight}
            onChange={(e) => setNewWeight(e.target.value)}
          />
        </Form.Group>
        <Form.Group controlId="formGroupReps">
          <Form.Label>Reps:</Form.Label>
          <Form.Control
            type="number"
            name="Reps"
            value={newReps}
            onChange={(e) => setNewReps(e.target.value)}
          />
        </Form.Group>
        <Form.Group controlId="formGroupSets">
          <Form.Label>Sets:</Form.Label>
          <Form.Control
            type="number"
            name="Sets"
            value={newSets}
            onChange={(e) => setNewSets(e.target.value)}
          />
        </Form.Group>
        <div className="d-grid gap-2">
          <Button
            style={{ margin: "30px" }}
            type="submit"
            variant="primary"
            size="lg"
          >
            Submit
          </Button>
        </div>
      </Form>
    </Container>
  );
}

export default NewExerciseForm;
