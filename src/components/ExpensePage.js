import React from 'react';
import ExpenseList from './ExpenseList';

const expensesData = [
    { id: 1, description: 'Rent', amount: -1000 },
    { id: 2, description: 'Groceries', amount: -200 },
    { id: 3, description: 'Utilities', amount: -300 },
    { id: 4, description: 'Salary', amount: 2000 },
];

const ExpensePage = () => {
    return (
        <div>
            <h1>Expense Page</h1>
            <ExpenseList expenses={expensesData} />
        </div>
    );
};

export default ExpensePage;
