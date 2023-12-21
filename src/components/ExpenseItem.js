import React from "react";
import "./ExpenseItem.css";

const ExpenseItem = ({ prop }) => {
  const { date, title, price, location } = prop;
  return (
    <>
      <div className="expense-item">
        <div>{date.toLocaleDateString()}</div>
        <div className="expense-item__description">
          <h2>{title}</h2>
          <h2>{location}</h2>
          <div className="expense-item__price"> {price} </div>
        </div>
      </div>
    </>
  );
};

export default ExpenseItem;
