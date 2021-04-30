import { createSlice } from '@reduxjs/toolkit';

// Types
import type { uiState } from './types';

const initialState: uiState = {
    message: null,
};

const uiSlice = createSlice({
    name: 'ui',
    initialState,
    reducers: {
        clearMessage: () => {
            return {
                message: null,
            };
        },
        setMessage: (state, action) => {
            return {
                ...state,
                message: action.payload,
            };
        },
    }
})

export const {clearMessage, setMessage} = uiSlice.actions;
export default uiSlice.reducer;