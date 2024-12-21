import React from 'react';
import { useDKP } from '../../hooks/useDKP';
import { TransactionList } from './TransactionList';

export const PointDisplay: React.FC = () => {
    const { balance, transactions, loading, error } = useDKP();

    if (loading) return <div className="flex items-center justify-center">Loading...</div>;
    if (error) return <div className="text-red-500">{error}</div>;

    return (
        <div className="p-4 bg-white rounded-lg shadow">
            <div className="mb-6">
                <h2 className="text-2xl font-bold">DKP Balance</h2>
                <div className="text-4xl font-bold text-blue-600">{balance}</div>
            </div>
            
            <div>
                <h3 className="text-xl font-semibold mb-4">Recent Transactions</h3>
                <TransactionList transactions={transactions.slice(0, 5)} />
            </div>
        </div>
    );
};


