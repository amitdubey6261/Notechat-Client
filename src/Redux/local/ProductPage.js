import { createReducer } from "@reduxjs/toolkit";

const initialState = {
    display : false ,
    res : [] , 
    status : null ,  
}

export const ProductPage = createReducer( initialState , {
    toggleProduct : ( state , action )=>{
        if( state.display == false ){
            state.display = true ; 
        }
        else {
            state.display = false ; 
        }
    }
})