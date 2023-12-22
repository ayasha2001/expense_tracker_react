import React, { useState } from "react";
import "./ExpenseDate.css";

const ExpenseDetail = ({ prop }) => {
  const { title, location } = prop;
  const [price, setPrice] = useState(prop.price)

  const handleDelete = (event) => {
    const elementToRemove = event.target.closest('.card '); 
    // closest method to find the closest ancestor element with a specified class 
    if (elementToRemove) {
        elementToRemove.remove();
    }  };

  const handlePriceUpdate = () => {
      setPrice("rs 100")
  }

  return (
    <div>
      <div className="expense-item__description">
        <h2>{title}</h2>
        <h2>{location}</h2>
        <div className="expense-item__price"> {price} </div>
        <button onClick={handleDelete}>delete item</button>
        <button onClick={handlePriceUpdate}>update item</button>
      </div>
    </div>
  );
};

export default ExpenseDetail;
