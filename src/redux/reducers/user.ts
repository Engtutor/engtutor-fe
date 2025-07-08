import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

interface UserState {
    id: string | null;
    name: string;
    email: string;
}

const initialState: UserState = {
    id: null,
    name: '',
    email: '',
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        login: (
            state,
            action: PayloadAction<{ id: string; name: string; email: string }>
        ) => {
            state.id = action.payload.id;
            state.name = action.payload.name;
            state.email = action.payload.email;
        },
        logout: (state) => {
            state.id = null;
            state.name = '';
            state.email = '';
        },
        updateUser: (
            state,
            action: PayloadAction<{ name?: string; email?: string }>
        ) => {
            if (action.payload.name) state.name = action.payload.name;
            if (action.payload.email) state.email = action.payload.email;
        },
    },
});


export const { login, logout, updateUser } = userSlice.actions;
export default userSlice.reducer;
