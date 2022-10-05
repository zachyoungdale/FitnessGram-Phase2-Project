import React from "react";

function BlogCard({ subject, date, content }) {
  return (
    <div className="card">
      <h3>{subject}</h3>
      <h4>{date}</h4>
      <p>{content}</p>
    </div>
  );
}

export default BlogCard;
