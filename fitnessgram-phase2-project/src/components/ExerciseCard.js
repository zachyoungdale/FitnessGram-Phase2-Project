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
    <div>
      <h1>{name}</h1>
      <h2>Body Part: {bodyPart}</h2>
      <h3>Weight: {weight}</h3>
      <h3>Reps: {reps}</h3>
      <h3>Sets: {sets}</h3>
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
