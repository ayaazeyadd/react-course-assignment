import { useState, useEffect } from "react";

// Sample data - in a real app this would come from an API
const studentsData = [
  { id: 1, name: "Aisha Rahman", course: "React Fundamentals", score: 88, attendance: 92, isNew: false },
  { id: 2, name: "Omar Farouk", course: "JavaScript Advanced", score: 42, attendance: 60, isNew: true },
  { id: 3, name: "Lina Youssef", course: "UI/UX Design", score: 76, attendance: 70, isNew: false },
  { id: 4, name: "Karim Adel", course: "React Fundamentals", score: 35, attendance: 55, isNew: false },
  { id: 5, name: "Nour Hassan", course: "Node.js Basics", score: 91, attendance: 98, isNew: true },
  { id: 6, name: "Sara Mostafa", course: "UI/UX Design", score: 58, attendance: 80, isNew: false },
];

/**
 * Custom Hook: useStudents
 * Combines useState + useEffect to simulate an async data fetch
 * (e.g. as if this were coming from a real backend/API).
 * Returns { students, loading }.
 */
function useStudents() {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      setStudents(studentsData);
      setLoading(false);
    }, 700); // simulated network delay

    // cleanup in case component unmounts before the timer fires
    return () => clearTimeout(timer);
  }, []);

  return { students, loading };
}

export default useStudents;
