import React, { useState } from "react";
import "./ExpenseForm.css";

function ExpenseForm(props) {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  const titleChangeHandler = (e) => {
    setEnteredTitle(e.target.value);
  };

  const amountChangeHandler = (e) => {
    setEnteredAmount(e.target.value);
  };

  const dateChangeHandler = (e) => {
    setEnteredDate(e.target.value);
  };

  const expenseSubmitHandler = (e) => {
    e.preventDefault();
    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    };

    props.onSaveExpenseData(expenseData);

    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
  };
  return (
    <div className="expense_form">
      <form onSubmit={expenseSubmitHandler}>
        <div className="input-controls">
          <div className="input-control">
            <label htmlFor="title">Title</label>
            <input
              type="text"
              name="title"
              id="title"
              required
              onChange={titleChangeHandler}
              value={enteredTitle}
            />
          </div>

          <div className="input-control">
            <label htmlFor="amount">Amount</label>
            <input
              type="number"
              name="amount"
              id="amount"
              onChange={amountChangeHandler}
              required
              value={enteredAmount}
            />
          </div>

          <div className="input-control">
            <label htmlFor="date">Date</label>
            <input
              type="date"
              name="date"
              id="date"
              min="2019-1-1"
              max="2021-12-31"
              onChange={dateChangeHandler}
              value={enteredDate}
            />
          </div>

          <div className="add-expense-btn">
            <button type="submit">Add Expense</button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default ExpenseForm;
