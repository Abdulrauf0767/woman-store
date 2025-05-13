import { configureStore } from "@reduxjs/toolkit";
import ProductReducer from '../Features/CardDataSlice'
 const store =  configureStore({
    reducer : {
        cardData : ProductReducer
    }
 })

 export default store ;