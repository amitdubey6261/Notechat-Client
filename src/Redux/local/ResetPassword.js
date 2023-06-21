import { createAsyncThunk , createReducer } from '@reduxjs/toolkit' ; 
import axios from 'axios' ; 
import { apiConfig, backendUrl, handleApiError } from '../../static';
import { toast } from 'react-toastify';


const initialState = {
    res : [] , 
    error : null , 
    loading : false , 
    status : false , 
}

export const resetPassword = createAsyncThunk( 'user/resetPass' , async( fields , {rejectWithValue})=>{
    try{
        console.log(fields) ; 
        const res = await axios.post(`${backendUrl()}/api/v1/password/reset/${fields.id}` , fields.password , {...apiConfig()}) ;  
        return res ; 
    }
    catch(e){
        toast.error(e.message) ; 
        return handleApiError( e , handleApiError ) ; 
    }
})

export const resetReducer = createReducer( initialState , {
    [resetPassword.pending ] : ( state , action )=>{
        state.loading = true;  
        state.status = false ; 
    }
    ,
    [resetPassword.fulfilled] : ( state , action )=>{
        toast.success( 'password change successfull ') ; 
        state.loading = false ; 
        state.status = true ; 
        state.res = action.payload ; 
    },
    [resetPassword.rejected] : ( state , action )=>{
        state.loading = false ; 
        state.status = false ; 
        state.res = action.payload ; 
    }
})
