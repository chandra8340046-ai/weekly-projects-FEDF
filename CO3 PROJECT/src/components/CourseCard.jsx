function CourseCard({ course }) {
  const handleClick = () => {
    alert(
      `You selected ${course.courseName} course`
    );
  };

  let buttonText = "Enroll";

  if (
    course.progress > 0 &&
    course.progress < 100
  ) {
    buttonText = "Continue";
  }

  if (course.progress === 100) {
    buttonText = "Completed";
  }

  return (
    <div
      style={{
        border: "1px solid gray",
        padding: "10px",
        margin: "10px",
      }}
    >
      <h3>{course.courseName}</h3>

      <p>Trainer: {course.trainer}</p>

      <p>Duration: {course.duration}</p>

      <p>
        Progress: {course.progress}%
      </p>

      <button onClick={handleClick}>
        {buttonText}
      </button>
    </div>
  );
}

export default CourseCard;