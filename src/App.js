import Expenses from "./components/Expenses/Expenses"
import NewExpense from "./components/NewExpenses/NewExpense";
import './App.css'

function App() {
  let expenses = [
    {title: "party", amount : 2050, date: new Date(2022,5,14)},
    {title: "Investment", amount : 10000, date: new Date(2022,5,1)},
    {title: "Tour & Travel", amount : 95000, date: new Date(2022,2,14)},
    {title: "Essentials", amount : 1200, date: new Date(2022,5,14)},
    {title: "hospital", amount : 750, date: new Date(2022,4,14)},
  ];

  // handling Data from NewExpense
  const addExpenseHandler = expense => {
    console.log("in App.js")
    console.log(expense)
  }

  return (
    <div >
      <NewExpense onAddExpense = {addExpenseHandler} />
      <Expenses item = {expenses} ></Expenses>
    </div>
  );
}

export default App;
