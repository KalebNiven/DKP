import React from 'react';
import { format } from 'date-fns';

interface DKPTransaction {
    id: string;
    description: string;
    timestamp: string;
    type: 'EARN' | 'SPEND';
    amount: number;
}

interface Props {
    transactions: DKPTransaction[];
}

export const TransactionList: React.FC<Props> = ({ transactions }) => {
    return (
        <div className="space-y-2">
            {transactions.map((transaction) => (
                <div 
                    key={transaction.id}
                    className="flex justify-between items-center p-2 bg-gray-50 rounded"
                >
                    <div>
                        <div className="font-medium">{transaction.description}</div>
                        <div className="text-sm text-gray-500">
                            {format(new Date(transaction.timestamp), 'MMM d, yyyy HH:mm')}
                        </div>
                    </div>
                    <div className={`font-bold ${
                        transaction.type === 'EARN' ? 'text-green-600' : 'text-red-600'
                    }`}>
                        {transaction.type === 'EARN' ? '+' : '-'}{transaction.amount}
                    </div>
                </div>
            ))}
        </div>
    );
};