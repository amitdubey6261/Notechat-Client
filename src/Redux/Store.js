import { configureStore } from "@reduxjs/toolkit";

import { loader } from "./global/Loder";

const store = configureStore({
    reducer : {
        looader : loader , 
    }
})

export default store ; 