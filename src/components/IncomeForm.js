import React, { useState } from 'react';
import './IncomeForm.css';

const IncomeForm = () => {
    const [date, setDate] = useState('');
    const [description, setDescription] = useState('');
    const [amount, setAmount] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Here, you can handle the submission of the income transaction data
        // For this demo, we'll just log the data to the console
        console.log({ date, description, amount });
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Enter Income Transaction</h2>
            <div>
                <label>Date:</label>
                <input
                    type="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    required
                />
            </div>
            <div>
                <label>Description:</label>
                <input
                    type="text"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    required
                />
            </div>
            <div>
                <label>Amount:</label>
                <input
                    type="number"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    required
                />
            </div>
            <button type="submit">Add Income</button>
        </form>
    );
};

export default IncomeForm;
