import React, { useState } from "react";

function NewExerciseForm({ addNewExercise }) {
  const [newName, setNewName] = useState("");
  const [newBodyPart, setNewBodyPart] = useState("");
  const [newWeight, setNewWeight] = useState(0);
  const [newReps, setNewReps] = useState(0);
  const [newSets, setNewSets] = useState(0);

  function handleSubmit(e) {
    e.preventDefault();
    const newExercise = {
      name: newName,
      bodyPart: newBodyPart,
      weight: parseInt(newWeight),
      reps: parseInt(newReps),
      sets: parseInt(newSets),
    };

    fetch(`http://localhost:3000/exercises`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newExercise),
    })
      .then((res) => res.json())
      .then((data) => addNewExercise(data));
    setNewName("");
    setNewBodyPart("");
    setNewWeight(0);
    setNewReps(0);
    setNewSets(0);
  }
  return (
    <form onSubmit={handleSubmit} className="new-exercise-form">
      <label for="name">Name:</label>
      <input
        className="new-exercise-inputs"
        type="text"
        name="Name"
        value={newName}
        onChange={(e) => setNewName(e.target.value)}
      />
      <label for="bodyPart">Body Part:</label>
      <input
        className="new-exercise-inputs"
        type="text"
        name="Body Part"
        value={newBodyPart}
        onChange={(e) => setNewBodyPart(e.target.value)}
      />

      <label for="weight">Weight:</label>
      <input
        className="new-exercise-inputs"
        type="number"
        name="Weight"
        value={newWeight}
        onChange={(e) => setNewWeight(e.target.value)}
      />

      <label for="reps">Reps:</label>
      <input
        className="new-exercise-inputs"
        type="number"
        name="Reps"
        value={newReps}
        onChange={(e) => setNewReps(e.target.value)}
      />

      <label for="sets">Sets:</label>
      <input
        className="new-exercise-inputs"
        type="number"
        name="Sets"
        value={newSets}
        onChange={(e) => setNewSets(e.target.value)}
      />
      <input type="submit" value="Submit" />
    </form>
  );
}

export default NewExerciseForm;
