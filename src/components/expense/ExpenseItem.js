import React from "react";
import "./Expense.css";
import ExpenseDate from "./ExpenseDate";
import ExpenseDetail from "./ExpenseDetail";

const ExpenseItem = ({ prop }) => {
  const { date } = prop;
  return (
    <div className="expense-item">
      <ExpenseDate date={date} />
      <ExpenseDetail prop={prop} />
    </div>
  );
};

export default ExpenseItem;
