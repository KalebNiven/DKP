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