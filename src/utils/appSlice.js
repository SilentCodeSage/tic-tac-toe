import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
    name:"app",
    initialState:{
        headerText:"Tic Tac Toe"
    },
    reducers:{
        setHeaderText:(state,action) =>{
            state.headerText = (action.payload);
        }
    }
});

export default appSlice.reducer;
export const {setHeaderText} = appSlice.actions;

