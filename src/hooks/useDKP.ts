import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useAuth } from './useAuth';
import { fetchDKPBalance } from '../store/slices/dkpSlice';
import { RootState } from '../store/rootReducer';

export const useDKP = () => {
    const dispatch = useDispatch();
    const user = useAuth();
    const dkp = useSelector((state: RootState) => state.dkp);

    useEffect(() => {
        if (user?.id) {
            dispatch(fetchDKPBalance(user.id));
        }
    }, [dispatch, user?.id]);

    return dkp;
};