import { createReducer , createAsyncThunk} from '@reduxjs/toolkit' ; 
import axios from 'axios' ; 
import { apiConfig } from '../../static';

const initialState = {
    toggleUserPageDisplay : false , 
    status : null , 
    res : []
}

export const fetchAllUsers = createAsyncThunk( 'users/fetchAllUsers' , async()=>{
    const res = await axios.get('http://localhost:5000/api/v1/user/all' , {...apiConfig()});
    return res ; 
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
