import React, { useState } from "react";
import { Container, Row } from "react-bootstrap";
import ExerciseCard from "./ExerciseCard";
import NewExerciseForm from "./NewExerciseForm";
import Search from "./Search";

function ExerciseList({
  exercises,
  addNewExercise,
  updateExercise,
  search,
  setSearch,
}) {
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
    <Container fluid="md">
      <Search search={search} setSearch={setSearch} />
      <Row>{exerciseCards}</Row>
    </Container>
  );
}

export default ExerciseList;
