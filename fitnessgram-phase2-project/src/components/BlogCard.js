import React from "react";

function BlogCard({ subject, date, content }) {
  return <div>
      <h3>{subject}</h3>
      <p>{date}</p>
      <p>{content}</p>
  </div>;
}

export default BlogCard;
