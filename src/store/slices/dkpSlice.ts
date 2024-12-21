import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchDKPBalance = createAsyncThunk(
    'dkp/fetchBalance',
    async (userId: string) => {
        const response = await fetch(`/api/dkp/balance/${userId}`);
        return response.json();
    }
);

const dkpSlice = createSlice({
    name: 'dkp',
    initialState: {
        balance: 0,
        transactions: [],
        loading: false,
        error: null
    } as DKPState,
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
    }
});

// src/hooks/useDKP.ts
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useAuth } from './useAuth';
import { fetchDKPBalance } from '../store/slices/dkpSlice';

export const useDKP = () => {
    const dispatch = useDispatch();
    const { user } = useAuth();
    const dkp = useSelector((state) => state.dkp);

    useEffect(() => {
        if (user?.id) {
            dispatch(fetchDKPBalance(user.id));
        }
    }, [dispatch, user?.id]);

    return dkp;
};


