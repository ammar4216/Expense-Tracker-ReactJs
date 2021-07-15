import React from "react";
import ExpenseForm from "./ExpenseForm";
import Card from "../UI/Card";
import "./NewExpenses.css";

function NewExpenses(props) {
  const expenseDataHandler = (expenseData) => {
    const data = {
      ...expenseData,
      id: Math.round(Math.random() * 1000),
    };
    props.onGetExpenseData(data);
  };

  return (
    <Card className="NewExpenses">
      <ExpenseForm onSaveExpenseData={expenseDataHandler}></ExpenseForm>
    </Card>
  );
}

export default NewExpenses;
