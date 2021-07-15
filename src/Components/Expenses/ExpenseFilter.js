import React from "react";
import "./ExpenseFilter.css";

function ExpenseFilter(props) {
  const filteredChangeHandler = (filtereYear) => {
    props.onFilteredChangeYear(filtereYear.target.value);
  };
  return (
    <div className="expense-form-control">
      <label htmlFor="filterByYear">Filter By Year</label>
      <select id="filterByYear" onChange={filteredChangeHandler}>
        <option value="2019">2019</option>
        <option value="2020">2020</option>
        <option value="2021">2021</option>
        <option value="2022">2022</option>
        <option value="2023">2023</option>
      </select>
    </div>
  );
}

export default ExpenseFilter;
