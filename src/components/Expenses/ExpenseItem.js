import React,{useState} from 'react';

import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import './ExpenseItem.css';

const ExpenseItem = (props) => {

  const [title,setTitle]=useState(props.title)

  const [amount,setAmount]=useState(props.amount)

  const clickHandler=()=>{
    setTitle('updated')
    console.log(title)
    console.log("clicked!!!")
  }

  const amountHandler=()=>{
    setAmount("100")
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
        <h2>{title}</h2>
        <div className='expense-item__price'>${amount}</div>
        <button onClick={clickHandler}>Change Title</button>
        <button onClick={amountHandler}>change amount</button>
        <button onClick={deleteHandler}>Delete</button>
      </div>
    </Card>
  );
}

export default ExpenseItem;
