import { createAsyncThunk, createReducer } from "@reduxjs/toolkit"
import { apiConfig, backendUrl, handleApiError } from "../../static"
import axios from "axios"

const initialState = {
    res : [] , 
    status : false , 
    error : null , 
}

export const createRazorOrder = createAsyncThunk( 'Order/create' , async( fields , {rejectWithValue} )=>{
    try{
        const res = await axios.post( `${backendUrl()}/api/v1/payment/order` , {...fields} , {...apiConfig()}) ;
        return res ;  
    }
    catch(e){
        return handleApiError( e , rejectWithValue );
    }
})

export const RazorOrderReducer = createReducer( initialState , {
    [createRazorOrder.pending ]: ( state , action )=>{
        state.status = false ;
    }
    ,
    [createRazorOrder.fulfilled] : ( state ,action )=>{
        state.status = true ; 
        state.res = action.payload ; 
    }
    ,
    [ createRazorOrder.rejected] : ( state , action )=>{
        state.status = false ; 
        state.res = action.payload ; 
    }
})