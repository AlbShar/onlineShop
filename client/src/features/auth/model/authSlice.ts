import { createSlice} from "@reduxjs/toolkit";


type InitialState = {
    isAuth: boolean 
}

const initialState: InitialState = {
    isAuth: false
};
const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setAuth(state, action) {
            state.isAuth = action.payload;
        }
    }
});

export const {setAuth} = authSlice.actions;
export const { reducer } = authSlice;