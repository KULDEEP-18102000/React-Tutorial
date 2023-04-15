import React,{useState} from 'react';

import './ExpenseForm.css';

const ExpenseForm = () => {

    const [enteredTitle,setTitle]=useState("")
    const [enteredAmount,setAmount]=useState(0)
    const [enteredDate,setDate]=useState(null)

    const changeTitleFunction=(e)=>{
        console.log(e.target.name)
        console.log(e.target.value)
        if(e.target.name=='title'){
            setTitle(e.target.value)
        }
        else if(e.target.name=='amount'){
            setAmount(e.target.value)
        }
        else{
            setDate(e.target.value)
        }
    }

    const submitFunction=(e)=>{
        e.preventDefault()
        const obj={
            title:enteredTitle,
            amount:enteredAmount,
            date:new Date(enteredDate) 
        }

        console.log(obj)
    }

  return (
    <form onSubmit={submitFunction}>
      <div className='new-expense__controls'>
        <div className='new-expense__control'>
          <label>Title</label>
          <input name='title' type='text' onChange={changeTitleFunction} />
        </div>
        <div className='new-expense__control'>
          <label>Amount</label>
          <input name='amount' type='number' min='0.01' step='0.01' onChange={changeTitleFunction} />
        </div>
        <div className='new-expense__control'>
          <label>Date</label>
          <input name='date' type='date' min='2019-01-01' max='2022-12-31' onChange={changeTitleFunction} />
        </div>
      </div>
      <div className='new-expense__actions'>
        <button type='submit'>Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;