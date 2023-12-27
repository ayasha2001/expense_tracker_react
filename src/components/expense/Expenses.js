import React, { useState } from "react";
import Card from "../UI/Card";
import NewExpense from "../newExpense/NewExpense";
import ExpenseFilter from "./ExpenseFilter";
import DisplayingExpense from "./DisplayingExpense";
import ExpenseChart from "./ExpenseChart";

const DUMMY_EXPENSES = [
  {
    date: new Date(2023, 11, 20),
    title: "Food",
    price: "10",
    id: 1,
  },
  {
    date: new Date(2023, 11, 21),
    title: "Petrol",
    price: "200",
    id: 2,
  },
  {
    date: new Date(2023, 11, 21),
    title: "Movies",
    price: "33",
    id: 3,
  },
];
const Expenses = () => {
  const [allExpenses, setAllExpense] = useState(DUMMY_EXPENSES);
  const [filteredYear, setFilteredYear] = useState("2023");

  const onNewExpenseAddition = (new_expense) => {
    setAllExpense((prevExpense) => [new_expense, ...prevExpense]);
  };

  const filterChangeHandler = (selectedYear) => {
    // console.log(selectedYear)
    setFilteredYear(selectedYear);
  };

  let filteredExpenses = allExpenses.filter((expense) => {
    return new Date(expense.date).getFullYear() == filteredYear;
  });

  return (
    <div>
      {/* <h2>Expense Item!</h2> */}
      <NewExpense onNewExpenseAddition={onNewExpenseAddition} />
      <Card className="expense container">
        <ExpenseFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        <ExpenseChart expenses={filteredExpenses} />
        <div>
          <DisplayingExpense filteredExpenses={filteredExpenses} />
        </div>
      </Card>
    </div>
  );
};

export default Expenses;
