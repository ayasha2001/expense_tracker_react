import React from "react";
import "./ExpenseDate.css";

const ExpenseDetail = ({ prop }) => {
  const { title, price, location } = prop;
  const handleClick = (event) => {
    const elementToRemove = event.target.closest('.card '); 
    // closest method to find the closest ancestor element with a specified class 
    if (elementToRemove) {
        elementToRemove.remove();
    }  };
  return (
    <div>
      <div className="expense-item__description">
        <h2>{title}</h2>
        <h2>{location}</h2>
        <div className="expense-item__price"> {price} </div>
        <button onClick={handleClick}>delete item</button>
      </div>
    </div>
  );
};

export default ExpenseDetail;
