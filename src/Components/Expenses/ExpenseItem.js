import React from "react";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import "./ExpenseItem.css";

function ExpenseItem(props) {
  return (
    <li>
      <Card className="expenseItem">
        <ExpenseDate date={props.date}></ExpenseDate>
        <div className="expense_description">
          <h2>{props.title}</h2>
          <p>${props.amount}</p>
        </div>
      </Card>
    </li>
  );
}

export default ExpenseItem;
