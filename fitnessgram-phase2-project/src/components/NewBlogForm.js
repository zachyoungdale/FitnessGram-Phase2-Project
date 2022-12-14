import React, { useState } from "react";

function NewBlogForm({ addNewBlog }) {
  const [subject, setSubject] = useState("");
  const [date, setDate] = useState("");
  const [content, setContent] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    const newBlog = {
      subject: subject,
      date: date,
      content: content,
    };
    fetch("http://localhost:3000/blogs", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newBlog),
    })
      .then((resp) => resp.json())
      .then((data) => addNewBlog(data));
    setSubject("");
    setDate("");
    setContent("");
  }

  return (
    <div>
      <form onSubmit={handleSubmit} className="new-form">
        <h1 className="form-title">Post your blog:</h1>
        <input
          className="new-inputs"
          type="text"
          name="subject"
          value={subject}
          placeholder="Enter subject..."
          onChange={(e) => setSubject(e.target.value)}
        />
        <input
          className="new-inputs"
          type="text"
          name="date"
          value={date}
          placeholder="Enter date..."
          onChange={(e) => setDate(e.target.value)}
        />
        <textarea
          className="new-inputs"
          id="blog-content"
          type="text"
          name="content"
          value={content}
          placeholder="Enter blog content..."
          onChange={(e) => setContent(e.target.value)}
        />
        <input
          className="form-button"
          type="submit"
          name="submit"
          value="Submit"
        />
      </form>
    </div>
  );
}

export default NewBlogForm;
