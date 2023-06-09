import { configureStore , getDefaultMiddleware } from "@reduxjs/toolkit";

import { loader } from "./global/Loder";
import { loadUserReducer } from "./global/LoadUser";
import { Login } from "./local/LoginPage";
import { Register } from "./local/RegistrationPage";
import { ProductPage } from "./local/ProductPage";
import { AdminReducer, fetchAllUsers } from "./local/AdminPage";

const store = configureStore({
    reducer: {
        loader,
        loadUserReducer , 
        Login,
        Register,
        ProductPage,
        AdminReducer,
        fetchAllUsers,
    },
    middleware: [
        ...getDefaultMiddleware({
            serializableCheck: false,
        }),
    ],
});

export default store;
