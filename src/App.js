import { useState } from "react";
import Card from "./components/UI/Card";
import ExpenseItem from "./components/expense/ExpenseItem";
import NewExpense from "./components/newExpense/NewExpense";
function App() {
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

  const onNewExpenseAddition = (new_expense) => {
    setAllExpense((prevExpense) => [...prevExpense, new_expense]);
  };

  return (
    <div className="App">
      <h2>Expense Item!</h2>
      <Card className="expense container">
        <NewExpense onNewExpenseAddition={onNewExpenseAddition} />
        {allExpenses.map((expense, i) => {
          return <ExpenseItem prop={expense} key={i} />;
        })}
      </Card>
    </div>
  );
}

export default App;
