import React, { useState } from "react";
import './ExpenseForm.css'

const ExpenseForm = () => {
  // const [title,setTitle] = useState()
  // const [location,setLocation] = useState()
  // const [price,setPrice] = useState()

  const handleChangeTitle = (event) => {
    console.log(event.target.value);
  };

  const handleChangeAmount = (event) => {
    console.log(event.target.value);
  };

  const handleChangeDate = (event) => {
    console.log(event.target.value);
  };

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
