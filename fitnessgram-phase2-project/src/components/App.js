import React from "react";

import ExerciseList from "./ExerciseList";
import BlogList from "./BlogList";
import NewBlogForm from "./NewBlogForm";
import Header from "./Header";

function App() {
  return (
    <div className="App">
      <Header />
      <ExerciseList />
      <BlogList />
      <NewBlogForm />
    </div>
  );
}

export default App;
