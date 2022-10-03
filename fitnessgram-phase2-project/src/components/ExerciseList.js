import React from "react";
import ExerciseCard from "./ExerciseCard";

function ExerciseList({ exercises }) {
  const exerciseCards = exercises.map((exercise) => {
    return <ExerciseCard key={exercise.id} {...exercise} />;
  });
  return <div className="exercise-list">{exerciseCards}</div>;
}

export default ExerciseList;
