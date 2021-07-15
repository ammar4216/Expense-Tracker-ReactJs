import React, { useState } from "react";
import "./App.css";
import Expenses from "./Components/Expenses/Expenses";
import NewExpenses from "./Components/NewExpenses/NewExpenses";

const dummyExpenses = [
  { id: 0, title: "Book", amount: 25.4, date: new Date() },
  { id: 1, title: "Cellphone", amount: 75.4, date: new Date() },
  { id: 2, title: "Car", amount: 250.3, date: new Date() },
];
function App() {
  const [expenses, setExpenses] = useState(dummyExpenses);

  const expenseHandler = (data) => {
    setExpenses((prevState) => {
      return [data, ...prevState];
    });
  };
  return (
    <div className="App">
      <h1>Expense Tracker</h1>
      <NewExpenses onGetExpenseData={expenseHandler} />
      <Expenses expenses={expenses} />
    </div>
  );
}

export default App;
