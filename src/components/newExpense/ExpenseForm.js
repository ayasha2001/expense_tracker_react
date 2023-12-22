import React, { useState } from "react";
import './ExpenseForm.css'

const ExpenseForm = () => {
  const [enteredTitle,setEnteredTitle] = useState("")
  const [enteredPrice,setEnteredPrice] = useState("")
  const [enteredDate,setEnteredDate] = useState("")

  const handleChangeTitle = (event) => {
    setEnteredTitle(event.target.value)
  };

  const handleChangeAmount = (event) => {
    setEnteredPrice(event.target.value)
  };

  const handleChangeDate = (event) => {
    setEnteredDate(event.target.value)  };

  return (
    <form>
      <div className="new-expense__controls">
        <div className="new-expense__control ">
          <label>Title</label>
          <input type="text" onChange={handleChangeTitle}/>
        </div>
        <div className="new-expense__control ">
          <label>Amount</label>
          <input type="number" min="0.01" max="0.01" onChange={handleChangeAmount}/>
        </div>
        <div className="new-expense__control ">
          <label>Date</label>
          <input type="date" min="2019-01-01" max="2022-12-31" onChange={handleChangeDate} />
        </div>
        <div className="new-expense__actions">
          <button>Add expense</button>
        </div>

      </div>
    </form>
  );
};

export default ExpenseForm;
