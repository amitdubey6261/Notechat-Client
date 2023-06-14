import { createReducer } from "@reduxjs/toolkit"

const initialState = {
    keyword : "" , 
    category : "notes" , 
    page : 1  , 
}

export const QueryFormReducer = createReducer( initialState , {
    nextPage : ( state , action )=>{
        state.page += 1 ; 
    }
    ,
    prevPage : ( state , action )=>{
        state.page -= 1 ; 
    }
    ,
    setKeyWord : ( state , action )=>{
        state.keyword = action.payload ; 
    }
    ,
    setCategory : ( state , action )=>{
        state.category = action.payload ; 
    }
})