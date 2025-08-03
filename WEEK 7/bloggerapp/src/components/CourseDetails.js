import React from 'react';

function CourseDetails() {
  const courses = [
    { id: 'c1', name: "React for Beginners", level: "Beginner" },
    { id: 'c2', name: "Advanced React", level: "Advanced" }
  ];

  return (
    <div>
      <h2>Course Details</h2>
      {courses.length === 0 && <p>No courses available</p>}
      {courses.length > 0 && (
        <ul>
          {courses.map(course => (
            <li key={course.id}>
              {course.name} ({course.level})
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default CourseDetails;