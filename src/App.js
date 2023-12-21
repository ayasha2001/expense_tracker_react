import ExpenseItem from "./components/ExpenseItem";
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
      {expenses.map((expense, i) => {
        return <ExpenseItem prop={expense} key={i} />;
      })}
      {/* <ExpenseItem /> */}
    </div>
  );
}

export default App;
