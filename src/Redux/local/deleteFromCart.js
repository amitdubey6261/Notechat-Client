import { createAsyncThunk, createReducer } from "@reduxjs/toolkit"
import { apiConfig, backendUrl, handleApiError } from "../../static"
import axios from "axios"
import { toast } from "react-toastify"

const initialState = {
    status : false , 
    res : [] , 
    error : null ,
}

export const deleteFromCart = createAsyncThunk( 'cart/delete' , async(fields , {rejectWithValue})=>{
    try{
        const res = await axios.delete( `${backendUrl()}/api/v1/cart/delete/${fields.uid}/${fields.pid}` ,  {...apiConfig()}) ; 
        return res ; 
    }
    catch(e){
        toast.error(e.message);
        return handleApiError( e , rejectWithValue ) ; 
    }
})

export const deleteFromCartReducer = createReducer( initialState , {
    [deleteFromCart.pending] : ( state , action )=>{
        state.status = false ;
    }
    ,
    [deleteFromCart.fulfilled] : ( state , action )=>{
        state.status = true ; 
        state.res = action.payload ; 
    }
    ,
    [deleteFromCart.rejected] : ( state , action )=>{
        state.status = false ; 
        state.error = action.payload ; 
    }
})