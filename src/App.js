import React,{useState} from 'react';

import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';

const App = () => {


  const expenses = [
    {
      id: 'e1',
      title: 'Toilet Paper',
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
    {
      id: 'e3',
      title: 'Car Insurance',
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: 'e4',
      title: 'New Desk (Wooden)',
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ];

  const [ExpensesItems,setExpenses]=useState(expenses)

  const addExpenseHandler=(expense)=>{
    console.log(expense)
    // expenses.push(expense)
    // const new_expenses=[...ExpensesItems,expense]
    // setExpenses(new_expenses)
    setExpenses((prevExpenses)=>{
      return [expense,...prevExpenses]
    })
    expenses.push(expense)
    console.log(expenses)
  }

  // const setYearHandler=(year)=>{
  //   const currentYearExpenses=expenses.filter(item=>{
  //     return item.date.getFullYear()==year
  //   })
  //   setExpenses(currentYearExpenses)
  // }

  // return React.createElement(
  //   'div',
  //   {},
  //   React.createElement('h2', {}, "Let's get started!"),
  //   React.createElement(Expenses, { items: expenses })
  // );

  return (
    <div>
      <h2>Let's get started!</h2>
      <NewExpense onAddExpense={addExpenseHandler}/>
      <Expenses  items={ExpensesItems} />
    </div>
  );
}

export default App;