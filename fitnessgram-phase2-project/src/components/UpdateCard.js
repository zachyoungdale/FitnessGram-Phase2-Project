import React, { useState } from "react";

function UpdateCard({
  id,
  name,
  bodyPart,
  weight,
  reps,
  sets,
  updateExercise,
  setShowForm,
}) {
  const [updateName, setUpdateName] = useState(name);
  const [updateBodyPart, setUpdateBodyPart] = useState(bodyPart);
  const [updateWeight, setUpdateWeight] = useState(weight);
  const [updateReps, setUpdateReps] = useState(reps);
  const [updateSets, setUpdateSets] = useState(sets);

  function handleSubmit(e) {
    e.preventDefault();
    const updateExerciseObj = {
      name: updateName,
      bodyPart: updateBodyPart,
      weight: parseInt(updateWeight),
      reps: parseInt(updateReps),
      sets: parseInt(updateSets),
    };

    fetch(`http://localhost:3000/exercises/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updateExerciseObj),
    })
      .then((res) => res.json())
      .then((data) => updateExercise(data));
    setShowForm(false);
  }

  return (
    <div>
      <div>
        <form onSubmit={handleSubmit}>
          <label for="Name">Name:</label>
          <input
            type="text"
            name="Name"
            //value={updateName}
            placeholder={updateName}
            onChange={(e) => setUpdateName(e.target.value)}
          />
          <label for="Body Part">Body Part:</label>
          <input
            type="text"
            name="Body Part"
            //value={updateBodyPart}
            placeholder={updateBodyPart}
            onChange={(e) => setUpdateBodyPart(e.target.value)}
          />
          <label for="Weight">Weight:</label>
          <input
            type="number"
            name="Weight"
            //value={updateWeight}
            placeholder={updateWeight}
            onChange={(e) => setUpdateWeight(e.target.value)}
          />
          <label for="Reps">Reps:</label>
          <input
            type="number"
            name="Reps"
            //value={updateReps}
            placeholder={updateReps}
            onChange={(e) => setUpdateReps(e.target.value)}
          />
          <label for="Sets">Sets:</label>
          <input
            type="number"
            name="Sets"
            //value={updateSets}
            placeholder={updateSets}
            onChange={(e) => setUpdateSets(e.target.value)}
          />
          <input type="submit" name="Submit" />
        </form>
      </div>
    </div>
  );
}

export default UpdateCard;
