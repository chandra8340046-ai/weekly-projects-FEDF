import { useState } from "react";

import Header from "./components/Header";
import StudentCard from "./components/StudentCard";
import StatusBadge from "./components/StatusBadge";
import CourseCard from "./components/CourseCard";
import Footer from "./components/Footer";

function App() {
  const [showCourses, setShowCourses] =
    useState(true);

  const courses = [
    {
      id: 1,
      courseName: "React JS",
      trainer: "Mr. Kumar",
      duration: "30 Days",
      progress: 70,
      status: "active",
    },
    {
      id: 2,
      courseName: "JavaScript",
      trainer: "Ms. Priya",
      duration: "25 Days",
      progress: 100,
      status: "completed",
    },
    {
      id: 3,
      courseName: "CSS",
      trainer: "Mr. Ramesh",
      duration: "15 Days",
      progress: 40,
      status: "pending",
    },
  ];

  return (
    <div>
      <Header />

      <StudentCard
        name="Rahul"
        course="React JS"
        batch="Morning Batch"
        attendance={85}
      />

      <StatusBadge status="active" />

      <button
        onClick={() =>
          setShowCourses(!showCourses)
        }
      >
        {showCourses
          ? "Hide Courses"
          : "Show Courses"}
      </button>

      {showCourses &&
        courses.map((course) => (
          <CourseCard
            key={course.id}
            course={course}
          />
        ))}

      <Footer />
    </div>
  );
}

export default App;