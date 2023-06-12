import { configureStore , getDefaultMiddleware } from "@reduxjs/toolkit";

import { loader } from "./global/Loder";
import { loadUserReducer } from "./global/LoadUser";
import { logoutReducer } from "./global/Logout";
import { Login } from "./local/LoginPage";
import { Register } from "./local/RegistrationPage";
import { ProductPage } from "./local/ProductPage";
import { ForgotReducer } from "./local/ForgotPage";
import { AdminReducer, fetchAllUsers } from "./local/AdminPage";
import { createNotesReducer } from "./local/CreateNotes";
import { getAllNotesReducer } from "./local/GetAllNotes";

const store = configureStore({
    reducer: {
        loader,
        loadUserReducer , 
        Login,
        logoutReducer ,
        Register,
        ProductPage,
        AdminReducer,
        fetchAllUsers,
        ForgotReducer , 
        createNotesReducer , 
        getAllNotesReducer , 
    },
    middleware: [
        ...getDefaultMiddleware({
            serializableCheck: false,
        }),
    ],
});

export default store;
