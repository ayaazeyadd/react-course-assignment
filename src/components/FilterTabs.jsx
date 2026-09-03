import React from "react";

const TABS = [
  { key: "all", label: "All" },
  { key: "pass", label: "Passing" },
  { key: "fail", label: "Failing" },
];

// Reusable component. Receives current "filter" and "onChange" via props.
function FilterTabs({ filter, onChange }) {
  return (
    <div className="filter-tabs btn-group mb-4" role="group">
      {/* .map(): dynamically render one button per tab */}
      {TABS.map((tab) => (
        <button
          key={tab.key}
          type="button"
          // Ternary Operator: active vs. outline Bootstrap button style
          className={`btn btn-sm ${filter === tab.key ? "btn-primary" : "btn-outline-primary"}`}
          onClick={() => onChange(tab.key)}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
}

export default FilterTabs;
