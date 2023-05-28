import { createReducer } from "@reduxjs/toolkit";

const initialState = {
    loginDisplay : false ,
    registerDisplay : false ,
}

export const authPageDisplay = createReducer( initialState , {
    toggleLogin : (state , action)=>{
        if(state.loginDisplay == false ){
            state.loginDisplay = true ; 
        }
        else{
            state.loginDisplay = false ; 
        }
    } , 
    toggleRegister :(state , action)=>{
        if(state.registerDisplay == false){
            state.registerDisplay = true ; 
        }
        else{
            state.registerDisplay = false ; 
        }
    }
})