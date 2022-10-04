import React, { useEffect, useState } from "react";

import ExerciseList from "./ExerciseList";
import BlogList from "./BlogList";
import NewBlogForm from "./NewBlogForm";
import Header from "./Header";

function App() {
  const [exercises, setExercises] = useState([]);
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:3000/exercises`)
      .then((res) => res.json())
      .then((data) => setExercises(data));

    fetch(`http://localhost:3000/blogs`)
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);

  function addNewBlog(newBlog) {
    setBlogs([...blogs, newBlog])
  }

  return (
    <div className="App">
      <Header />
      <ExerciseList />
      <BlogList blogs={blogs}/>
      <NewBlogForm addNewBlog={addNewBlog}/>
    </div>
  );
}

export default App;
