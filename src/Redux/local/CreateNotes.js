import { createAsyncThunk, createReducer } from "@reduxjs/toolkit"
import { apiConfig, backendUrl, handleApiError } from "../../static"
import axios from "axios";

const initialstate = {
    res : [] , 
    error : null , 
    status : false , 
}

export const createNote = createAsyncThunk( 'products/create' , async( fields , {rejectWithValue})=>{
    try{
        console.log( 'andar ' , fields );
        const res = await axios.post( `${backendUrl()}/api/v1/notes/create` , {...fields} , {...apiConfig()} ) ;
        return res ; 
    } 
    catch(e){
        console.log(e)
        return handleApiError( e , rejectWithValue ) ; 
    }
})

export const createNotesReducer = createReducer( initialstate , {
    [createNote.pending] : ( state , action ) =>{
        state.status = false ; 
    }
    ,
    [createNote.fulfilled] : ( state , action ) =>{
        state.status =  true ; 
    }
    ,
    [ createNote.rejected ] : ( state , action )=>{
        state.status = false ; 
    }
})