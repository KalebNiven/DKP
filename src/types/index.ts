export interface DKPTransaction {
    id: string;
    description: string;
    timestamp: string; // ISO 8601 format
    amount: number;
    type: 'EARN' | 'SPEND';
}