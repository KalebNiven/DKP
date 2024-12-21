import { combineReducers } from 'redux';
import dkpReducer from './slices/dkpSlice';

const rootReducer = combineReducers({
    dkp: dkpReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;