import { Container, Grid } from "@mui/material";
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
    <Container>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        {exerciseCards}
      </Grid>
    </Container>
  );
}

export default ExerciseList;
