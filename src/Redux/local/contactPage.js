import { createAsyncThunk, createReducer } from "@reduxjs/toolkit"
import { apiConfig, backendUrl, handleApiError } from "../../static"
import axios from "axios"
import { toast } from "react-toastify"

const initialstate = {
    res : [] , 
    status : false , 
    loading : false , 
    error : null , 
}

const initialstate2 = {
    res : [] , 
    status : false , 
    error : null , 
}

export const sendMail = createAsyncThunk( ' user/sendMail ' , async(fields , { rejectWithValue })=>{
    try{
        const res = await axios.post(`${backendUrl()}/api/v1/email/create` , {...fields} , {...apiConfig()});
        return res ; 
    }
    catch(e){
        toast.error(e.message);
        return handleApiError( e  , rejectWithValue );
    }
})

export const getAllMails = createAsyncThunk( 'user/allMails' , async( _ , { rejectWithValue })=>{
    try{
        const res = await axios.get(`${backendUrl()}/api/v1/email/all` , {...apiConfig()}) ; 
        return res ; 
    }
    catch(e){
        return handleApiError( e , rejectWithValue );
    }
})



export const sendEmailReducer = createReducer( initialstate , {
    [sendMail.pending] : ( state , action )=>{
        state.status = false ; 
        state.loading = true ; 
    }
    ,
    [ sendMail.fulfilled ]: ( state , action)=>{
        state.status = true; 
        state.loading = false ; 
        state.res = action.payload ; 
    }
    ,
    [ sendMail.rejected ]: ( state , action )=>{
        state.status = false ; 
        state.loading = false ; 
        state.res = action.payload ; 
    }
})

export const getAllMailReducer = createReducer( initialstate2 , {
    [getAllMails.pending] : ( state , action )=>{
        state.status = false ;
    }
    ,
    [getAllMails.fulfilled] : ( state , action )=>{
        state.status = true ; 
        state.res = action.payload ; 
    }
    ,
    [getAllMails.rejected] : ( state , action )=>{
        state.status = false ; 
        state.res = action.payload ; 
    }
})