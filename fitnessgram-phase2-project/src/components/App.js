import React, { useEffect, useState } from "react";
import ExerciseList from "./ExerciseList";
import BlogList from "./BlogList";
import NewBlogForm from "./NewBlogForm";
import Header from "./Header";
import Search from "./Search";
import NavBar from "./NavBar";
import NewExerciseForm from "./NewExerciseForm";
import { Route, Switch } from "react-router-dom";


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

  function addNewExercise(newObj) {
    setExercises([...exercises, newObj]);
  }

  function addNewBlog(newBlog) {
    setBlogs([...blogs, newBlog]);
  }

  function updateExercise(updatedObj) {
    const updatedExerciseArray = exercises.map((exercise) => {
      if (exercise.id === updatedObj.id) {
        return updatedObj;
      }
      return exercise;
    });

    setExercises(updatedExerciseArray);
  }

  const filteredExerciseArray = exercises.filter((exercise) => {
    return (
      exercise.name.toLowerCase().includes(search.toLowerCase()) ||
      exercise.bodyPart.toLowerCase().includes(search.toLowerCase())
    );
  });

  return (
    <div className="bg-light">
      <Header />
      <NavBar />
        <Switch>
          <Route path="/blog-list">
            <BlogList blogs={blogs} />
          </Route>
          <Route path="/new-blog-form">
            <NewBlogForm addNewBlog={addNewBlog}/>
          </Route>
          <Route path="/new-exercise-form">
            <NewExerciseForm addNewExercise={addNewExercise} />
          </Route>
          <Route exact path="/">
            <Search search={search} setSearch={setSearch} />
            <ExerciseList
            exercises={filteredExerciseArray}
            addNewExercise={addNewExercise}
            updateExercise={updateExercise}
            search={search}
            setSearch={setSearch}
            />
          </Route>
        </Switch>
    </div>
  );
}

export default App;
