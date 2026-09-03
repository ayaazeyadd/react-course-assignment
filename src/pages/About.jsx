import React from "react";

function About() {
  return (
    <div className="container">
      <h2 className="mb-3">About This Project</h2>
      <p className="text-secondary">
        This project was built step by step across three assignments to
        practice core ReactJS concepts:
      </p>
      <ul className="text-secondary">
        <li>Reusable components, props, ternary &amp; && operators, .map()</li>
        <li>React Hooks (useState, useEffect) and Custom Hooks</li>
        <li>
          All 4 common styling approaches: inline styling, CSS stylesheets,
          CSS Modules, and Styled Components
        </li>
        <li>Bootstrap for layout and responsiveness</li>
        <li>React Router DOM for multi-page navigation</li>
        <li>Axios for API requests, with loading/error state handling</li>
      </ul>
    </div>
  );
}

export default About;
