import React, { useState } from 'react';
import BookDetails from './components/BookDetails';
import BlogDetails from './components/BlogDetails';
import CourseDetails from './components/CourseDetails';

function App() {
  const [view, setView] = useState("book");

  const renderContent = () => {
    if (view === "book") {
      return <BookDetails />;
    } else if (view === "blog") {
      return <BlogDetails />;
    } else if (view === "course") {
      return <CourseDetails />;
    }
    return <h3>Select a view</h3>;
  };

  return (
    <div>
      <h1>Blogger App</h1>
      <div>
        <button onClick={() => setView("book")}>Book Details</button>
        <button onClick={() => setView("blog")}>Blog Details</button>
        <button onClick={() => setView("course")}>Course Details</button>
      </div>
      {renderContent()}
    </div>
  );
}

export default App;