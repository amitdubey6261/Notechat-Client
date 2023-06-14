import { createAsyncThunk, createReducer } from "@reduxjs/toolkit"
import axios from "axios"
import { apiConfig, backendUrl, handleApiError } from "../../static"

const initalState = {
    status : false , 
    res : [] , 
    error : null , 
}

export const getAllNotes = createAsyncThunk( 'notes/all' , async( fields , {rejectWithValue}) =>{
    try{
        let res = undefined ; 
        if( fields == undefined ){
            res = await axios.get( `${backendUrl()}/api/v1/notes/all` ) ; 
        }
        else{
            res = await axios.get( `${backendUrl()}/api/v1/notes/all?keyword=${fields.keyword}&category=${fields.category}&page=${fields.page}` , {...apiConfig()} ) ; 
        }
        return res; 
    }
    catch(e){
        return handleApiError( e , rejectWithValue );
    }
})

export const getAllNotesReducer = createReducer( initalState , {
    [getAllNotes.pending] : ( state , action )=>{
        state.status = false ;
    }
    ,
    [ getAllNotes.fulfilled ] : ( state , action ) =>{
        state.status = true ;
        state.res = action.payload ; 
    }
    ,
    [getAllNotes.rejected] : ( state , action )=>{
        state.status = false , 
        state.res = action.payload ; 
    }
})

