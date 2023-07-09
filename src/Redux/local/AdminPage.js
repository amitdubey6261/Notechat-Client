import { createReducer , createAsyncThunk} from '@reduxjs/toolkit' ; 
import axios from 'axios' ; 
import { apiConfig, backendUrl } from '../../static';
import { toast } from 'react-toastify';

const initialState = {
    toggleUserPageDisplay : false , 
    status : null , 
    res : []
}

export const fetchAllUsers = createAsyncThunk( 'users/fetchAllUsers' , async()=>{
    try{
        const res = await axios.get(`${backendUrl()}/api/v1/user/all` , {...apiConfig()});
        return res ; 
    }
    catch(e){
        toast.error(e.message);
    }
})

export const AdminReducer = createReducer( initialState  , {

    toggleUserDetailPage : ( state , action ) =>{
        if( state.toggleUserPageDisplay == false ){
            state.toggleUserPageDisplay = true ; 
        }
        else{
            state.toggleUserPageDisplay = false ; 
        }
    } 
    , 
    [fetchAllUsers.pending] : (state , action) =>{
        state.status = 'pending' ; 
    }
    ,
    [fetchAllUsers.fulfilled] : (state , action ) =>{
        state.status = 'fullfilled' ; 
        state.res = action.payload.data ; 
    }
    , 
    [fetchAllUsers.rejected] : (state , action ) =>{
        state.status = 'rejected' ; 
    }
})
