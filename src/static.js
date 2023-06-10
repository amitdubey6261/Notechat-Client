export const backendUrl = () =>{
    return `http://localhost:5000` ; 
}

export const apiConfig = ( ) =>{

    const config = {
        headers : {'Content-Type' : "application/json"} , 
        withCredentials : true 
    }

    return config ; 
}

export const handleApiError = ( e , rejectWithValue ) =>{
    if( e.response || e.response.message ){
        return rejectWithValue( e.response.data ) ; 
    }
    else{
        return rejectWithValue( e.message ) ; 
    }
}