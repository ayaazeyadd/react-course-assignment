import React from "react";
import StudentCard from "./StudentCard.jsx";
import EmptyState from "./EmptyState.jsx";

// Reusable component. Receives the "students" array via props.
function StudentList({ students }) {
  return (
    <div>
      {/* Ternary Operator: show grid when data exists, otherwise show EmptyState */}
      {students.length > 0 ? (
        // Bootstrap responsive grid: 1 column on mobile, 2 on tablets, 3 on desktop
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-3">
          {/* .map(): dynamically render one StudentCard per student in the array */}
          {students.map((student) => (
            <div className="col" key={student.id}>
              <StudentCard student={student} />
            </div>
          ))}
        </div>
      ) : (
        <EmptyState message="No students match this filter." />
      )}
    </div>
  );
}

export default StudentList;
