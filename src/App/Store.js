import { configureStore } from "@reduxjs/toolkit";
import ProductReducer from '../Features/CardDataSlice'
 const store =  configureStore({
    reducer : {
        product : ProductReducer
    }
 })

 export default store ;