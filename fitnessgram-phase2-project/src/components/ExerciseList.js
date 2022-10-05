import React from "react";

import ExerciseCard from "./ExerciseCard";
import Search from "./Search";

function ExerciseList({ exercises, updateExercise, search, setSearch }) {
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
    <div>
      <Search search={search} setSearch={setSearch} />
      {exerciseCards}
    </div>
  );
}

export default ExerciseList;
