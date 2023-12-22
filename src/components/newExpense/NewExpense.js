import React from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = ({ onNewExpenseAddition }) => {
  const onAddExpense = (new_expense) => {
    const expense = {
      ...new_expense,
      id: Math.random().toString(),
    };
    onNewExpenseAddition(expense);
  };

  return (
    <div className="new-expense">
      <ExpenseForm onAddExpense={onAddExpense} />
    </div>
  );
};

export default NewExpense;
