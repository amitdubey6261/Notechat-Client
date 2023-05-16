import { createReducer } from "@reduxjs/toolkit";

const initState = {
    loading : false , 
}

export const loader =  createReducer( initState , {
    startLoading : (state , action)=>{
        state.loading = true ; 
    } , 
    stopLoding : (state , action )=>{
        state.loading = false ; 
    }
})