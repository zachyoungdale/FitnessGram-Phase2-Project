import React, { useEffect, useState } from "react";

import ExerciseList from "./ExerciseList";
import BlogList from "./BlogList";
import NewBlogForm from "./NewBlogForm";
import Header from "./Header";
import Search from "./Search";

function App() {
  const [exercises, setExercises] = useState([]);
  const [blogs, setBlogs] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch(`http://localhost:3000/exercises`)
      .then((res) => res.json())
      .then((data) => setExercises(data));

    fetch(`http://localhost:3000/blogs`)
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);

  const filteredExerciseArray = exercises.filter((exercise) => {
    return (
      exercise.name.toLowerCase().includes(search.toLowerCase()) ||
      exercise.bodyPart.toLowerCase().includes(search.toLowerCase())
    );
  });

  return (
    <div className="App">
      <Header />
      <Search search={search} setSearch={setSearch} />
      <ExerciseList exercises={filteredExerciseArray} />
      <BlogList />
      <NewBlogForm />
    </div>
  );
}

export default App;
