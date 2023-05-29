import { configureStore } from "@reduxjs/toolkit";

import { loader } from "./global/Loder";
import { LoginRegister } from "./local/Login";
import { ProductPage } from "./local/ProductPage";

const store = configureStore({
    reducer : {
        loader ,  
        LoginRegister ,
        ProductPage ,  
    }
})

export default store ; 