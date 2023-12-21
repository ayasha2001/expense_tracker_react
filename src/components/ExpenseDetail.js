import React from "react";
import "./ExpenseDate.css";

const ExpenseDetail = ({ prop }) => {
  const { title, price, location } = prop;
  return (
    <div>
      <div className="expense-item">
        <div className="expense-item__description">
          <h2>{title}</h2>
          <h2>{location}</h2>
          <div className="expense-item__price"> {price} </div>
        </div>
      </div>
    </div>
  );
};

export default ExpenseDetail;
