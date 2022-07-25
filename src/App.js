import Expenses from "./components/Expenses"
import './App.css'

function App() {
  let expenses = [
    {title: "My Birthday party", amount : 2050, date: new Date(2022,5,14)},
    {title: "Bangalore Trip", amount : 10000, date: new Date(2022,5,1)},
    {title: "Kashmir Trip", amount : 95000, date: new Date(2022,2,14)},
    {title: "Yercaud Trip", amount : 1200, date: new Date(2022,5,14)},
    {title: "hospital Medicine", amount : 750, date: new Date(2022,4,14)},
  ]
  return (
    <div >
      <h1>Let gets starts</h1>
      <Expenses item = {expenses} ></Expenses>
    </div>
  );
}

export default App;
