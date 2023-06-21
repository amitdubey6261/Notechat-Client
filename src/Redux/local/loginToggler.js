import { createReducer } from "@reduxjs/toolkit"

const initialState = {
    display : false 
}

export const infoTogglerReducer = createReducer( initialState , {
    toggleinfoHeader : ( state , action )=>{
        if( state.display == false ){
            state.display = true ; 
        }
        else{
            state.display = false ; 
        }
    }
})