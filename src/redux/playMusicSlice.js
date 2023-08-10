import { createSlice } from "@reduxjs/toolkit";




const playModeSlice = createSlice({
    name:"playMode",
    initialState:true,
    reducers:{
        changePlayMode(state){
            state = state ? false :true
            return state
        }
    }
})


export const {changePlayMode} = playModeSlice.actions;
export default playModeSlice.reducer;