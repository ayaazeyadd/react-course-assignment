import React from "react";
import Header from "../components/Header.jsx";
import FilterTabs from "../components/FilterTabs.jsx";
import StudentList from "../components/StudentList.jsx";
import LoadingSpinner from "../components/LoadingSpinner.jsx";
import useStudents from "../hooks/useStudents.js";
import usePersistedFilter from "../hooks/usePersistedFilter.js";

function Students() {
  // Custom Hook #1: simulates fetching student data (useState + useEffect)
  const { students, loading } = useStudents();

  // Custom Hook #2: remembers the selected filter tab in localStorage
  const [filter, setFilter] = usePersistedFilter();

  // Ternary Operator used inline to pick the filtered array
  const filteredStudents =
    filter === "pass"
      ? students.filter((s) => s.score >= 50)
      : filter === "fail"
      ? students.filter((s) => s.score < 50)
      : students;

  return (
    <div className="container app-wrapper">
      <Header
        title="Student Dashboard"
        subtitle="Track scores, attendance and progress at a glance"
      />

      <div className="d-flex justify-content-center">
        <FilterTabs filter={filter} onChange={setFilter} />
      </div>

      {/* Ternary Operator: show spinner while the custom hook is "loading" */}
      {loading ? <LoadingSpinner /> : <StudentList students={filteredStudents} />}
    </div>
  );
}

export default Students;
