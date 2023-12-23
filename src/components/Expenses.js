import React,{useState} from "react";
import Card from "../components/UI/Card"
import ExpenseItem from "../components/expense/ExpenseItem";
import NewExpense from "../components/newExpense/NewExpense";
import ExpenseFilter from "../components/expense/ExpenseFilter";

const Expenses = () => {
  const expenses = [
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

  const [allExpenses, setAllExpense] = useState(expenses);
  const [filteredYear, setFilteredYear] = useState("2023");

  const onNewExpenseAddition = (new_expense) => {
    setAllExpense((prevExpense) => [...prevExpense, new_expense]);
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
      <h2>Expense Item!</h2>
      <NewExpense onNewExpenseAddition={onNewExpenseAddition} />
      <Card className="expense container">
        <ExpenseFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        {filteredExpenses.map((expense, i) => {
          return <ExpenseItem prop={expense} key={i} />;
        })}
      </Card>
    </div>
  );
};

export default Expenses;
