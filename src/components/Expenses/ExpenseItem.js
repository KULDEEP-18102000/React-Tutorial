import React from 'react';

import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import './ExpenseItem.css';

const ExpenseItem = (props) => {
  const clickHandler=()=>{
    console.log("clicked!!!")
  }

  const deleteHandler=(e)=>{
    // console.log(e.target.parentNode)
    // console.log(e.target.parentNode.parentNode)
    e.target.parentNode.parentNode.remove(e.target.parentNode)
    
  }

  return (
    <Card className='expense-item'>
      <ExpenseDate date={props.date} />
      <div className='expense-item__description'>
        <h2>{props.title}</h2>
        <div className='expense-item__price'>${props.amount}</div>
        <button onClick={clickHandler}>Change Title</button>
        <button onClick={deleteHandler}>Delete</button>
      </div>
    </Card>
  );
}

export default ExpenseItem;
