import React from 'react';
import './ExpenseList.css'; // Import the ExpenseList.css styles

const ExpenseList = ({ expenses }) => {
    return (
        <ul>
            {expenses.map((expense) => (
                <li key={expense.id}>
                    <span className="description">{expense.description}</span>
                    <span className={`amount ${expense.amount < 0 ? 'negative' : ''}`}>
            {expense.amount < 0 ? '-' : ''}
                        ${Math.abs(expense.amount)}
          </span>
                </li>
            ))}
        </ul>
    );
};

export default ExpenseList;
