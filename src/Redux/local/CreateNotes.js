import { createAsyncThunk, createReducer } from "@reduxjs/toolkit"
import { apiConfig, backendUrl, handleApiError } from "../../static"
import axios from "axios";
import { toast } from "react-toastify";

const initialstate = {
    res : [] , 
    error : null , 
    loading : false , 
    status : false , 
}

export const createNote = createAsyncThunk( 'products/create' , async( fields , {rejectWithValue})=>{
    try{
        const res = await axios.post( `${backendUrl()}/api/v1/notes/create` , {...fields} , {...apiConfig()} ) ;
        return res ; 
    } 
    catch(e){
        toast.error(e.message);
        return handleApiError( e , rejectWithValue ) ; 
    }
})

export const createNotesReducer = createReducer( initialstate , {
    [createNote.pending] : ( state , action ) =>{
        state.status = false ; 
        state.loading = true ; 
    }
    ,
    [createNote.fulfilled] : ( state , action ) =>{
        state.status =  true ; 
        state.loading = false ; 
    }
    ,
    [ createNote.rejected ] : ( state , action )=>{
        state.status = false ; 
        state.loading = false ; 
    }
})