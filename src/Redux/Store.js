import { configureStore } from "@reduxjs/toolkit";

import { loader } from "./global/Loder";
import { Login } from "./local/LoginPage";
import { Register } from "./local/RegistrationPage";
import { ProductPage } from "./local/ProductPage";

const store = configureStore({
    reducer : {
        loader ,  
        Login ,
        Register ,  
        ProductPage        
    }
})

export default store ; 