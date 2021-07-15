import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import ExpenseFilter from "./ExpenseFilter";
import Card from "../UI/Card";
import "./Expenses.css";

function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState("2021");

  const filteredChangeHandler = (filterYear) => {
    setFilteredYear(filterYear);
  };

  const filteredByYear = props.expenses.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });
  return (
    <Card className="expenses">
      <ExpenseFilter
        selected={filteredYear}
        onFilteredChangeYear={filteredChangeHandler}
      ></ExpenseFilter>

      {filteredByYear.length === 0 ? (
        <h2>No Expense Found!!</h2>
      ) : (
        filteredByYear.map((expense) => {
          return (
            <ExpenseItem
              key={expense.id}
              title={expense.title}
              amount={expense.amount}
              date={expense.date}
            ></ExpenseItem>
          );
        })
      )}
    </Card>
  );
}

export default Expenses;
