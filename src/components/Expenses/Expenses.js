import React, {useState} from 'react';
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter";
import "./Expenses.css"

function Expenses(props) {
    // initially selected year - 2 way binding
    const [filteredYear, setFilteredYear] = useState('2022')
    const filterChangeHandler = (selectedYear) =>{
        console.log("IN Expenses.js");
        console.log(selectedYear);
        setFilteredYear(selectedYear)
    };

    return(
        <div className="expenses">
            <ExpensesFilter selected = {filteredYear}  onChangeFilter={filterChangeHandler}/>
            <ExpenseItem title= {props.item[0].title} amount={props.item[0].amount} date={props.item[0].date}  ></ExpenseItem>
            <ExpenseItem title= {props.item[1].title} amount={props.item[1].amount} date={props.item[1].date}  ></ExpenseItem>
            <ExpenseItem title= {props.item[2].title} amount={props.item[2].amount} date={props.item[2].date}  ></ExpenseItem>
            <ExpenseItem title= {props.item[3].title} amount={props.item[3].amount} date={props.item[3].date}  ></ExpenseItem>
            <ExpenseItem title= {props.item[4].title} amount={props.item[4].amount} date={props.item[4].date}  ></ExpenseItem>
        </div>
    );
}

export default Expenses;