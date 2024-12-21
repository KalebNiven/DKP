import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

interface DKPState {
    balance: number;
    transactions: any[];
    loading: boolean;
    error: string | null;
}

const initialState: DKPState = {
    balance: 0,
    transactions: [],
    loading: false,
    error: null,
};

// Async thunk to fetch DKP balance
export const fetchDKPBalance = createAsyncThunk(
    'dkp/fetchDKPBalance',
    async (userId: string) => {
        const response = await fetch(`/api/dkp/${userId}`);
        const data = await response.json();
        return data;
    }
);

const dkpSlice = createSlice({
    name: 'dkp',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchDKPBalance.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchDKPBalance.fulfilled, (state, action) => {
                state.loading = false;
                state.balance = action.payload.balance;
                state.transactions = action.payload.transactions;
            })
            .addCase(fetchDKPBalance.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message || 'Failed to fetch DKP';
            });
    },
});

export default dkpSlice.reducer;