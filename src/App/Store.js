import { configureStore } from "@reduxjs/toolkit";
import ProductReducer from '../Features/CardDataSlice'
import AuthReducer from '../Features/AuthSlice'
 const store =  configureStore({
    reducer : {
        cardData : ProductReducer ,
        auth : AuthReducer ,
    }
 })

 export default store ;