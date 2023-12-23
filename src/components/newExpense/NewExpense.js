import React, { useState } from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = ({ onNewExpenseAddition }) => {
  const [showForm, setShowForm] = useState(false);
  const handleClick = () => {
    setShowForm(!showForm);
  };
  const onAddExpense = (new_expense) => {
    const expense = {
      ...new_expense,
      id: Math.random().toString(),
    };
    onNewExpenseAddition(expense);
  };
  console.log(showForm);

  return (
    <div className="new-expense">
      {showForm ? (
        <ExpenseForm onAddExpense={onAddExpense} handleClick={handleClick} />
      ) : (
        <div className="new-expense__actions">
          <button type="submit" onClick={handleClick}>
            Add new expense
          </button>
        </div>
      )}
    </div>
  );
};

export default NewExpense;
