import Card from "./components/UI/Card";
import ExpenseItem from "./components/expense/ExpenseItem";
import NewExpense from "./components/newExpense/NewExpense";
function App() {
  const expenses = [
    {
      date: new Date(2023, 11, 20),
      title: "Food",
      price: "Rs 10",
      location: "Delhi",
    },
    {
      date: new Date(2023, 11, 21),
      title: "Petrol",
      price: "Rs 200",
      location: "Delhi",
    },
    {
      date: new Date(2023, 11, 21),
      title: "Movies",
      price: "Rs 33",
      location: "Delhi",
    },
  ];
  return (
    <div className="App">
      <h2>Expense Item!</h2>
      <Card className="expense container">
        <NewExpense />
        {expenses.map((expense, i) => {
          return (
            <Card className="expense">
              <ExpenseItem prop={expense} key={i} />
            </Card>
          );
        })}
      </Card>
    </div>
  );
}

export default App;
