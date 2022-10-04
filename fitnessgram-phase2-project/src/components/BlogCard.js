import { Card } from "@mui/material";
import React from "react";

function BlogCard({ subject, date, content }) {
  return (
    <Card sx={{ maxWidth: 300 }}>
      <h3>{subject}</h3>
      <p>{date}</p>
      <p>{content}</p>
    </Card>
  );
}

export default BlogCard;
