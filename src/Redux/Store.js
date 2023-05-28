import { configureStore } from "@reduxjs/toolkit";

import { loader } from "./global/Loder";
import { authPageDisplay } from "./local/Login";

const store = configureStore({
    reducer : {
        // loader : loader ,
        loader ,  
        authPageDisplay , 
    }
})

export default store ; 