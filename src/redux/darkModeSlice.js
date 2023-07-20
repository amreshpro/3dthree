import { createSlice } from "@reduxjs/toolkit";



const darkModeSlice = createSlice({
    name:"darkMode",
    initialState:false,
    reducers:{
        changeColorMode(state,action){
            state = state ? false :true
            return state
        }
    }
})


export const {changeColorMode} = darkModeSlice.actions;
export default darkModeSlice.reducer;