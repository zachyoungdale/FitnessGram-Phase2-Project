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
    <div className="exercise-card">
      <h2>{name}</h2>
      <h3>Body Part: {bodyPart}</h3>
      <h4>Weight: {weight}</h4>
      <h4>Reps: {reps}</h4>
      <h4>Sets: {sets}</h4>
      <button onClick={() => setShowForm((showForm) => !showForm)}>
        {showForm ? "Hide Form" : "Update"}
      </button>
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
    </div>
  );
}

export default ExerciseCard;
