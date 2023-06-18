import { createReducer } from "@reduxjs/toolkit";

const initialState = {
    urlToPdf : null ,
}

export const setPdfReducer = createReducer( initialState , {
    setPdf : ( state , action )=>{
        state.urlToPdf = action.payload ; 
    }
})

