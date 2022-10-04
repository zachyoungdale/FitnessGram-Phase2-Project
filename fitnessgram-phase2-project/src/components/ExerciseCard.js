import { Card, CardContent, Button } from "@mui/material";
import React, { useState } from "react";
import UpdateCard from "./UpdateCard";

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
    <Card variant="outlined" sx={{ maxWidth: 200 }}>
      <CardContent>
        <h2>{name}</h2>
        <h3>Body Part: {bodyPart}</h3>
        <h4>Weight: {weight}</h4>
        <h4>Reps: {reps}</h4>
        <h4>Sets: {sets}</h4>
        <Button
          variant="contained"
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
      </CardContent>
    </Card>
  );
}

export default ExerciseCard;
