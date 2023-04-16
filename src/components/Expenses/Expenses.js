import React, { useState } from "react";

import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2020");

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
    // props.onSetYear(selectedYear)
  };

  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() == filteredYear;
  });

  let expensesContent = <p>No expenses to display</p>;

  if (filteredExpenses.length > 0) {
    expensesContent = filteredExpenses.map((item) => (
      <ExpenseItem
        key={item.id}
        title={item.title}
        amount={item.amount}
        date={item.date}
      />
    ));
  }

  if (filteredExpenses.length == 1) {
    expensesContent = (
      <div>
      <ExpenseItem
        key={filteredExpenses[0].id}
        title={filteredExpenses[0].title}
        amount={filteredExpenses[0].amount}
        date={filteredExpenses[0].date}
      />
      <p>Only single Expense here. Please add more...</p>
      </div>
    );
  
  }

  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={filteredYear}
        onChangeFilter={filterChangeHandler}
      />
      
      {expensesContent}
    </Card>
  );
};

export default Expenses;
