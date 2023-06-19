import { createAsyncThunk, createReducer } from "@reduxjs/toolkit"
import axios from "axios"
import { apiConfig, backendUrl, handleApiError } from "../../static"
import { toast } from "react-toastify"

const initialState = {
    res : [] , 
    status : false , 
    error : null , 
}

export const getProductDetails = createAsyncThunk( 'product/getdetails' , async( fields , {rejectWithValue})=>{
    try{
        const res = await axios.get(`${backendUrl()}/api/v1/notes/${fields}` , {...apiConfig()}) ; 
        return res ; 
    }
    catch(e){
        toast.error(e.message);
        return handleApiError( e , rejectWithValue );
    }
})

export const getProductDetailsReducer = createReducer ( initialState , {
    [getProductDetails.pending] : ( state , action )=>{
        state.status = false ; 
    }
    ,
    [getProductDetails.fulfilled] : ( state , action )=>{
        state.status = true ;
        state.res = action.payload ; 
    }
    ,
    [getProductDetails.rejected] : ( state , action )=>{
        state.status = false ; 
        state.error = action.payload ; 
    }
})