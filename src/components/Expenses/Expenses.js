import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card'
import './Expenses.css';

function Expenses(props) {
  return (
    <Card className="expenses">
      <ExpenseItem
        title={props.items[0].title}
        amount={props.items[0].amount}
        date={props.items[0].date}
        LocationOfExpenditure="Gwalior"
      />
      <ExpenseItem
        title={props.items[1].title}
        amount={props.items[1].amount}
        date={props.items[1].date}
        LocationOfExpenditure="Gwalior"
      />
      <ExpenseItem
        title={props.items[2].title}
        amount={props.items[2].amount}
        date={props.items[2].date}
        LocationOfExpenditure="Gwalior"
      />
      <ExpenseItem
        title={props.items[3].title}
        amount={props.items[3].amount}
        date={props.items[3].date}
        LocationOfExpenditure="Gwalior"
      />
    </Card>
  );
}

export default Expenses;