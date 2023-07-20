import { createSlice } from "@reduxjs/toolkit";



const loadingModelSlice = createSlice({
    name:"loadingModel",
    initialState:true,
    reducers:{
isModelLoading(state,action){
    if(action.payload ===undefined || action.payload ==='undefined' || action.payload===null){
state  = false;
return state
    }
}

    }
})


export const {isModelLoading} = loadingModelSlice.actions
export default loadingModelSlice.reducer