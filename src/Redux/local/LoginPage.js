import { createReducer } from "@reduxjs/toolkit";

const initialState = {
    loginDisplay : false ,
}

export const Login = createReducer( initialState , {

    toggleLogin : (state , action)=>{
        if(state.loginDisplay == false ){
            state.loginDisplay = true ; 
        }
        else{
            state.loginDisplay = false ; 
        }
    } 

})