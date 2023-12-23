import React from "react";
import "./ExpenseFilter.css";

const ExpenseFilter = (props) => {
  const dropdownChangeHandler = (event) => {
    props.onChangeFilter(event.target.value);
  };
  return (
    <div className="filter-container">
      <div>
        <label className="label">Filter by year</label>
      </div>
      <select value={props.selected} onChange={dropdownChangeHandler}>
        <option className="dropdown-content" value="2022">
          2022
        </option>
        <option className="dropdown-content" value="2021">
          2021
        </option>
        <option className="dropdown-content" value="2020">
          2020
        </option>
        <option className="dropdown-content" value="2019">
          2019
        </option>
      </select>
    </div>
  );
};

export default ExpenseFilter;
