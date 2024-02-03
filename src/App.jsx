import React, { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const dummy_expense = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2021, 5, 12),
  },
  {
    id: "e5",
    title: "Vacation Expenses",
    amount: 1200.0,
    date: new Date(2021, 11, 30),
  },
  {
    id: "e6",
    title: "Home Security System",
    amount: 350.0,
    date: new Date(2024, 2, 15),
  },
  {
    id: "e7",
    title: "New Laptop",
    amount: 999.99,
    date: new Date(2022, 4, 8),
  },
  {
    id: "e8",
    title: "Monthly Rent",
    amount: 1200.0,
    date: new Date(2022, 6, 1),
  },
  {
    id: "e9",
    title: "Health Insurance",
    amount: 200.5,
    date: new Date(2022, 8, 10),
  },
  {
    id: "e10",
    title: "Gym Membership Renewal",
    amount: 80.0,
    date: new Date(2022, 9, 5),
  },
  {
    id: "e11",
    title: "Home Decor",
    amount: 150.25,
    date: new Date(2022, 10, 22),
  },
  {
    id: "e12",
    title: "New Smartphone",
    amount: 699.99,
    date: new Date(2023, 1, 15),
  },
  {
    id: "e13",
    title: "Annual Subscription Service",
    amount: 60.0,
    date: new Date(2023, 3, 7),
  },
  {
    id: "e14",
    title: "Appliance Repairs",
    amount: 180.5,
    date: new Date(2023, 5, 18),
  },
  {
    id: "e15",
    title: "Home Office Furniture",
    amount: 350.0,
    date: new Date(2019, 1, 5),
  },
  {
    id: "e16",
    title: "Utility Bills",
    amount: 180.0,
    date: new Date(2019, 3, 20),
  },
  {
    id: "e17",
    title: "Weekend Getaway",
    amount: 500.0,
    date: new Date(2020, 5, 8),
  },
  {
    id: "e18",
    title: "New Kitchen Appliances",
    amount: 600.0,
    date: new Date(2020, 7, 15),
  },
  {
    id: "e19",
    title: "Pet Supplies",
    amount: 75.5,
    date: new Date(2020, 9, 2),
  },
];

function App() {
  const [expense, setExpense] = useState(dummy_expense);

  const addExpenseHandler = (expense) => {
    setExpense((prevExpese) => {
      return [expense, ...prevExpese];
    });
  };

  return (
    <>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expense} />
    </>
  );
}

export default App;
