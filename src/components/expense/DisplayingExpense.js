import React from "react";
import ExpenseItem from "./ExpenseItem";
import "./DisplayingExpense.css";

const DisplayingExpense = ({ filteredExpenses }) => {
  console.log(filteredExpenses.length);
  if (filteredExpenses.length === 0) {
    return <h2 className="display-message">no item to display</h2>;
  }
  return (
    <>
      {filteredExpenses.map((expense, i) => {
        return <ExpenseItem prop={expense} key={i} />;
      })}
      {filteredExpenses.length === 1 && (
        <p className="display-message">
          Only single Expense here. Please add more...
        </p>
      )}
    </>
  );
};

export default DisplayingExpense;
