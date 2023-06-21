import { createReducer , createAsyncThunk } from "@reduxjs/toolkit";
import { backendUrl , apiConfig , handleApiError } from "../../static";
import axios from "axios"
import { toast } from "react-toastify";

const initialState = {
    display : false , 
    loading : false , 
    res : {} , 
    status : false , 
    error : null , 
}

export const forgotPassword = createAsyncThunk( 'user/forgot ' , async( fields , { rejectWithValue }) =>{
    try{
        console.log('andara ki bat' , fields)
        const res = await axios.post( `${backendUrl()}/api/v1/password/forgot` , { ...fields} , {...apiConfig()} )
        return res ; 
    }
    catch(e){
        toast.error( e.message) ;
        return handleApiError( e , rejectWithValue );
    }
})

export const ForgotReducer = createReducer( initialState , {
    toggleForgot : ( state , action ) =>{
        if( state.display == false ){
            state.display = true
        }
        else{
            state.display = false  
        }
    }
    ,
    [forgotPassword.pending] : ( state , action )=>{
        state.status = false ; 
        state.loading = true ; 
    }
    ,
    [forgotPassword.fulfilled]: ( state , action )=>{
        toast.success("reset link send on your mail")
        state.status = true ; 
        state.res = action.payload ; 
        state.loading = false ; 
    }
    ,
    [forgotPassword.rejected] : ( state , action )=>{
        state.status = false ; 
        state.error = action.payload ; 
        state.loading = false ; 
    }
})