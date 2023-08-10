import { configureStore } from "@reduxjs/toolkit";

import darkModeReducer from './darkModeSlice'
import playModeSlice from './playMusicSlice'

const store = configureStore({
    reducer:{
        darkMode :darkModeReducer,
        playMode:playModeSlice,
      
    }

})


export default store