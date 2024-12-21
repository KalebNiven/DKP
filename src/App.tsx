import React from 'react';
import { TransactionList } from './components/DKP/TransactionList';
import { DKPTransaction } from './types';

const App: React.FC = () => {
    const transactions: DKPTransaction[] = [
        {
            id: 1,
            description: 'Transaction 1',
            timestamp: '2023-10-01T12:00:00Z',
            type: 'EARN',
            amount: 100,
        },
        {
            id: 2,
            description: 'Transaction 2',
            timestamp: '2023-10-02T12:00:00Z',
            type: 'SPEND',
            amount: 50,
        },
    ];

    return (
        <div className="App">
            <h1 className="text-2xl font-bold">Transaction List</h1>
            <TransactionList transactions={transactions} />
        </div>
    );
};

export default App;