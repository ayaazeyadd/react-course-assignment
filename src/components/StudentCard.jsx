import React from "react";
import Badge from "./Badge.jsx";
import styles from "./StudentCard.module.css"; // CSS Modules styling approach

// Reusable component. Receives a single "student" object via props.
function StudentCard({ student }) {
  const { name, course, score, attendance, isNew } = student;
  const hasPassed = score >= 50;

  return (
    // Bootstrap classes (card, shadow-sm, p-3) combined with a CSS-Module class
    <div className={`card shadow-sm p-3 ${styles.card}`}>
      {/* && Operator: "New" badge only renders when isNew is true */}
      {isNew && (
        <span className="position-absolute top-0 end-0 m-2">
          <Badge type="new" text="New" />
        </span>
      )}

      <h5 className="card-title mb-1">{name}</h5>
      <p className={styles.courseText}>{course}</p>

      <div className="d-flex justify-content-between align-items-center mb-1">
        <span className="small text-secondary">Score: {score}</span>
        {/* Ternary Operator: choose Pass/Fail badge based on score */}
        <Badge type={hasPassed ? "pass" : "fail"} text={hasPassed ? "Pass" : "Fail"} />
      </div>

      <div className="small text-secondary">Attendance: {attendance}%</div>

      {/* && Operator: warning line only shows when attendance is low */}
      {attendance < 75 && (
        <div className={styles.warning}>⚠ Low attendance, please improve!</div>
      )}
    </div>
  );
}

export default StudentCard;
