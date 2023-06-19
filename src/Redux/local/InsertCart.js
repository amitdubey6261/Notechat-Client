import { createAsyncThunk, createReducer } from "@reduxjs/toolkit"
import axios from "axios"
import { apiConfig, backendUrl, handleApiError } from "../../static"
import { toast } from "react-toastify"

const initialState = {
    res : [] , 
    status : false , 
    error : null , 
}


export const insertInCart = createAsyncThunk( 'Cart/insert' , async( fields , {rejectWithValue})=>{
    try{
        const res = await axios.post( `${backendUrl()}/api/v1/cart/insert` ,  fields , {...apiConfig()}) ; 
        return res ; 
    }
    catch(e){
        toast.error(e.message);
        return handleApiError( e  , rejectWithValue ) ; 
    }
})

export const insertCartReducer = createReducer( initialState , {
    [insertInCart.pending] : ( state , action )=>{
        state.status = false ; 
    }
    ,
    [insertInCart.fulfilled] : ( state , action )=>{
        state.status = true ; 
        state.res = action.payload ; 
    }
    ,
    [insertInCart.rejected] : ( state , action )=>{
        state.status = false ; 
        state.error = action.payload ; 
    }
})