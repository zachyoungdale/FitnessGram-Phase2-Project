import React, { useState } from "react";
import UpdateCard from "./UpdateCard";
import Button from "react-bootstrap/button";
import { Card } from "react-bootstrap/";

function ExerciseCard({
  name,
  bodyPart,
  weight,
  reps,
  sets,
  id,
  updateExercise,
}) {
  const [showForm, setShowForm] = useState(false);
  return (
    <Card
      style={{ width: "18rem", margin: "10px" }}
      bg="light"
      text="dark"
      border="primary"
    >
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Subtitle>Body Part: {bodyPart}</Card.Subtitle>
        <Card.Text>Weight: {weight}</Card.Text>
        <Card.Text>Reps: {reps}</Card.Text>
        <Card.Text>Sets: {sets}</Card.Text>
        <Button
          variant="primary"
          onClick={() => setShowForm((showForm) => !showForm)}
        >
          {showForm ? "Hide Form" : "Update"}
        </Button>
        {showForm ? (
          <UpdateCard
            id={id}
            name={name}
            bodyPart={bodyPart}
            weight={weight}
            reps={reps}
            sets={sets}
            updateExercise={updateExercise}
            setShowForm={setShowForm}
          />
        ) : null}
      </Card.Body>
    </Card>
  );
}

export default ExerciseCard;
