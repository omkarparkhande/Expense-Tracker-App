import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

function NewExpense(props) {
  const [expandExpenseForm, setExpandExpenseForm] = useState(false);

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      id: Math.random().toString(),
      ...enteredExpenseData,
    };
    props.onAddExpense(expenseData);
    setExpandExpenseForm(false);
  };

  const onAddExpense = () => {
    setExpandExpenseForm(true);
  };

  const onCancelExpense = () => {
    setExpandExpenseForm(false);
  };

  return (
    <div className="new-expense">
      {!expandExpenseForm && <button onClick={onAddExpense}>Add New Expense</button>}
      {expandExpenseForm && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler}  onCancelExpense={onCancelExpense}/>}
    </div>
  );
}

export default NewExpense;
