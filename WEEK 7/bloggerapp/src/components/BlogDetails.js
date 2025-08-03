import React from 'react';

function BlogDetails() {
  const blogs = [
    { id: 101, title: "React Hooks", summary: "Understanding useState and useEffect" },
    { id: 102, title: "JSX Deep Dive", summary: "Why JSX is powerful" }
  ];

  return (
    <div>
      <h2>Blog Details</h2>
      {blogs.length > 0 ? (
        blogs.map(blog => (
          <div key={blog.id}>
            <h3>{blog.title}</h3>
            <p>{blog.summary}</p>
          </div>
        ))
      ) : (
        <p>No blog posts available.</p>
      )}
    </div>
  );
}

export default BlogDetails;