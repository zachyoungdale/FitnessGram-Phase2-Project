import React from "react";

function ExerciseCard({ name, bodyPart, weight, reps, sets }) {
  return (
    <div className="exercise-card">
      <h2>{name}</h2>
      <h3>Body Part: {bodyPart}</h3>
      <h4>Weight: {weight}</h4>
      <h4>Reps: {reps}</h4>
      <h4>Sets: {sets}</h4>
    </div>
  );
}

export default ExerciseCard;
