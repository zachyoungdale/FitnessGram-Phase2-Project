import React from "react";
import {NavLink} from "react-router-dom";

const linkStyles = {
  display: "inline-block",
  width: "110px",
  padding: "10px",
  margin: "0 6px 6px",
  background: "white",
  textDecoration: "none",
  color: "blue",
};

function NavBar() {
    return (
      <nav className="navbar">
        <div>
         <NavLink to="/new-blog-form" exact style={linkStyles} activeStyle={{background: "darkblue",}}>NewBlogForm</NavLink>
         <NavLink to="/new-exercise-form" exact style={linkStyles} activeStyle={{background: "darkblue",}}>NewExerciseList</NavLink>
         <NavLink to="/blog-list" exact style={linkStyles} activeStyle={{background: "darkblue",}}>BlogList</NavLink>
         <NavLink to="/" exact style={linkStyles} activeStyle={{background: "darkblue",}}>ExerciseList</NavLink>
        </div>
      </nav>
      );
    }

export default NavBar;