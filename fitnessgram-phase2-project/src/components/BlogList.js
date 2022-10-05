import React from "react";
import BlogCard from "./BlogCard";

function BlogList({ blogs }) {
  const displayCard = blogs.map((blog) => {
    return <BlogCard {...blog} key={blog.id} />;
  });
  return (
    <div>
      <ul>{displayCard}</ul>
    </div>
  );
}

export default BlogList;
