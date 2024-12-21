
interface DKPTransaction {
    id: string;
    amount: number;
    type: 'EARN' | 'SPEND';
    description: string;
    timestamp: string;
}

interface DKPState {
    balance: number;
    transactions: DKPTransaction[];
    loading: boolean;
    error: string | null;
}


