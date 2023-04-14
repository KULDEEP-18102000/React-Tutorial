import ExpenseDate from './ExpenseDate.js';
import './ExpenseItem.css';
// import ExpenseDetails from './ExpenseDetails.js';
import ExpenseDetails from './ExpenseDetails.js';

function ExpenseItem(props) {
  console.log(props.title)
  return (
    <div className='expense-item'>
      <ExpenseDate date={props.date} />
      <ExpenseDetails title={props.title} amount={props.amount} LocationOfExpenditure={props.LocationOfExpenditure} />
      {/* <ExpenseDetails title={props.title}  /> */}
    </div>
  );
}

export default ExpenseItem;