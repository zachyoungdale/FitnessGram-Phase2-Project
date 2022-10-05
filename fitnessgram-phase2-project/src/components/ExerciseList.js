import React from "react";

import ExerciseCard from "./ExerciseCard";

function ExerciseList({ exercises, updateExercise }) {
  const exerciseCards = exercises.map((exercise) => {
    return (
      <ExerciseCard
        key={exercise.id}
        {...exercise}
        updateExercise={updateExercise}
      />
    );
  });

  return <div className="card-list">{exerciseCards}</div>;
}

export default ExerciseList;
