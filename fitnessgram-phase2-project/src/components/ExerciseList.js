import React, { useState } from "react";
import ExerciseCard from "./ExerciseCard";
import NewExerciseForm from "./NewExerciseForm";

function ExerciseList({ exercises, addNewExercise, updateExercise }) {
  const exerciseCards = exercises.map((exercise) => {
    return (
      <ExerciseCard
        key={exercise.id}
        {...exercise}
        updateExercise={updateExercise}
      />
    );
  });

  return (
    <div className="exercise-list">
      {exerciseCards}
      <NewExerciseForm addNewExercise={addNewExercise} />
    </div>
  );
}

export default ExerciseList;
