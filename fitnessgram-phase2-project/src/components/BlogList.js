import React from "react";
import BlogCard from "./BlogCard";

function BlogList({ blogs }) {
  const displayCard = blogs.map((blog) => {
    return <BlogCard {...blog} key={blog.id} />;
  });
  return (
    <div>
      <ul className="display-card">{displayCard}</ul>
    </div>
  );
}

export default BlogList;
