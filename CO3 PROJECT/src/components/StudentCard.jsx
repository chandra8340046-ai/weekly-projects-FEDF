import styles from "./StudentCard.module.css";

function StudentCard({
  name,
  course,
  batch,
  attendance,
}) {
  return (
    <div className={styles.card}>
      <h2>{name}</h2>

      <p>Course: {course}</p>

      <p>Batch: {batch}</p>

      <p>
        Attendance: {attendance}%
      </p>
    </div>
  );
}

export default StudentCard;