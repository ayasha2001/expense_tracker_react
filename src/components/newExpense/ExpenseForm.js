import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = ({ onAddExpense, handleClick }) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredPrice, setEnteredPrice] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  const handleChangeTitle = (event) => {
    setEnteredTitle(event.target.value);
  };

  const handleChangeAmount = (event) => {
    setEnteredPrice(event.target.value);
  };

  const handleChangeDate = (event) => {
    setEnteredDate(event.target.value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    const expenseData = {
      title: enteredTitle,
      price: enteredPrice,
      date: new Date(enteredDate),
    };
    setEnteredTitle("");
    setEnteredDate("");
    setEnteredPrice("");
    onAddExpense(expenseData);
  };

  const handleCancel = () => {
    handleClick();
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <div className="new-expense__controls">
        <div className="new-expense__control ">
          <label>Title</label>
          <input type="text" value={enteredTitle} onChange={handleChangeTitle} />
        </div>
        <div className="new-expense__control ">
          <label>Amount</label>
          <input type="number" value={enteredPrice} onChange={handleChangeAmount} />
        </div>
        <div className="new-expense__control ">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2023-12-31"
            value={enteredDate}
            onChange={handleChangeDate}
          />
        </div>
        <div className="new-expense__actions">
          <button type="button" onClick={handleCancel}>
            Cancel
          </button>
          <button type="submit">Add expense</button>
        </div>
      </div>
    </form>
  );
};

export default ExpenseForm;
