import { createAsyncThunk, createReducer } from "@reduxjs/toolkit"
import axios from "axios"
import { apiConfig, backendUrl, handleApiError } from "../../static"
import { toast } from "react-toastify"

const initialState = {
    res : [] , 
    status : false , 
    error : null , 
}

export const delteUser = createAsyncThunk('user/delte' , async (fields , {rejectWithValue})=>{
    try{
        const res = await axios.delete( `${backendUrl()}/api/v1/user/delete/${fields.uid}` , {...apiConfig()} ) ;
        return res ;  
    }
    catch(e){
        toast.error(e.message);
        return handleApiError( e , rejectWithValue ); 
    }
})

export const deleteUserReducer = createReducer( initialState , {
    [delteUser.pending] : ( state , action )=>{
        state.status = false ; 
    }
    ,
    [delteUser.fulfilled] : ( state , action )=>{
        state.status = true ; 
        state.res = action.payload ; 
        window.location.reload() ; 
    }
    ,
    [delteUser.rejected] : ( state , action )=>{
        state.status = false ; 
        state.error = action.payload ; 
    }
})